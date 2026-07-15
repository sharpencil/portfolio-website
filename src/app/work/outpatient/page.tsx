import { Metadata } from "next";
import OutPatientClient from "./OutPatientClient";

export const metadata: Metadata = {
  title: "Outpatient CDI Case Study",
  description: "How I designed an ambulatory Clinical Documentation Integrity platform for Hierarchical Condition Categories (HCC) management.",
  alternates: {
    canonical: "/work/outpatient",
  },
};

export default function OutpatientPage() {
  return <OutPatientClient />;
}
