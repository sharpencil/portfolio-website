import { Metadata } from "next";
import ResumeClient from "./ResumeClient";

export const metadata: Metadata = {
  title: "Professional Resume | Young Ryu, Ph.D.",
  description: "CV & Professional Resume of Young Ryu, Ph.D. | Director of UX & Cognitive Systems Engineer. Specializing in B2B enterprise software and product strategy.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}
