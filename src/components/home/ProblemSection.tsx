"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, Cpu, Activity } from "lucide-react";

const problems = [
    {
        title: "System Fragmentation",
        description: "Siloed product modules designed without a unified interaction architecture lead to disjointed experiences and higher customer support volume.",
        icon: AlertTriangle
    },
    {
        title: "The Handoff Bottleneck",
        description: "Handing off layout specs without state definitions forces development teams to guess interface behavior, causing delays and refactoring loops.",
        icon: Cpu
    },
    {
        title: "Happy-Path Blindness",
        description: "Software that functions under ideal conditions but fails to address complex data states, latency, network errors, and cognitive load exceptions.",
        icon: Activity
    },
    {
        title: "Governance Overload",
        description: "Design systems that exist solely as static libraries in design files but lack direct token mapping and structural synchronization with live production code.",
        icon: ShieldAlert
    }
];

export default function ProblemSection() {
    return (
        <section className="py-24 bg-slate-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-authority-navy mb-6">
                        Enterprise Platforms are Complex. <br />Design is Only Half the Solution.
                    </h2>
                    <p className="text-xl text-authority-navy/70 font-light leading-relaxed">
                        Without cognitive systems engineering, digital products accumulate technical and interaction debt.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white/60 hover:-translate-y-1 transition-transform duration-300 card-clay flex items-start gap-6"
                        >
                            <div className="mt-1 p-3 bg-authority-navy/5 rounded-2xl shrink-0">
                                <item.icon className="w-6 h-6 text-authority-navy" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-authority-navy mb-2">{item.title}</h3>
                                <p className="text-authority-navy/70 font-light leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
