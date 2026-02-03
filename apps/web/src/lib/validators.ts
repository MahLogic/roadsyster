import { z } from "zod";
import {
  parsePhoneNumber,
  isValidPhoneNumber,
  CountryCode,
  NumberFormat,
} from "libphonenumber-js";

// Advanced phone number validator with multiple options
const createPhoneValidator = (options?: {
  countries?: CountryCode[];
  defaultCountry?: CountryCode;
  types?: ("MOBILE" | "FIXED_LINE" | "FIXED_LINE_OR_MOBILE")[];
  format?: NumberFormat; // Use the correct type from libphonenumber-js
}) => {
  return z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .transform((val, ctx) => {
      // Check basic validity
      if (!isValidPhoneNumber(val, options?.defaultCountry)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid phone number format",
        });
        return z.NEVER;
      }

      try {
        const phoneNumber = parsePhoneNumber(val, options?.defaultCountry);

        // Validate country restriction
        if (
          options?.countries &&
          !options.countries.includes(phoneNumber.country as CountryCode)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Phone number must be from one of: ${options.countries.join(", ")}`,
          });
          return z.NEVER;
        }

        // Validate phone type
        if (
          options?.types &&
          !options.types.includes(phoneNumber.getType() as any)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Phone number must be of type: ${options.types.join(" or ")}`,
          });
          return z.NEVER;
        }

        // Return formatted number - use correct format values
        const format = options?.format || "E.164";
        return phoneNumber.format(format);
      } catch (error) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Failed to parse phone number",
        });
        return z.NEVER;
      }
    });
};

// Advanced email validator with additional checks
const createEmailValidator = (options?: {
  blockedDomains?: string[];
  requireTLD?: boolean;
  maxLength?: number;
}) => {
  return z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email format")
    .max(
      options?.maxLength || 254,
      `Email must be less than ${options?.maxLength || 254} characters`,
    )
    .refine(
      (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      },
      { message: "Email must contain valid characters" },
    )
    .refine(
      (email) => {
        if (!options?.blockedDomains) return true;
        const domain = email.split("@")[1].toLowerCase();
        return !options.blockedDomains.some(
          (blocked) =>
            domain === blocked.toLowerCase() ||
            domain.endsWith(`.${blocked.toLowerCase()}`),
        );
      },
      { message: "This email domain is not allowed" },
    )
    .refine(
      (email) => {
        if (!options?.requireTLD) return true;
        return email.includes(".") && email.split(".").pop()!.length >= 2;
      },
      { message: "Email must have a valid top-level domain" },
    )
    .transform((email) => email.toLowerCase());
};

export { createPhoneValidator, createEmailValidator };
