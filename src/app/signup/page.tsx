import type { Metadata } from "next";
import AuthShell from "@/components/AuthShell";
import { SignupForm } from "@/components/AuthForms";

export const metadata: Metadata = {
  title: "Start your free trial",
  description:
    "Create your Klok account — 14-day free trial, no credit card required.",
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  return (
    <AuthShell>
      <div className="w-full max-w-md rounded-card border border-line bg-surface p-8 shadow-lift sm:p-10">
        <SignupForm initialPlan={plan} />
      </div>
    </AuthShell>
  );
}
