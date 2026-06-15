import type { Metadata } from "next";
import ProductHero from "@/components/sections/product/ProductHero";
import CorrectnessFirst from "@/components/sections/product/CorrectnessFirst";
import ScoreComparison from "@/components/sections/product/ScoreComparison";
import AdaptiveQuestions from "@/components/sections/product/AdaptiveQuestions";
import LegalSafety from "@/components/sections/product/LegalSafety";

export const metadata: Metadata = {
  title: "Product — Arion AI",
  description:
    "Arion scores interview answers on factual correctness, not fluency or keywords. See how correctness-first scoring, adaptive questions, and built-in compliance work together.",
};

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <CorrectnessFirst />
      <ScoreComparison />
      <AdaptiveQuestions />
      <LegalSafety />
    </>
  );
}
