import type { Metadata } from "next";
import LegalArticle from "@/components/LegalArticle";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms that govern your use of Klok.",
};

export default function TermsPage() {
  return (
    <LegalArticle
      title="Terms of service"
      updated="July 2026"
      intro="These are the terms that govern your use of Klok. We've kept them short and readable on purpose — if anything is unclear, ask us before you agree to it."
      sections={[
        {
          heading: "Your account",
          body: "You need an account to use Klok. Keep your credentials safe: you're responsible for activity that happens under your login. You must be at least 16 years old to create an account.",
        },
        {
          heading: "Plans, trials & billing",
          body: "The Solo plan is free forever. Paid plans start with a 14-day trial that requires no credit card; you're only charged if you actively choose to continue. Annual plans are billed once per year, monthly plans once per month, and you can switch or cancel at any time — changes apply at the next billing cycle.",
        },
        {
          heading: "Your data stays yours",
          body: "Everything you track in Klok belongs to you. We claim no ownership over your time entries, client lists, rates, or invoices, and you can export all of it at any time. If you cancel, your account drops to the free plan — we never delete your history out from under you.",
        },
        {
          heading: "Acceptable use",
          body: "Don't use Klok to break the law, infringe on others' rights, probe or disrupt the service, or resell access without our written agreement. We may suspend accounts that put other customers at risk, and we'll always tell you why.",
        },
        {
          heading: "Availability & liability",
          body: "We aim for 99.9% uptime and the apps keep tracking offline when we fall short. Klok is provided \"as is\": to the extent the law allows, our total liability is capped at the amount you paid us in the twelve months before a claim.",
        },
        {
          heading: "Changes to these terms",
          body: "If we make a material change, we'll email you at least 30 days before it takes effect. Continuing to use Klok after that date means you accept the updated terms.",
        },
      ]}
    />
  );
}
