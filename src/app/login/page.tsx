import type { Metadata } from "next";
import AuthShell from "@/components/AuthShell";
import { LoginForm } from "@/components/AuthForms";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Klok account.",
};

export default function LoginPage() {
  return (
    <AuthShell>
      <div className="w-full max-w-md rounded-card border border-line bg-surface p-8 shadow-lift sm:p-10">
        <LoginForm />
      </div>
    </AuthShell>
  );
}
