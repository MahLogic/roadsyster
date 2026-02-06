import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import {
  AlertCircle,
  Check,
  Loader,
  Mail,
  Phone,
  User,
} from "feather-icons-react";
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
import { Surface } from "recharts";
import { useMutation } from "convex/react";
import { api } from "convex/_generated/api";
import { trackWaitlistSignup } from "@/lib/posthog";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { usePostHog } from "posthog-js/react";

interface WaitlistDialogProps {
  children: React.ReactNode;
}

type FormState = "idle" | "loading" | "success" | "error";

const formSchema = z.object({
  email: z.email(),
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
});
type FormValues = z.infer<typeof formSchema>;

function WaitlistDialog({ children }: WaitlistDialogProps) {
  const posthog = usePostHog();
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string | undefined>(undefined);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    mode: "onBlur", // Validate on blur for better UX
  });

  const watchedValues = form.watch();

  const isFieldValid = (name: keyof FormValues) => {
    const value = watchedValues[name];
    const fieldSchema = formSchema.shape[name];
    return fieldSchema.safeParse(value).success;
  };

  const joinWaitlist = useMutation(api.waitlist.add);
  const onSubmit = async (data: FormValues) => {
    setFormState("loading");
    try {
      const res = await joinWaitlist(data);
      // res = { status, message, waitlistId }

      setFormState("success");
      setMessage(res.message);

      // Track only on real creation
      if (res.status === "CREATED") {
        toast("You've been added to the waitlist!");
        trackWaitlistSignup(posthog, res.waitlistId);
      }

      form.reset();
    } catch (err) {
      setFormState("error");

      if (err instanceof Error) {
        switch (err.message) {
          case "INVALID_EMAIL":
            setMessage("Please enter a valid email address.");
            break;
          default:
            toast(err.message);
            setMessage("Something went wrong. Please try again.");
        }
      }
    }
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="relative flex gap-3">
                <div
                  className={`pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 transition-colors ${isFieldValid("firstName") && isFieldValid("lastName") ? "text-green-500" : "text-muted-foreground/80"}`}
                >
                  <User size={16} strokeWidth={2} aria-hidden="true" />
                </div>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          className={cn(
                            "ps-9",
                            isFieldValid("firstName")
                              ? "border-green-500"
                              : "border-red-500",
                          )}
                          placeholder="First name"
                          disabled={formState === "loading"}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          className={cn(
                            isFieldValid("lastName")
                              ? "border-green-500"
                              : "border-red-500",
                          )}
                          placeholder="Last name"
                          disabled={formState === "loading"}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          className={cn(
                            "peer ps-9",
                            isFieldValid("email")
                              ? "border-green-500"
                              : "border-red-500",
                          )}
                          placeholder="you@example.com"
                          type="email"
                          disabled={formState === "loading"}
                          {...field}
                        />
                        <div
                          className={`pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50 transition-colors ${isFieldValid("email") ? "text-green-500" : "text-muted-foreground/80"}`}
                        >
                          <Mail size={16} strokeWidth={2} aria-hidden="true" />
                        </div>
                      </div>
                    </FormControl>
                    <FormDescription className="text-xs">
                      {"We'll never share your email with anyone."}
                    </FormDescription>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={
                  formState === "loading" ||
                  !isFieldValid("email") ||
                  !isFieldValid("firstName") ||
                  !isFieldValid("lastName")
                }
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
