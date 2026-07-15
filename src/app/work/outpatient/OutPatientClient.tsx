"use client";

import Navbar from "@/components/Navbar";
import NDABanner from "@/components/NDABanner";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowLeft, 
    ArrowRight, 
    CheckCircle2, 
    Check, 
    AlertTriangle, 
    Users, 
    Activity, 
    Cpu, 
    RefreshCw, 
    FileText, 
    Calendar, 
    Plus, 
    HeartPulse, 
    Sparkles, 
    UserCheck,
    Briefcase
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Types for Outpatient Simulator
interface PatientCase {
    id: string;
    name: string;
    age: number;
    visitDate: string;
    baseRaf: number;
    problemList: string[];
    unconfirmedProblems: { code: string; name: string }[];
    historicalHccs: { code: string; name: string; hcc: number; weight: number }[];
    capturedHccIds: string[];
    isProblemListReviewed: boolean;
    isHccReviewed: boolean;
    notes: string[];
}

export default function OutPatientClient() {
    // Simulator schedule states
    const [selectedDay, setSelectedDay] = useState<"Mon" | "Tue" | "Wed" | "Thu" | "Fri">("Wed");
    const [activeCaseId, setActiveCaseId] = useState<string>("case-1");
    const [noteInput, setNoteInput] = useState("");
    const [recipientEmail, setRecipientEmail] = useState("");
    const [queryStatus, setQueryStatus] = useState<"idle" | "building" | "sent">("idle");
    const [queryText, setQueryText] = useState("");

    // Simulated Patients Cases
    const [cases, setCases] = useState<PatientCase[]>([
        {
            id: "case-1",
            name: "James Cooper",
            age: 72,
            visitDate: "Wednesday, Oct 14",
            baseRaf: 1.02,
            problemList: ["Hypertension", "Hyperlipidemia", "Gastroesophageal Reflux Disease"],
            unconfirmedProblems: [
                { code: "E11.9", name: "Type 2 Diabetes Mellitus (Unconfirmed in current visit)" }
            ],
            historicalHccs: [
                { code: "E11.9", name: "Type 2 Diabetes Mellitus", hcc: 19, weight: 0.318 },
                { code: "N18.3", name: "Chronic Kidney Disease, Stage 3", hcc: 138, weight: 0.284 }
            ],
            capturedHccIds: [],
            isProblemListReviewed: false,
            isHccReviewed: false,
            notes: ["Patient has missed the last two scheduled primary care visits.", "Reviewed previous lab records indicating elevated creatinine levels."]
        },
        {
            id: "case-2",
            name: "Eleanor Davis",
            age: 68,
            visitDate: "Wednesday, Oct 14",
            baseRaf: 0.85,
            problemList: ["Osteoarthritis", "Depression", "Gout"],
            unconfirmedProblems: [
                { code: "J44.9", name: "Chronic Obstructive Pulmonary Disease (Unconfirmed)" }
            ],
            historicalHccs: [
                { code: "J44.9", name: "COPD", hcc: 111, weight: 0.335 },
                { code: "E66.01", name: "Morbid Obesity, BMI > 40", hcc: 22, weight: 0.273 }
            ],
            capturedHccIds: [],
            isProblemListReviewed: false,
            isHccReviewed: false,
            notes: ["Requires oxygen sync verification.", "Discussed lifestyle management goals with health coach."]
        },
        {
            id: "case-3",
            name: "Robert Miller",
            age: 75,
            visitDate: "Thursday, Oct 15",
            baseRaf: 1.15,
            problemList: ["Atrial Fibrillation", "Hypothyroidism"],
            unconfirmedProblems: [
                { code: "I50.9", name: "Congestive Heart Failure (Unconfirmed)" }
            ],
            historicalHccs: [
                { code: "I50.9", name: "Congestive Heart Failure", hcc: 85, weight: 0.368 },
                { code: "I48.91", name: "Chronic Atrial Fibrillation", hcc: 96, weight: 0.268 }
            ],
            capturedHccIds: ["I48.91"],
            isProblemListReviewed: false,
            isHccReviewed: false,
            notes: ["Cardiologist consultation notes reviewed."]
        }
    ]);

    const activeCase = cases.find(c => c.id === activeCaseId) || cases[0];

    // Toggle captured HCC logic
    const handleToggleHcc = (hccCode: string) => {
        setCases(prev => prev.map(c => {
            if (c.id !== activeCaseId) return c;
            const exists = c.capturedHccIds.includes(hccCode);
            return {
                ...c,
                capturedHccIds: exists 
                    ? c.capturedHccIds.filter(id => id !== hccCode) 
                    : [...c.capturedHccIds, hccCode]
            };
        }));
    };

    // Calculate current RAF score
    const calculateRaf = (c: PatientCase) => {
        let totalRaf = c.baseRaf;
        c.capturedHccIds.forEach(hccCode => {
            const match = c.historicalHccs.find(h => h.code === hccCode);
            if (match) {
                totalRaf += match.weight;
            }
        });
        return Math.round(totalRaf * 1000) / 1000;
    };

    // Add note logic
    const handleAddNote = (e: React.FormEvent) => {
        e.preventDefault();
        if (!noteInput.trim()) return;

        setCases(prev => prev.map(c => {
            if (c.id !== activeCaseId) return c;
            return {
                ...c,
                notes: [...c.notes, noteInput.trim()]
            };
        }));
        setNoteInput("");
    };

    // Mark reviewed states
    const toggleWorkflowStatus = (type: "problem" | "hcc") => {
        setCases(prev => prev.map(c => {
            if (c.id !== activeCaseId) return c;
            return {
                ...c,
                isProblemListReviewed: type === "problem" ? !c.isProblemListReviewed : c.isProblemListReviewed,
                isHccReviewed: type === "hcc" ? !c.isHccReviewed : c.isHccReviewed
            };
        }));
    };

    // Query Builder simulation
    const handleGenerateQuery = (problemName: string) => {
        setQueryStatus("building");
        setQueryText(`Dear Provider, 

Upon pre-visit review of the patient's EHR records, the chronic diagnosis of '${problemName}' was identified as documented in external laboratory/consultation files but is currently missing from the active Problem List/HCC recapture workflow for the current calendar year.

Could you please confirm if this condition remains active and should be formally addressed during the upcoming face-to-face encounter on ${activeCase.visitDate}?

Thank you,
Outpatient CDI Specialist`);
    };

    const handleSendQuery = () => {
        setQueryStatus("sent");
        setTimeout(() => {
            setQueryStatus("idle");
            setQueryText("");
            alert("Provider query sent successfully to the EHR communication inbox!");
        }, 1500);
    };

    // Filtered list by day
    const getCasesByDay = () => {
        if (selectedDay === "Mon" || selectedDay === "Tue") return []; // Empty schedule placeholders
        if (selectedDay === "Wed") return cases.filter(c => c.id === "case-1" || c.id === "case-2");
        if (selectedDay === "Thu") return cases.filter(c => c.id === "case-3");
        return [];
    };

    const currentDayCases = getCasesByDay();

    return (
        <main className="min-h-screen bg-white selection:bg-electric-cyan selection:text-authority-navy font-sans text-authority-navy">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-gray/30">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link href="/work" className="inline-flex items-center text-sm font-semibold text-authority-navy/60 hover:text-electric-cyan transition-colors mb-8 group">
                            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                            Back to Selected Work
                        </Link>

                        <div className="flex items-center gap-4 mb-6 text-sm font-mono">
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">Ambulatory Revenue Cycle</span>
                            <span className="text-authority-navy/30">•</span>
                            <span className="text-authority-navy/60">ChartWise Outpatient</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight max-w-4xl">
                            Ambulatory CDI Workspace: Optimizing Risk Adjustment & HCC Capture
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6 max-w-3xl">
                            How I designed an outpatient Clinical Documentation Integrity platform to streamline pre-visit planning, automate Hierarchical Condition Category (HCC) capture, and compute real-time Risk Adjustment Factor (RAF) scores.
                        </p>
                        <NDABanner theme="light" className="mb-12" />
                    </motion.div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5 font-mono">Core Focus</div>
                            <div className="text-base font-bold text-authority-navy">Hierarchical Condition Categories (HCC) & Problem List Accuracy.</div>
                        </div>
                        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5 font-mono">Methodology</div>
                            <div className="text-base font-bold text-authority-navy">Prospective Pre-Visit Planning (5-Day Calendar Spread).</div>
                        </div>
                        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5 font-mono">Calculations</div>
                            <div className="text-base font-bold text-authority-navy">CMS Risk Adjustment Factor (RAF) Score Modeling on demand.</div>
                        </div>
                        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5 font-mono">UX Innovation</div>
                            <div className="text-base font-bold text-authority-navy">Integrated Query Builder & Team Shared Notes System.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1: Executive Summary & Project Background */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl prose prose-lg text-authority-navy/80 font-light leading-relaxed">
                    <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Redefining Outpatient Clinical Documentation</h2>
                    <p>
                        Clinical Documentation Integrity (CDI) has traditionally focused on the inpatient setting, reviewing chart metrics to justify hospital admissions. However, alternative payment models—specifically **Medicare Advantage (MA) contracts**—have shifted the landscape toward outpatient healthcare.
                    </p>
                    <p>
                        Under Medicare Advantage, reimbursement relies heavily on the **Risk Adjustment Factor (RAF)**, a score determined by capturing the chronic diagnoses of a patient via **Hierarchical Condition Categories (HCCs)**. To count toward the RAF score, every chronic diagnosis must be re-evaluated and addressed in a face-to-face provider encounter each calendar year.
                    </p>
                    <p>
                        Most outpatient programs struggle to capture these chronic conditions due to outdated EHR interfaces and unmaintained **Problem Lists** (descriptions of patient disease burdens backed by over 125,000 SNOMED codes). I designed a dedicated ambulatory workspace to solve these specific workflows for CDI Specialists.
                    </p>
                </div>
            </section>

            {/* Section 2: Interactive UX Lab (The Outpatient Simulator) */}
            <section className="py-24 bg-slate-gray/30 border-t border-b border-slate-200 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-electric-cyan/15 rounded-full text-authority-navy font-mono text-xs font-bold uppercase tracking-wider mb-4 border border-electric-cyan/20">
                            <Sparkles className="w-3.5 h-3.5 text-electric-cyan" /> Interactive UX Lab
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-authority-navy mb-4">Outpatient CDI & HCC Workspace</h2>
                        <p className="text-lg text-authority-navy/70 max-w-2xl mx-auto font-light">
                            Navigate the pre-visit calendar days, select simulated patients, verify Problem Lists, toggle HCC recaptures, and generate queries to calculate RAF scores.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden text-left flex flex-col lg:flex-row min-h-[650px]">
                        
                        {/* Left Sidebar: Pre-Visit Scheduler & Cases (35%) */}
                        <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50 p-6 flex flex-col gap-6">
                            <div>
                                <h3 className="text-xs font-mono font-bold text-authority-navy/40 uppercase tracking-widest mb-3">Pre-Visit Planner</h3>
                                <div className="grid grid-cols-5 gap-1.5">
                                    {(["Mon", "Tue", "Wed", "Thu", "Fri"] as const).map(day => (
                                        <button
                                            key={day}
                                            onClick={() => {
                                                setSelectedDay(day);
                                                const matches = day === "Wed" ? "case-1" : day === "Thu" ? "case-3" : "";
                                                if (matches) setActiveCaseId(matches);
                                            }}
                                            className={`p-2 rounded-xl border text-center transition-all ${
                                                selectedDay === day 
                                                    ? "bg-electric-cyan border-electric-cyan text-authority-navy font-bold shadow-md shadow-electric-cyan/20" 
                                                    : "bg-white border-slate-200 text-authority-navy/60 hover:text-authority-navy hover:bg-slate-100"
                                            }`}
                                        >
                                            <div className="text-[10px] uppercase font-mono">{day}</div>
                                            <div className="text-xs font-bold mt-0.5">
                                                {day === "Mon" && "12"}
                                                {day === "Tue" && "13"}
                                                {day === "Wed" && "14"}
                                                {day === "Thu" && "15"}
                                                {day === "Fri" && "16"}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col min-h-[250px]">
                                <h3 className="text-xs font-mono font-bold text-authority-navy/40 uppercase tracking-widest mb-3">Scheduled Ambulatory Visits</h3>
                                <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                                    {currentDayCases.length > 0 ? (
                                        currentDayCases.map(c => (
                                            <button
                                                key={c.id}
                                                onClick={() => {
                                                    setActiveCaseId(c.id);
                                                    setQueryStatus("idle");
                                                    setQueryText("");
                                                }}
                                                className={`w-full p-4 rounded-2xl border text-left transition-all flex flex-col gap-2 ${
                                                    activeCaseId === c.id 
                                                        ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                                                        : "bg-white border-slate-200 text-authority-navy hover:bg-slate-50"
                                                }`}
                                            >
                                                <div className="flex justify-between items-start w-full">
                                                    <span className="font-bold text-sm">{c.name}</span>
                                                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-wider ${
                                                        activeCaseId === c.id ? "bg-white/10 text-white" : "bg-slate-100 text-slate-600"
                                                    }`}>Age {c.age}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-[10px] opacity-70">
                                                    <span>RAF: {calculateRaf(c)}</span>
                                                    <span className="flex items-center gap-1">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${c.capturedHccIds.length > 0 ? "bg-emerald-400" : "bg-amber-400"}`} />
                                                        {c.capturedHccIds.length} Captured
                                                    </span>
                                                </div>
                                            </button>
                                        ))
                                    ) : (
                                        <div className="flex flex-col items-center justify-center py-12 text-center text-authority-navy/40">
                                            <Calendar className="w-8 h-8 mb-2 opacity-50" />
                                            <p className="text-xs">No visits scheduled for this date</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Content: Patient Case Details (65%) */}
                        <div className="lg:w-2/3 p-8 flex flex-col justify-between gap-8">
                            
                            {/* Patient Metadata Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                                <div>
                                    <div className="text-xs font-mono font-bold text-electric-cyan mb-1 uppercase tracking-wider">OUTPATIENT WORKLIST FOCUS</div>
                                    <h3 className="text-2xl font-bold text-authority-navy font-heading">{activeCase.name}</h3>
                                    <p className="text-xs text-authority-navy/60 font-light mt-0.5">Visit Scheduled: {activeCase.visitDate}</p>
                                </div>

                                <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center justify-between gap-6 shadow-sm">
                                    <div>
                                        <div className="text-[9px] font-mono opacity-50 uppercase tracking-widest">Risk Adjustment Score</div>
                                        <div className="text-3xl font-extrabold text-electric-cyan font-heading tracking-tight mt-0.5">{calculateRaf(activeCase)}</div>
                                    </div>
                                    <div className="border-l border-white/10 pl-4 text-xs font-mono opacity-80">
                                        <div>Base Score: {activeCase.baseRaf}</div>
                                        <div className="text-emerald-400 mt-0.5">+{(Math.round((calculateRaf(activeCase) - activeCase.baseRaf) * 1000) / 1000).toFixed(3)} Adj</div>
                                    </div>
                                </div>
                            </div>

                            {/* Center Section: Workflows */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                                
                                {/* Workflow A: Problem List Review */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-authority-navy/60">1. Problem List Review</h4>
                                        <button 
                                            onClick={() => toggleWorkflowStatus("problem")}
                                            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${
                                                activeCase.isProblemListReviewed 
                                                    ? "bg-emerald-100 text-emerald-800" 
                                                    : "bg-amber-100 text-amber-800"
                                            }`}
                                        >
                                            {activeCase.isProblemListReviewed ? "✓ Reviewed" : "Needs Review"}
                                        </button>
                                    </div>
                                    
                                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-3">
                                        <div>
                                            <span className="font-semibold block text-slate-800 mb-1">EHR Documented Conditions (Active)</span>
                                            <ul className="space-y-1 list-disc pl-4 text-slate-600 font-light">
                                                {activeCase.problemList.map((p, idx) => (
                                                    <li key={idx}>{p}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="border-t border-slate-200 pt-3">
                                            <span className="font-semibold block text-slate-800 mb-2">Unconfirmed EHR Problems (Alerts)</span>
                                            {activeCase.unconfirmedProblems.map((p, idx) => (
                                                <div key={idx} className="p-2.5 bg-rose-50 border border-rose-200 text-rose-950 rounded-xl flex justify-between items-center">
                                                    <div>
                                                        <div className="font-bold text-[9px]">{p.code} • SNOMED</div>
                                                        <div className="text-[10px] font-light mt-0.5">{p.name}</div>
                                                    </div>
                                                    {queryStatus === "idle" && (
                                                        <button 
                                                            onClick={() => handleGenerateQuery(p.name)}
                                                            className="px-2 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded font-bold text-[8px]"
                                                        >
                                                            Build Query
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Workflow B: HCC Capture & Recapture */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-authority-navy/60">2. HCC Chronic Recapture</h4>
                                        <button 
                                            onClick={() => toggleWorkflowStatus("hcc")}
                                            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${
                                                activeCase.isHccReviewed 
                                                    ? "bg-emerald-100 text-emerald-800" 
                                                    : "bg-amber-100 text-amber-800"
                                            }`}
                                        >
                                            {activeCase.isHccReviewed ? "✓ Reviewed" : "Needs Review"}
                                        </button>
                                    </div>
                                    
                                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-3">
                                        <span className="font-semibold block text-slate-800">Address Previous Year Chronic Diagnoses</span>
                                        <div className="space-y-2">
                                            {activeCase.historicalHccs.map((h, idx) => {
                                                const isCaptured = activeCase.capturedHccIds.includes(h.code);
                                                return (
                                                    <div 
                                                        key={idx}
                                                        onClick={() => handleToggleHcc(h.code)}
                                                        className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                                                            isCaptured 
                                                                ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-medium" 
                                                                : "bg-white border-slate-200 text-slate-600 font-light hover:border-slate-300"
                                                        }`}
                                                    >
                                                        <div>
                                                            <div className="font-bold text-[9px] text-slate-900">{h.code} • HCC {h.hcc}</div>
                                                            <div className="text-[10px] mt-0.5">{h.name}</div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-mono text-[9px] text-electric-cyan font-bold">+{h.weight} RAF</span>
                                                            <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                                                                isCaptured ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300 bg-white"
                                                            }`}>
                                                                {isCaptured && <Check className="w-3 h-3 stroke-[3]" />}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Lower Section: Query Builder OR Patient Notes */}
                            <AnimatePresence mode="wait">
                                {queryStatus !== "idle" ? (
                                    <motion.div
                                        key="query-builder"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="p-5 bg-slate-900 text-white rounded-3xl border border-slate-800 space-y-4"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-electric-cyan">
                                                <Cpu className="w-4 h-4" />
                                                <span>INTEGRATED PROVIDER QUERY BUILDER</span>
                                            </div>
                                            <button 
                                                onClick={() => setQueryStatus("idle")}
                                                className="text-xs text-white/50 hover:text-white"
                                            >
                                                Cancel
                                            </button>
                                        </div>

                                        <textarea
                                            value={queryText}
                                            onChange={(e) => setQueryText(e.target.value)}
                                            rows={5}
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-electric-cyan resize-none font-mono"
                                        />

                                        <div className="flex justify-between items-center">
                                            <p className="text-[10px] text-white/40">Status: Formulating prospective audit question</p>
                                            <button
                                                onClick={handleSendQuery}
                                                disabled={queryStatus === "sent"}
                                                className="px-5 py-2 bg-electric-cyan text-authority-navy text-xs font-bold rounded-lg hover:scale-[1.02] transition-transform disabled:opacity-50"
                                            >
                                                {queryStatus === "sent" ? "Submitting to EHR..." : "Send to Provider Inbox"}
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="patient-notes"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-6"
                                    >
                                        {/* Notes List */}
                                        <div className="space-y-3 text-xs">
                                            <h5 className="font-bold text-authority-navy/60 uppercase tracking-wide">Patient Level Dossier Notes</h5>
                                            <div className="max-h-[120px] overflow-y-auto space-y-2 pr-1">
                                                {activeCase.notes.map((note, idx) => (
                                                    <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] font-light leading-relaxed">
                                                        {note}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Notes Form */}
                                        <div className="space-y-3">
                                            <h5 className="text-xs font-bold text-authority-navy/60 uppercase tracking-wide">Add & Notify Shared Case Notes</h5>
                                            <form onSubmit={handleAddNote} className="space-y-2">
                                                <input 
                                                    type="text" 
                                                    value={noteInput}
                                                    onChange={e => setNoteInput(e.target.value)}
                                                    placeholder="Add permanent patient record note..."
                                                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-electric-cyan"
                                                />
                                                <div className="flex gap-2">
                                                    <input 
                                                        type="email" 
                                                        value={recipientEmail}
                                                        onChange={e => setRecipientEmail(e.target.value)}
                                                        placeholder="Notify teammate (Optional Email)"
                                                        className="flex-1 px-3 py-2 text-[10px] rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-electric-cyan"
                                                    />
                                                    <button 
                                                        type="submit" 
                                                        className="px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold rounded-xl transition-all"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>

                    </div>
                </div>
            </section>

            {/* Section 3: In-depth Features */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl prose prose-lg text-authority-navy/80 font-light leading-relaxed">
                    
                    <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Key Outpatient Workflows & Features</h2>
                    
                    <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">1. Pre-Visit Planning Scheduler</h3>
                    <p>
                        Outpatient workflows operate on extremely thin timelines. Unlike inpatient reviews, where the CDS can coordinate with providers over days, outpatient interventions must occur **prior to or on the day of the patient's visit**. 
                    </p>
                    <p>
                        I designed a **Pre-Visit Planning Scheduler** using a 5-day calendar spread fed by scheduled ambulatory visit data. It provides the CDS with a dashboard showing open queries and unaddressed chronic conditions by date, letting them organize prospective audits and queue alerts prior to clinician round times.
                    </p>

                    <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">2. Problem List & SNOMED Verification</h3>
                    <p>
                        The Problem List serves as the primary medical registry of patient disease burden. However, review is tedious since providers must map specific conditions to a dictionary of over **125,000 SNOMED codes**. 
                    </p>
                    <p>
                        The Ambulatory Workspace simplifies this by comparing EHR documentation against the Problem List automatically. When discrepancies are highlighted, the CDS can flag them as unconfirmed and transmit recommendations directly to providers to verify during the face-to-face encounter.
                    </p>

                    <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">3. HCC Recapture & Real-Time RAF Calculations</h3>
                    <p>
                        Risk Adjustment Factor (RAF) score calculations require annual confirmation of chronic disease diagnoses. I designed a real-time **RAF Calculator** interface.
                    </p>
                    <p>
                        The calculator automatically queries historical chronic conditions and renders past weights. The CDS can review unaddressed categories and check or drag-and-drop conditions to simulate score adjustments instantly before pushing final documentation queries to the clinician.
                    </p>
                </div>
            </section>

            {/* Section 4: Design Takeaways */}
            <section className="py-24 bg-slate-gray/30 border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-4xl prose prose-lg text-authority-navy/80 font-light leading-relaxed">
                    <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Designing for Clinical Efficiency</h2>
                    <p>
                        My main focus was avoiding administrative drag on both the CDS and the provider:
                    </p>
                    <ul>
                        <li><strong>EHR Communication Bridges:</strong> The Query Builder formats queries with patient-specific SNOMED codes, allowing providers to resolve alerts with a single click inside their EHR communication inbox.</li>
                        <li><strong>Persistent Dossier Notes:</strong> Shared patient-level notes reside outside of specific visit timelines, helping team members communicate historical anomalies and regulatory parameters smoothly.</li>
                        <li><strong>Visual KPI Dashboards:</strong> Designed drill-down charts tracking overall program metrics, showing captured HCC ratios, open clinician queries, and RAF score offsets to showcase the CDI program's financial return on investment.</li>
                    </ul>
                </div>
            </section>

            {/* CTA Footer Section */}
            <section className="py-24 bg-authority-navy text-white text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">Ready to modernize your design system?</h2>
                    <p className="text-lg text-white/70 font-light mb-12 max-w-2xl mx-auto">
                        I collaborate with product leaders and developers to align product strategy with pixel-perfect engineering execution.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            href="/start" 
                            className="px-8 py-3.5 bg-electric-cyan text-authority-navy font-bold rounded-full shadow-lg shadow-electric-cyan/25 hover:shadow-electric-cyan/40 hover:-translate-y-0.5 transition-all text-sm tracking-wide"
                        >
                            Connect to Collaborate
                        </Link>
                        <Link 
                            href="/work" 
                            className="px-8 py-3.5 bg-white/10 text-white border border-white/20 hover:bg-white/20 font-semibold rounded-full transition-all text-sm tracking-wide"
                        >
                            Browse Other Work
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
