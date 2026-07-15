"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export default function EngagementCriteria() {
    return (
        <section className="py-24 bg-authority-navy text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Organizational Fit</h2>
                    <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
                        I serve as a strategic design leader, bridging human factors research and complex software engineering at scale.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border border-white/10">

                    {/* Left Column: Compatible */}
                    <div className="p-10 md:p-12 bg-white/5 backdrop-blur-sm border-r border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                            How I add value to in-house teams:
                        </h3>
                        <p className="text-white/50 text-sm uppercase tracking-widest mb-8">Value Drivers</p>

                        <ul className="space-y-6">
                            {[
                                "Leading Complex Enterprise Software (FinTech, MedTech, IoT)",
                                "Cross-Functional Design-to-Engineering Integration",
                                "Advancing Rigorous Human Factors & User Research",
                                "Scaling Production-Grade Design Systems"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-electric-cyan shrink-0" />
                                    <span className="text-base font-light text-white/90 leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Conflicts */}
                    <div className="p-10 md:p-12 bg-white/5 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                            Mismatched work environments:
                        </h3>
                        <p className="text-white/50 text-sm uppercase tracking-widest mb-8">Design Friction Points</p>

                        <ul className="space-y-6">
                            {[
                                "Purely Cosmetic or Happy-Path-Only Design Tasks",
                                "Static Design Handoffs without Interactive Logic",
                                "Waterfall or Siloed Departmental Workflows",
                                "Lack of Research & Evidence-Based Decision Making"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <XCircle className="w-6 h-6 text-slate-400 shrink-0" />
                                    <span className="text-base font-light text-white/60 leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
