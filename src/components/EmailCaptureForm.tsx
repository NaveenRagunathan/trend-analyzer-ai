import React, { useState } from "react";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { AlertCircle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

interface EmailCaptureFormProps {
  onSubmit?: (email: string) => void;
  buttonText?: string;
  placeholderText?: string;
  privacyText?: string;
}

const emailSchema = z.string().email("Please enter a valid email address");

const EmailCaptureForm = ({
  onSubmit,
  buttonText = "Get Early Access",
  placeholderText = "Enter your email",
  privacyText = "We'll only notify you when we launch — no spam.",
}: EmailCaptureFormProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsSubmitting(true);

    try {
      // Validate email
      emailSchema.parse(email);

      // Call onSubmit callback if provided
      if (onSubmit) {
        await onSubmit(email);
      }

      // Show success state
      setSuccess(true);
      setEmail("");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError("Failed to submit. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-transparent relative z-10">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-mint via-accent to-secondary rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      <div className="relative bg-[#1E1E3F]/80 backdrop-blur-sm rounded-xl p-1.5 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <div
                  className={`relative ${isFocused ? "ring-2 ring-mint/50" : ""} rounded-lg transition-all duration-300`}
                >
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholderText}
                    className="w-full h-14 px-5 rounded-lg border-2 border-[#3DD598]/20 bg-[#120D3A]/80 text-lavender placeholder:text-[#A89EC9] focus:border-mint focus:ring-1 focus:ring-mint transition-all duration-300"
                    disabled={isSubmitting || success}
                    aria-invalid={!!error}
                    aria-describedby={error ? "email-error" : undefined}
                    autoFocus
                  />
                  <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-mint opacity-50" />
                </div>
                {error && (
                  <div
                    className="absolute -bottom-6 left-0 text-xs text-red-400 flex items-center gap-1"
                    id="email-error"
                  >
                    <AlertCircle className="h-3 w-3" />
                    <span>{error}</span>
                  </div>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || success || !email}
                className="h-14 px-6 font-bold font-mono tracking-tight bg-gradient-to-r from-mint to-[#2DD4BF] hover:from-[#2DD4BF] hover:to-mint text-[#120D3A] rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-mint/20 flex items-center gap-2"
              >
                {buttonText}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {success && (
            <div className="text-sm text-mint flex items-center gap-1.5 bg-mint/10 p-2 rounded-md">
              <CheckCircle2 className="h-4 w-4" />
              <span>Thanks! We'll be in touch when we launch.</span>
            </div>
          )}

          <p className="text-xs text-[#A89EC9] text-center px-2">
            {privacyText}
          </p>
        </form>
      </div>
    </div>
  );
};

export default EmailCaptureForm;
