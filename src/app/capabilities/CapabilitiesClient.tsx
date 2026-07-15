"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Database, Cpu, Layers, Activity, BrainCircuit, Code, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function CapabilitiesClient() {
    return (
        <main className="min-h-screen bg-white selection:bg-electric-cyan selection:text-authority-navy font-sans">
            <Navbar />

            {/* 1. Hero Section (White Background) */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-authority-navy mb-6">
                            Capabilities.
                        </h1>
                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light max-w-lg leading-relaxed border-l-4 border-electric-cyan pl-6">
                            Design leadership, systems architecture, and UX engineering built for scale.
                        </p>
                    </motion.div>

                    <div className="relative h-[400px] flex items-center justify-center perspective-1000">
                        {/* 3D Glass Stack Icon Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, rotateX: 20, rotateY: -20 }}
                            animate={{ opacity: 1, rotateX: 10, rotateY: -10 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative w-64 h-64 transform-style-3d group cursor-pointer"
                        >
                            {/* Layer 1 (Bottom) */}
                            <div className="absolute top-20 left-0 w-full h-full bg-slate-gray/50 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl transform translate-z-[-40px] group-hover:translate-z-[-60px] transition-transform duration-500 ease-out flex items-center justify-center">
                                <Database className="w-16 h-16 text-authority-navy/20" />
                            </div>
                            {/* Layer 2 (Middle) */}
                            <div className="absolute top-10 left-0 w-full h-full bg-white/40 backdrop-blur-lg border border-white/60 rounded-3xl shadow-2xl transform translate-z-[0px] group-hover:translate-z-[0px] transition-transform duration-500 ease-out flex items-center justify-center">
                                <Cpu className="w-16 h-16 text-authority-navy/40" />
                            </div>
                            {/* Layer 3 (Top) */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/60 to-white/10 backdrop-blur-xl border border-white/80 rounded-3xl shadow-2xl transform translate-z-[40px] group-hover:translate-z-[60px] transition-transform duration-500 ease-out flex items-center justify-center">
                                <Layers className="w-20 h-20 text-electric-cyan" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/40 rounded-3xl" />
                            </div>
                        </motion.div>
                        <div className="absolute -bottom-10 w-1/2 h-4 bg-black/5 blur-xl rounded-full" />
                    </div>
                </div>
            </section>

            {/* 2. The Process: "The Logic Engine" (Slate Gray Background) */}
            <section className="py-24 bg-slate-gray relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-authority-navy mb-4">UX Architecture Model</h2>
                        <p className="text-lg text-authority-navy/70 max-w-2xl mx-auto">
                            I align user research with product strategy, bridging the gap between design vision and engineering execution.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-authority-navy/10 md:left-1/2 md:-ml-px"></div>

                        {/* Process Steps */}
                        {[
                            {
                                title: "1. Product Discovery & De-risking",
                                desc: "Clarity precedes code. I partner with product managers and executives to validate business logic and user research before development starts. By pressure-testing hypotheses early, we avoid wasted engineering cycles.",
                                icon: Activity
                            },
                            {
                                title: "2. Information & Data Architecture",
                                desc: "Designing the 90% below the surface. I structure the information hierarchy, user flows, and complex data relationships needed for high-complexity applications and modern AI integrations.",
                                icon: BrainCircuit
                            },
                            {
                                title: "3. Interaction Design & Edge Cases",
                                desc: "Building comprehensive workflows. I design flexible layouts that handle edge cases, dynamic states, and unexpected user behaviors, ensuring system reliability under pressure.",
                                icon: Layers
                            },
                            {
                                title: "4. Rapid Functional Prototyping",
                                desc: "No more passive simulation. I build interactive HTML/JS prototypes in the browser to run usability tests with real users, exposing design flaws that static Figma screens miss.",
                                icon: Code
                            },
                            {
                                title: "5. Design Systems & Governance",
                                desc: "Establishing scale. I establish and scale design systems and code tokens to ensure visual and behavioral consistency across multiple product teams and platforms.",
                                icon: ShieldCheck
                            },
                            {
                                title: "6. Engineering Partnership & QA",
                                desc: "Bridging the execution gap. I translate design files into clean, production-ready front-end code, working alongside developers to ensure pixel-perfect delivery.",
                                icon: Cpu
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                <div className="hidden md:block w-1/2" />

                                <div className="absolute left-0 md:left-1/2 md:-ml-6 w-12 h-12 rounded-full bg-white border-4 border-slate-gray shadow-md flex items-center justify-center z-10">
                                    <step.icon className="w-5 h-5 text-electric-cyan" />
                                </div>

                                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                                    <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 card-clay">
                                        <h3 className="text-xl font-bold text-authority-navy mb-3">{step.title}</h3>
                                        <p className="text-authority-navy/70 leading-relaxed text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. The Technology: "The UX Leadership Stack" (Deep Navy Background) */}
            <section className="py-24 bg-authority-navy text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16">The UX Leadership Stack</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 text-xl md:text-2xl font-semibold">
                        <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-xl backdrop-blur-sm w-full md:w-auto">
                            <span className="block text-sm text-electric-cyan/70 font-mono mb-2 uppercase tracking-widest">The Foundation</span>
                            Ph.D. Human Factors
                        </div>

                        <span className="text-electric-cyan text-4xl font-light">+</span>

                        <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-xl backdrop-blur-sm w-full md:w-auto">
                            <span className="block text-sm text-electric-cyan/70 font-mono mb-2 uppercase tracking-widest">The Integration</span>
                            Design-to-Code Systems
                        </div>

                        <span className="text-electric-cyan text-4xl font-light">×</span>

                        <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-xl backdrop-blur-sm w-full md:w-auto">
                            <span className="block text-sm text-electric-cyan/70 font-mono mb-2 uppercase tracking-widest">The Velocity</span>
                            Agentic AI Acceleration
                        </div>

                        <span className="text-electric-cyan text-4xl font-light">=</span>

                        <div className="text-electric-cyan font-bold text-3xl md:text-4xl mt-4 md:mt-0">
                            Systems UX Leadership
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Engagement Models (Removed) */}

            {/* 5. CTA Section (Slate Gray Background) */}
            <section className="py-24 bg-slate-gray text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-authority-navy mb-8">Ready to build with rigor?</h2>
                    <Link href="/start" className="inline-block px-10 py-4 text-lg font-bold text-authority-navy bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/30 hover:shadow-electric-cyan/50 hover:-translate-y-1 transition-all duration-300">
                        Start a conversation
                    </Link>
                </div>
            </section>
        </main>
    );
}
