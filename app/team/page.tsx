import type { Metadata } from "next";
import TeamHero from "@/components/sections/team/TeamHero";
import TeamGrid from "@/components/sections/team/TeamGrid";

export const metadata: Metadata = {
  title: "Team — Arion AI",
  description:
    "Meet the two co-founders of Arion AI: Shreyas Balaji (CEO & CTO) and Abhinav Mosra (CFO & Lead Engineer). Built in Michigan.",
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamGrid />
    </>
  );
}
