import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustTicker from "@/components/home/TrustTicker";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import EngagementCriteria from "@/components/home/EngagementCriteria";
import TechStack from "@/components/home/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Young Ryu, Ph.D. | Director of UX & Product Design",
  description: "Cognitive Systems Engineer & UX Architect bridging the gap between Cognitive Science and Shipped Code. Specializing in advanced human-AI systems, complex dashboards, and product logic.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-electric-cyan selection:text-authority-navy font-sans">
      <Navbar />
      <Hero />
      <TrustTicker />
      <ProblemSection />
      <SolutionSection />
      <EngagementCriteria />
      <TechStack />
    </main>
  );
}
