import type { Metadata } from "next";
import CompanyHero from "@/components/sections/company/CompanyHero";
import OurStory from "@/components/sections/company/OurStory";

export const metadata: Metadata = {
  title: "Company — Arion AI",
  description:
    "Arion AI is a Michigan-based product company focused entirely on the staffing and recruiting industry. One platform, one focus.",
};

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <OurStory />
    </>
  );
}
