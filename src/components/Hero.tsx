"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center bg-white overflow-hidden pt-20"> {/* pt-20 to offset fixed navbar */}
            {/* Background Grid Pattern - Very light, clean blueprint grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#001F3F_1px,transparent_1px),linear-gradient(to_bottom,#001F3F_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Side: Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white z-10"
                >
                    <div className="inline-block text-sm font-mono font-bold text-electric-cyan mb-6 tracking-widest uppercase">
                        Young Ryu, Ph.D. | Austin, TX
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-authority-navy leading-[1.1] mb-6">
                        Designing logic for{" "}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-authority-navy to-electric-cyan">
                            complex systems.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-authority-navy/80 mb-8 max-w-lg font-light leading-relaxed">
                        I lead cross-functional product design teams, bridging human factors research and code to solve complex software challenges.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/capabilities"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-authority-navy bg-white border-2 border-authority-navy rounded-full hover:bg-authority-navy hover:text-white transition-all duration-300"
                        >
                            Explore Capabilities
                        </Link>
                        <Link
                            href="/start"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-authority-navy bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/25 hover:shadow-electric-cyan/50 hover:-translate-y-1 transition-all duration-300"
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>

                {/* Right Side: Glass Stack Visual */}
                <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
                    <div className="absolute inset-0 bg-gradient-radial from-slate-gray/50 to-transparent blur-3xl opacity-50 scale-75" />

                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: 20, rotateY: -20 }}
                        animate={{ opacity: 1, y: 0, rotateX: 10, rotateY: -10 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="relative w-80 h-80 md:w-96 md:h-96 transform-style-3d group cursor-pointer"
                    >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-electric-cyan/15 border border-slate-800 bg-slate-950/95 backdrop-blur-sm z-10 flex flex-col justify-between p-6 text-white font-mono text-[10px]">
                            {/* Window Header */}
                            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                    <span className="text-slate-500 ml-2 font-mono text-[9px]">SYSTEMS_ARCHITECTURE.EXE</span>
                                </div>
                                <span className="text-electric-cyan text-[8px] animate-pulse">ACTIVE RUN</span>
                            </div>

                            {/* Node Chart Graphic */}
                            <div className="flex-1 flex items-center justify-between relative my-6">
                                {/* Connector Lines */}
                                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-[2px] bg-slate-800 z-0">
                                    <motion.div 
                                        className="h-full bg-gradient-to-r from-electric-cyan to-emerald-400"
                                        initial={{ width: "0%" }}
                                        animate={{ width: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </div>

                                {/* Node 1: Cognitive Research */}
                                <div className="w-20 p-2.5 rounded-xl border border-slate-800 bg-slate-900/90 text-center z-10 hover:border-electric-cyan transition-colors">
                                    <span className="text-electric-cyan block font-bold text-[7px] uppercase tracking-wider mb-1 font-mono">NODE 01</span>
                                    <span className="font-sans font-medium text-white block text-[9px] leading-tight">Human Factors</span>
                                </div>

                                {/* Node 2: Logic Schema */}
                                <div className="w-24 p-2.5 rounded-xl border border-slate-700 bg-slate-900/90 text-center z-10 hover:border-electric-cyan transition-colors shadow-lg shadow-electric-cyan/5">
                                    <span className="text-electric-cyan block font-bold text-[7px] uppercase tracking-wider mb-1 font-mono">STATE MACHINE</span>
                                    <span className="font-sans font-medium text-white block text-[9px] leading-tight">Interaction Logic</span>
                                </div>

                                {/* Node 3: Live Code */}
                                <div className="w-20 p-2.5 rounded-xl border border-slate-800 bg-slate-900/90 text-center z-10 hover:border-emerald-400 transition-colors">
                                    <span className="text-emerald-400 block font-bold text-[7px] uppercase tracking-wider mb-1 font-mono">NODE 03</span>
                                    <span className="font-sans font-medium text-white block text-[9px] leading-tight">Production Code</span>
                                </div>
                            </div>

                            {/* Status bar */}
                            <div className="border-t border-slate-800 pt-3 flex justify-between text-slate-500 text-[8px]">
                                <span>SHIPPED LOGIC VERIFICATION</span>
                                <span>LATENCY: 0.00ms</span>
                            </div>
                        </div>

                        {/* Floating Card 1: Logic Status (Top Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, y: -20 }}
                            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                            transition={{
                                opacity: { duration: 0.8, delay: 0.5 },
                                x: { duration: 0.8, delay: 0.5 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                            }}
                            className="absolute -top-12 -right-8 md:-right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-white z-20 flex items-center gap-3"
                        >
                            <div className="bg-electric-cyan/10 p-2 rounded-full">
                                <ShieldCheck className="w-5 h-5 text-electric-cyan" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-authority-navy/40">Systems UX</div>
                                <div className="text-sm font-bold text-authority-navy">Scale & Logic</div>
                            </div>
                        </motion.div>

                        {/* Floating Card 2: Velocity Metric (Bottom Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
                            transition={{
                                opacity: { duration: 0.8, delay: 0.7 },
                                x: { duration: 0.8, delay: 0.7 },
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
                            }}
                            className="absolute -bottom-12 -left-8 md:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-white z-20 flex items-center gap-3"
                        >
                            <div className="bg-electric-cyan/10 p-2 rounded-full">
                                <TrendingUp className="w-5 h-5 text-electric-cyan" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-authority-navy/40">Cross-Functional</div>
                                <div className="text-sm font-bold text-authority-navy">Design to Code</div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
