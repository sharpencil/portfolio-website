"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WorkClient() {
    const caseStudies = [
        {
            id: "smartstream",
            title: "Project Execution Engine.",
            client: "SmartStream",
            tags: ["AI-Driven Flow", "Continuous Flow", "Explainable AI"],
            description:
                "Translating the AI-Driven Continuous Flow Methodology (AI-CFM) into a high-performance Project Execution Engine. I replaced static backlog boards with a dynamic, real-time pulse timeline forecasting future operations.",
            metrics: "Zero-Friction Operations. Predictive Shift Modeling.",
            imageColor: "bg-gradient-to-br from-slate-900 to-authority-navy border-slate-800",
            layout: "left",
            slug: "/work/smartstream",
            image: "/images/smartstream.png"
        },
        {
            id: "iodine",
            title: "Interact Mobile App.",
            client: "Iodine Software",
            tags: ["Mobile UX/UI", "Material Design", "Healthcare Informatics"],
            description:
                "Modernizing clinical documentation queries. I designed a touch-optimized mobile interface and push system for physicians, transforming clunky desktop EMR widgets into simple, two-minute response loops.",
            metrics: "Increased Response Rate. Under 2-Minute Actions.",
            imageColor: "bg-gradient-to-br from-[#112D4E] to-slate-950",
            layout: "right",
            slug: "/work/iodine-interact",
            image: "/images/iodine_interact.png"
        },
        {
            id: "tforce",
            title: "Operational Intelligence.",
            client: "TForce Logistics",
            tags: ["Legacy Modernization", "React", "Complex Data"],
            description:
                "Solving the 'Commingled Route Paradox.' I re-architected a legacy Java Swing logistics system into a modern web platform. By moving from flat lists to Nested Logic Visualization, I reduced cognitive load for dispatchers handling thousands of orders.",
            metrics: "Reduced Dispatch Error Rate. 40% Faster Onboarding.",
            imageColor: "bg-slate-950",
            layout: "left",
            slug: "/work/operational-intelligence",
            image: "/images/tforce.png"
        },
        {
            id: "siemens",
            title: "Digital Facility Log.",
            client: "Siemens Building Tech",
            tags: ["Remote Diagnostics", "Social UI Style", "Touchscreen Design"],
            description:
                "Translating physical facility logbooks into a dynamic building operations portal. I designed a touch-first, iPad-proportioned collaboration hub featuring real-time activity streams, QR code asset lookups, and remote acoustic diagnostics.",
            metrics: "Remote Collaboration. Sound-Based Diagnostics.",
            imageColor: "bg-gradient-to-br from-[#003C43] to-slate-950",
            layout: "right",
            slug: "/work/siemens-dfl",
            image: "/images/siemens_digitalfacilitylog.png"
        },
        {
            id: "evergreen",
            title: "Student Information System.",
            client: "Evergreen Beauty College",
            tags: ["Clock-Hour Tracking", "Regulatory Compliance", "Role Impersonation"],
            description:
                "Modernizing educational administration for clock-hour institutions. I re-engineered the student account management workflow, enabling compliance tracking, predictive risk monitoring, and seamless role impersonation to streamline audits.",
            metrics: "Automated Financial Aid. Instant Clock-Hour Auditing.",
            imageColor: "bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900",
            layout: "left",
            slug: "/work/evergreen-sis",
            image: "/images/ebc.png"
        },
        {
            id: "siemens-config",
            title: "Configuration Workspace.",
            client: "Siemens Config Tool",
            tags: ["Bulk Configuration", "Standardized UI", "Wizard Workflow"],
            description:
                "Simplifying complex gateway commissioning. I re-designed the engineering configuration workspace, replacing technical JSON interfaces with guided setup wizards, persistent validation rules, and bulk deployment frameworks.",
            metrics: "Zero JSON Errors. 3x Faster Site Commissioning.",
            imageColor: "bg-gradient-to-br from-[#1F4E5B] to-slate-900",
            layout: "right",
            slug: "/work/siemens-config-tool",
            image: "/images/simens_configuration.png"
        },
        {
            id: "outpatient",
            title: "Ambulatory CDI Workspace.",
            client: "ChartWise Outpatient",
            tags: ["HCC Management", "Pre-Visit Planning", "RAF Score Modeling"],
            description:
                "Modernizing ambulatory clinical documentation integrity. I engineered an outpatient workspace focusing on Hierarchical Condition Categories (HCC) capture, a 5-day pre-visit scheduler, and real-time Risk Adjustment Factor (RAF) score calculations.",
            metrics: "Enhanced Medicare Advantage Revenue. Automated Compliance.",
            imageColor: "bg-gradient-to-br from-[#0F1E36] to-slate-950",
            layout: "left",
            slug: "/work/outpatient",
            image: "/images/iodine_outpatient.png"
        },
    ];

    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

    return (
        <main className="min-h-screen bg-white selection:bg-electric-cyan selection:text-authority-navy font-sans">
            <Navbar />

            {/* 1. Hero Section (White Background) */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-authority-navy mb-6">
                        Selected Work.
                    </h1>
                    <p className="text-xl md:text-2xl text-authority-navy/80 font-light max-w-3xl mx-auto leading-relaxed mb-6">
                        Case studies in UX architecture, complex software ecosystems, and design strategy. <br className="hidden md:block" />
                        Focusing on evidence-based systems design and collaborative execution at scale.
                    </p>
                    <div className="max-w-xl mx-auto p-4 bg-slate-gray rounded-xl border border-slate-200 text-xs font-light text-authority-navy/80 leading-relaxed text-center">
                        <strong>Confidentiality Notice:</strong> All client deliverables listed below are subject to strict NDAs. Interactive widgets are sanitized, functional wireframe simulations. High-fidelity designs are available for review upon request.
                    </div>
                </motion.div>
            </section>

            {/* 2. The Case Study Feed (Slate Gray Background) */}
            <section className="py-24 bg-slate-gray">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-24 lg:gap-32">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className={`flex flex-col ${study.layout === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
                                    } gap-12 lg:gap-20 items-center`}
                            >
                                <div className="w-full lg:w-3/5">
                                    <Link href={study.slug || "#"} className={`block aspect-[16/10] rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden relative group cursor-pointer border border-white/50 ${study.imageColor}`}>
                                        {/* Real Image with code fallback */}
                                        {!imageErrors[study.id] && study.image ? (
                                            <div className="absolute inset-0 w-full h-full">
                                                <Image 
                                                    src={study.image} 
                                                    alt={`${study.client} Preview`} 
                                                    fill 
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    onError={() => {
                                                        setImageErrors(prev => ({ ...prev, [study.id]: true }));
                                                    }}
                                                />
                                            </div>
                                        ) : null}

                                        {/* Abstract UI Mockup (Fallback if image fails or is missing) */}
                                        {(!study.image || imageErrors[study.id]) && (
                                            <div className="absolute inset-0 p-6 flex flex-col justify-between overflow-hidden">
                                            {/* SmartStream Mockup */}
                                            {study.id === "smartstream" && (
                                                <div className="w-full h-full flex flex-col justify-between text-white font-mono text-[9px]">
                                                    <div className="flex justify-between items-center opacity-60 border-b border-white/10 pb-2.5">
                                                        <span>PULSE TIMELINE FLOW</span>
                                                        <span>AI-CFM FORECAST ACTIVE</span>
                                                    </div>
                                                    <div className="flex-1 flex flex-col justify-center gap-3 my-2">
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-10 opacity-40 shrink-0">LANE API</span>
                                                            <div className="h-6 bg-white/10 border border-white/20 rounded-lg flex-1 flex items-center px-3">
                                                                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
                                                                <span>Sprint JWT Auth Route</span>
                                                            </div>
                                                            <div className="h-6 bg-white/5 border border-dashed border-white/15 rounded-lg w-20 flex items-center justify-center opacity-40">
                                                                <span>Forecast</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-10 opacity-40 shrink-0">LANE UI</span>
                                                            <div className="h-6 bg-white/10 border border-white/20 rounded-lg w-24 flex items-center px-3">
                                                                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
                                                                <span>Database Init</span>
                                                            </div>
                                                            <div className="h-6 bg-rose-500/10 border border-rose-500/30 rounded-lg flex-1 flex items-center px-3 text-rose-300">
                                                                <span className="w-2 h-2 rounded-full bg-rose-500 mr-2 animate-pulse" />
                                                                <span>Dependency Ripple (+1.5d)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center border-t border-white/10 pt-2.5 text-[8px] opacity-40">
                                                        <span>NOW INDEX ACTIVE</span>
                                                        <span>RIPPLE EFFECT SIMULATION</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Iodine Interact Mockup */}
                                            {study.id === "iodine" && (
                                                <div className="w-full h-full flex items-center justify-center py-2">
                                                    <div className="w-48 h-full bg-slate-900 border-4 border-slate-800 rounded-3xl p-3 flex flex-col justify-between shadow-2xl relative">
                                                        <div className="w-12 h-2.5 bg-slate-800 rounded-full mx-auto mb-1.5" />
                                                        <div className="flex-1 flex flex-col justify-start gap-2 text-left">
                                                            <div className="p-2 bg-white/5 border border-white/10 rounded-xl text-white">
                                                                <div className="text-[6px] font-mono opacity-50 mb-0.5">EMR QUERY SIGNAL</div>
                                                                <div className="text-[9px] font-bold tracking-tight mb-0.5">Confirm Query #341</div>
                                                                <div className="p-1 bg-white/5 rounded text-[6px] font-mono text-cyan-300">
                                                                    "...abnormal potassium levels..."
                                                                </div>
                                                            </div>
                                                            <div className="h-5 bg-electric-cyan rounded-lg flex items-center justify-center text-authority-navy text-[8px] font-bold">
                                                                Yes, Document
                                                            </div>
                                                            <div className="h-5 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white text-[8px] font-bold">
                                                                No, Refute
                                                            </div>
                                                        </div>
                                                        <div className="w-8 h-1 bg-slate-800 rounded-full mx-auto mt-1" />
                                                    </div>
                                                </div>
                                            )}

                                            {/* TForce Logistics Mockup */}
                                            {study.id === "tforce" && (
                                                <div className="w-full h-full flex flex-col justify-between text-white/80 font-mono text-[9px]">
                                                    <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                        <span className="ml-1.5 opacity-40 text-[8px]">DECS_WORKSPACE.SYS</span>
                                                    </div>
                                                    <div className="flex-1 grid grid-cols-3 gap-3 my-3 text-left">
                                                        <div className="col-span-2 border border-slate-800 p-2.5 rounded-lg bg-slate-950/60 flex flex-col gap-2">
                                                            <div className="text-[7px] opacity-40">ORDER ROUTE CHECKLIST</div>
                                                            <div className="h-5 bg-white/5 rounded border border-white/10 flex items-center justify-between px-2 text-[8px]">
                                                                <span>Stop 1: Austin Terminal</span>
                                                                <span className="text-emerald-400">Verified</span>
                                                            </div>
                                                            <div className="h-5 bg-rose-500/10 rounded border border-rose-500/20 flex items-center justify-between px-2 text-[8px] text-rose-300">
                                                                <span>Stop 2: Commingled Hub B</span>
                                                                <span className="text-rose-400">Address Conflict</span>
                                                            </div>
                                                        </div>
                                                        <div className="border border-slate-800 p-2.5 rounded-lg bg-slate-950/60 flex flex-col justify-between">
                                                            <div className="text-[7px] opacity-40">ACCELERATION</div>
                                                            <div className="text-[14px] font-bold text-electric-cyan font-sans leading-none">99.2%</div>
                                                            <div className="text-[6px] opacity-50 leading-tight">API Routing Accuracy</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center opacity-40 border-t border-slate-800 pt-2 text-[8px]">
                                                        <span>ROUTE CLUSTERS SYNCED</span>
                                                        <span>MELISSA API SUPPORT</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Siemens DFL Mockup */}
                                            {study.id === "siemens" && (
                                                <div className="w-full h-full flex items-center justify-center py-2">
                                                    <div className="w-56 h-full bg-slate-900 border-4 border-slate-800 rounded-2xl p-2.5 flex flex-col justify-between shadow-2xl">
                                                        <div className="flex justify-between items-center border-b border-white/10 pb-1 text-[7px] text-white/50 font-mono">
                                                            <span>DIGITAL FACILITY LOG</span>
                                                            <span className="text-electric-cyan">iPad REMOTE</span>
                                                        </div>
                                                        <div className="flex-1 flex flex-col justify-center gap-1.5 my-1 text-left text-white">
                                                            <div className="p-1 bg-white/5 rounded border border-white/10 flex items-start gap-1.5">
                                                                <span className="px-1 py-0.5 bg-rose-500 text-white rounded text-[5px] font-mono font-bold mt-0.5">ALARM</span>
                                                                <div className="leading-tight">
                                                                    <div className="text-[7px] font-bold">Chiller Pressure Spike</div>
                                                                    <div className="text-[6px] opacity-50">Facility Room B • 12m ago</div>
                                                                </div>
                                                            </div>
                                                            <div className="h-5 bg-slate-950 rounded border border-white/5 px-2 flex items-center gap-0.5 overflow-hidden">
                                                                <div className="w-0.5 bg-electric-cyan h-2" />
                                                                <div className="w-0.5 bg-electric-cyan h-1.5" />
                                                                <div className="w-0.5 bg-electric-cyan h-3" />
                                                                <div className="w-0.5 bg-electric-cyan h-2.5" />
                                                                <div className="w-0.5 bg-electric-cyan h-3.5" />
                                                                <div className="w-0.5 bg-electric-cyan h-1.5" />
                                                                <span className="text-[5px] font-mono text-white/40 ml-1.5 truncate">Acoustic Signal Diagnostic Waveform</span>
                                                            </div>
                                                        </div>
                                                        <div className="w-2 h-2 rounded-full bg-slate-800 mx-auto" />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Evergreen SIS Mockup */}
                                            {study.id === "evergreen" && (
                                                <div className="w-full h-full flex flex-col justify-between text-white font-sans">
                                                    <div className="flex justify-between items-center opacity-60 border-b border-white/10 pb-2 text-[8px] font-mono">
                                                        <span>EVERGREEN COLLEGE AUDIT</span>
                                                        <span>IMPERSONATION MODE ACTIVE</span>
                                                    </div>
                                                    <div className="flex-1 flex items-center justify-center gap-3 my-2 text-left">
                                                        <div className="p-2 bg-slate-900 border border-slate-800 rounded-xl flex-1 flex flex-col gap-1.5">
                                                            <div className="text-[7px] font-mono text-emerald-400 font-bold">STUDENT PROGRESS CARD</div>
                                                            <div className="text-[10px] font-bold leading-tight">Clara Martinez (Cosmetology)</div>
                                                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                                                <div className="bg-emerald-500 h-full w-[82%]" />
                                                            </div>
                                                            <div className="flex justify-between text-[6px] font-mono opacity-50">
                                                                <span>984 / 1200 Clock-Hours</span>
                                                                <span>82% Complete</span>
                                                            </div>
                                                        </div>
                                                        <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-xl w-24 flex flex-col justify-center">
                                                            <div className="text-[7px] font-mono text-amber-300 font-bold mb-1">AUDIT INDEX</div>
                                                            <div className="text-[11px] font-bold text-amber-200">Zero Flags</div>
                                                            <div className="text-[5px] text-amber-300/60 font-mono">Title IV Verified</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center border-t border-white/10 pt-2 text-[8px] font-mono opacity-40">
                                                        <span>FEDERAL COMPLIANCE VERIFICATION</span>
                                                        <span>CLOCK-HOUR RECORDING</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Siemens Config Mockup */}
                                            {study.id === "siemens-config" && (
                                                <div className="w-full h-full flex flex-col justify-between text-authority-navy font-sans">
                                                    <div className="flex justify-between items-center opacity-60 border-b border-slate-200 pb-2 text-[8px] font-mono">
                                                        <span>COMMISSIONING WORKSPACE</span>
                                                        <span>PORTAL WIZARD STAGES</span>
                                                    </div>
                                                    <div className="flex-1 flex flex-col gap-2 my-2.5 text-left">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[7px] font-bold">✓</div>
                                                            <span className="text-[8px] font-medium text-slate-600 font-mono">1. Commission Gateway Controller</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-3.5 h-3.5 bg-electric-cyan text-authority-navy rounded-full flex items-center justify-center text-[7px] font-bold">2</div>
                                                            <span className="text-[8px] font-bold text-slate-800 font-mono">2. Apply Bulk Temperature Limits</span>
                                                            <span className="px-1.5 py-0.5 bg-slate-200 rounded text-[6px] font-mono text-slate-500 ml-auto">94 Sites Selected</span>
                                                        </div>
                                                        <div className="h-4 bg-slate-100 border border-slate-200 rounded flex items-center px-1.5 text-[7px] text-slate-600 font-mono">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                                                            <span>All parameters conform to core schema limits.</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center border-t border-slate-200 pt-2 text-[8px] font-mono opacity-40">
                                                        <span>CONCURRENT WRITE PROTECTION</span>
                                                        <span>GRID VIEW PANEL</span>
                                                    </div>
                                                </div>
                                            )}
                                            {/* OutPatient Mockup */}
                                            {study.id === "outpatient" && (
                                                <div className="w-full h-full flex flex-col justify-between text-white font-mono text-[9px]">
                                                    <div className="flex justify-between items-center opacity-60 border-b border-white/10 pb-2.5">
                                                        <span>CHARTWISE OUTPATIENT CDI</span>
                                                        <span className="text-electric-cyan">HCC MANAGER</span>
                                                    </div>
                                                    <div className="flex-1 grid grid-cols-12 gap-3 my-3 text-left">
                                                        {/* Schedule & Pre-Visit Column (8 Cols) */}
                                                        <div className="col-span-8 border border-slate-800 p-2 rounded-lg bg-slate-950/60 flex flex-col gap-2">
                                                            <div className="text-[7px] opacity-40">PRE-VISIT CALENDAR (5-DAY SPREAD)</div>
                                                            <div className="flex gap-1.5 justify-between">
                                                                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, idx) => (
                                                                    <div key={day} className={`flex-1 p-1 rounded border text-center ${idx === 2 ? "bg-electric-cyan/20 border-electric-cyan text-electric-cyan" : "bg-white/5 border-white/10 opacity-60"}`}>
                                                                        <div className="text-[6px]">{day}</div>
                                                                        <div className="font-bold text-[8px] mt-0.5">{idx * 2 + 3}</div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="h-5 bg-white/5 rounded border border-white/10 flex items-center px-1.5 text-[7px] justify-between">
                                                                <span>Confirm HCC Recapture (PCP)</span>
                                                                <span className="text-cyan-300">Ready</span>
                                                            </div>
                                                        </div>
                                                        {/* RAF Score & Query Panel (4 Cols) */}
                                                        <div className="col-span-4 flex flex-col gap-2">
                                                            <div className="border border-slate-800 p-2 rounded-lg bg-slate-950/60 flex-1 flex flex-col justify-between">
                                                                <div className="text-[7px] opacity-40 leading-none">RAF SCORE</div>
                                                                <div className="text-lg font-bold text-electric-cyan tracking-tight">1.84</div>
                                                                <div className="text-[5px] text-emerald-400 font-bold">+0.42 Adj</div>
                                                            </div>
                                                            <div className="h-5 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-[7px] font-bold">
                                                                Query Builder
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center opacity-40 border-t border-white/10 pt-2.5 text-[8px]">
                                                        <span>HCC RECAPTURE KPI</span>
                                                        <span>SNOMED DICTIONARY SYNC</span>
                                                    </div>
                                                </div>
                                            )}
                                            </div>
                                        )}

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="bg-white/90 text-authority-navy px-6 py-2.5 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm tracking-wide">View Case Study</span>
                                        </div>
                                    </Link>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-2/5">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {study.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-electric-cyan/10 text-authority-navy text-xs font-semibold rounded-full uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-authority-navy mb-4">
                                        {study.title}
                                    </h2>
                                    <p className="text-lg text-authority-navy/70 leading-relaxed mb-6 font-light">
                                        {study.description}
                                    </p>
                                    {study.metrics && (
                                        <div className="mb-8 p-4 bg-white border border-slate-200 rounded-lg">
                                            <p className="text-authority-navy font-semibold text-sm">{study.metrics}</p>
                                        </div>
                                    )}

                                    <Link href={study.slug || "#"} className="group inline-flex items-center text-authority-navy font-bold text-lg">
                                        <span className="border-b-2 border-electric-cyan group-hover:border-authority-navy transition-colors duration-300 pb-0.5">View Case Study</span>
                                        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA Section (Deep Navy Background) */}
            <section className="py-24 bg-authority-navy text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Have a complex problem?</h2>
                    <p className="text-xl md:text-2xl text-white/70 mb-10 font-light">
                        I specialize in complex product ecosystems that other designers turn down.
                    </p>
                    <Link
                        href="/start"
                        className="inline-block px-10 py-4 text-lg font-bold text-authority-navy bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 hover:-translate-y-1 transition-all duration-300"
                    >
                        Start Conversation
                    </Link>
                </div>
            </section>
        </main>
    );
}
