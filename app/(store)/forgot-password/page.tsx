"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Mail, ArrowLeft } from "lucide-react";
import { AuthShell } from "@/components/shared/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    toast.success("Reset link sent (demo - no backend connected)");
  }

  return (
    <AuthShell
      title="Forgot password"
      subtitle="Enter your email and we'll send you a reset link"
      footer={
        <Link href="/login" className="flex items-center justify-center gap-1.5 font-semibold text-primary hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to login
        </Link>
      }
    >
      {sent ? (
        <div className="py-4 text-center">
          <p className="font-semibold">Check your inbox!</p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            If an account exists for that email, a reset link is on its way.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" type="email" required placeholder="you@example.com" className="pl-10" />
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full">
            Send Reset Link
          </Button>
        </form>
      )}
    </AuthShell>
  );
}
