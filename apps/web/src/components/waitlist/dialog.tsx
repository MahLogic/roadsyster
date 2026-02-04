import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { AlertCircle, Check, Loader, Mail, Phone } from "feather-icons-react";
import { WhatsAppShareButton } from "./whatsapp-share-btn";
import type React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { CountryCode, isValidPhoneNumber } from "libphonenumber-js";
import { createEmailValidator, createPhoneValidator } from "@/lib/validators";
import PhoneInput from "../phone-input";

interface WaitlistDialogProps {
  children: React.ReactNode;
  countryCode?: CountryCode;
}

type FormState = "idle" | "loading" | "success" | "error";

const formSchema = z.object({
  email: z.email(),
  contact: z
    .string()
    .refine(
      (phone) => {
        try {
          return isValidPhoneNumber(phone);
        } catch {
          return false;
        }
      },
      { message: "Invalid phone number" },
    )
    .optional(),
});
type FormValues = z.infer<typeof formSchema>;

function WaitlistDialog({ children, countryCode = "ZA" }: WaitlistDialogProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState<string | undefined>(undefined);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      contact: "",
    },
    mode: "onBlur", // Validate on blur for better UX
  });

  // const joinWaitlistServer = useServerFn(joinWaitlist);
  const onSubmit = async (data: FormValues) => {
    console.log("adding");
    setFormState("loading");
    // const { success, message: msg } = await joinWaitlistServer({
    //   data,
    // });
    // if (success) {
    //   setFormState("success");
    //   form.reset();
    // } else {
    //   setFormState("error");
    // }

    setMessage("msg");
  };

  const resetForm = () => {
    setFormState("idle");
    form.reset();
  };

  return (
    <Dialog onOpenChange={(open) => !open && setTimeout(resetForm, 300)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="mb-2 flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            {formState === "success" ? (
              <Check className="text-green-600 dark:text-green-500" size={20} />
            ) : formState === "error" ? (
              <AlertCircle
                className="text-orange-600 dark:text-orange-500"
                size={20}
              />
            ) : (
              <svg
                className="stroke-foreground"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 18L18 6" />
                <path d="M8 6h10v10" />
              </svg>
            )}
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              {formState === "success"
                ? (message ?? "You're on the list!")
                : formState === "error"
                  ? (message ?? "Something went wrong")
                  : "Get early access"}
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              {formState === "success"
                ? "We'll reach out with updates."
                : formState === "error"
                  ? "Please try again in a moment."
                  : "Built for freelancers and solo consultants."}
            </DialogDescription>
          </DialogHeader>
        </div>

        {formState === "idle" || formState === "loading" ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className="peer ps-9"
                          placeholder="you@example.com"
                          type="email"
                          disabled={formState === "loading"}
                          {...field}
                        />
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                          <Mail size={16} strokeWidth={2} aria-hidden="true" />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                    <FormDescription className="text-xs">
                      We'll never share your email with anyone.
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <PhoneInput
                          {...field}
                          id="phone-field"
                          placeholder="(123) 456-7890 (optional)"
                          className="border rounded-lg h-10 w-full"
                          disabled={formState === "loading"}
                          onBlur={field.onBlur}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={formState === "loading"}
              >
                {formState === "loading" ? (
                  <>
                    <Loader className="mr-2 size-4 animate-spin" />
                    Joining waitlist...
                  </>
                ) : (
                  "Join waitlist"
                )}
              </Button>
            </form>
          </Form>
        ) : formState === "error" ? (
          <Button onClick={resetForm} className="w-full">
            Try again
          </Button>
        ) : (
          <WhatsAppShareButton>Share on WhatsApp</WhatsAppShareButton>
        )}

        {formState === "idle" && (
          <p className="text-center text-xs text-muted-foreground">
            No spam. Built by{" "}
            <span className="font-medium text-foreground">
              MahLogic Solutions
            </span>
            .
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}

export { WaitlistDialog };
