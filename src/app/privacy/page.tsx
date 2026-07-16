import type { Metadata } from "next";
import LegalArticle from "@/components/LegalArticle";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Klok handles your data.",
};

export default function PrivacyPage() {
  return (
    <LegalArticle
      title="Privacy policy"
      updated="July 2026"
      intro="Your time logs are a record of how you work — that's sensitive, and we treat it that way. This policy explains, in plain language, what Klok collects, why, and what we will never do with it."
      sections={[
        {
          heading: "What we collect",
          body: "Your account details (name, email), the time entries, clients, projects, and rates you create, and basic product analytics (which features are used, never the content of your work). Payment details are handled entirely by our payment processor and never touch our servers.",
        },
        {
          heading: "What we never do",
          body: "We don't sell your data, we don't show ads, and we don't train machine-learning models on your work. Your client names, rates, and hours are visible only to you and the teammates you explicitly invite.",
        },
        {
          heading: "Where your data lives",
          body: "Data is encrypted in transit (TLS 1.3) and at rest (AES-256), stored in EU and US data centres with daily backups. You can choose your data region on the Collective plan.",
        },
        {
          heading: "Your rights",
          body: "Export everything as CSV or PDF at any time, on any plan. You can correct or delete your data yourself from Settings, or ask us to erase your account entirely — we complete deletion requests within 30 days.",
        },
        {
          heading: "Cookies",
          body: "We use a session cookie to keep you logged in and one first-party analytics cookie. No third-party advertising or cross-site tracking cookies, ever.",
        },
        {
          heading: "Contact",
          body: "Questions about this policy? Email hello@klok.example.com and a real human will reply within two business days.",
        },
      ]}
    />
  );
}
