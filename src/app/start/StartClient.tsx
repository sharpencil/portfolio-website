"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
    Mail, 
    MapPin, 
    CheckCircle2, 
    ArrowRight, 
    Copy, 
    Check, 
    FileText, 
    Calendar, 
    Clock, 
    ExternalLink 
} from "lucide-react";

export default function StartClient() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("sharpencil@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-slate-gray selection:bg-electric-cyan selection:text-authority-navy font-sans text-authority-navy">
            <Navbar />

            <div className="container mx-auto px-6 py-32 lg:py-48 min-h-screen flex items-center justify-center">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start w-full max-w-7xl">

                    {/* Left Column: Context */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:sticky lg:top-32"
                    >
                        {/* Availability Badge */}
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8 border border-slate-100">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wide text-authority-navy/70">
                                Open to new opportunities
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-authority-navy mb-6 leading-tight">
                            Let's Connect.
                        </h1>
                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light mb-12 leading-relaxed">
                            I am seeking in-house design leadership roles. Let's discuss organizational needs, leadership opportunities, or technical design systems challenges.
                        </p>

                        <div className="space-y-8 border-t border-authority-navy/10 pt-8">
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-authority-navy shrink-0 mt-1" />
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wide text-authority-navy/60 mb-1">Direct Email</p>
                                    <a href="mailto:sharpencil@gmail.com" className="text-xl font-medium text-authority-navy hover:text-electric-cyan transition-colors">sharpencil@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-authority-navy shrink-0 mt-1" />
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wide text-authority-navy/60 mb-1">Location</p>
                                    <p className="text-xl font-medium text-authority-navy">Austin, TX</p>
                                </div>
                            </div>
                        </div>

                        {/* Credentials Card */}
                        <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <div>
                                <h3 className="text-lg font-bold font-heading text-authority-navy">Curriculum Vitae</h3>
                                <p className="text-sm text-authority-navy/60 font-light mt-0.5">Download my latest professional resume (PDF).</p>
                            </div>
                            <a 
                                href="/resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shrink-0"
                            >
                                <FileText className="w-4 h-4" />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Interaction Hub */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-white space-y-8 text-left"
                    >
                        <div>
                            <h2 className="text-2xl font-bold font-heading text-authority-navy mb-2">Schedule a Conversation</h2>
                            <p className="text-sm text-authority-navy/70 font-light">
                                Select an agenda format below to schedule an introductory conversation or coordinate calendar links.
                            </p>
                        </div>

                        {/* Booking Options Cards */}
                        <div className="space-y-4">
                            <div className="p-5 border border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all flex items-start gap-4">
                                <div className="mt-1 p-2 bg-electric-cyan/15 rounded-xl text-authority-navy">
                                    <Clock className="w-5 h-5 text-authority-navy" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <span className="font-bold text-sm">15-Min Introductory Sync</span>
                                        <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold">15 MIN</span>
                                    </div>
                                    <p className="text-xs text-authority-navy/60 font-light mt-1.5 leading-relaxed">
                                        Brief meeting to align on candidates-to-role fit, team structures, design methodologies, and program timelines.
                                    </p>
                                </div>
                            </div>

                            <div className="p-5 border border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all flex items-start gap-4">
                                <div className="mt-1 p-2 bg-electric-cyan/15 rounded-xl text-authority-navy">
                                    <Calendar className="w-5 h-5 text-authority-navy" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <span className="font-bold text-sm">30-Min Portfolio Walkthrough</span>
                                        <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold">30 MIN</span>
                                    </div>
                                    <p className="text-xs text-authority-navy/60 font-light mt-1.5 leading-relaxed">
                                        Deep dive into case study logic, systems engineering principles, design systems governance, and leadership frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Buttons */}
                        <div className="space-y-4 pt-4 border-t border-slate-100">
                            {/* Email Action */}
                            <a 
                                href="mailto:sharpencil@gmail.com?subject=Inquiry from Portfolio Website&body=Hi Young,%0D%0A%0D%0AI would like to coordinate a time to sync. Below are details about the opportunity:%0D%0A%0D%0A- Company:%0D%0A- Role / Focus:%0D%0A- Best times for a calendar invite:"
                                className="w-full py-4 bg-electric-cyan text-authority-navy font-bold text-base rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <Mail className="w-5 h-5" />
                                Request Meeting via Email
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Copy Email address */}
                                <button 
                                    onClick={handleCopyEmail}
                                    className="py-3.5 border-2 border-slate-200 hover:border-slate-300 text-authority-navy text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors bg-white"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4 text-emerald-500" />
                                            <span>Email Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4 text-slate-500" />
                                            <span>Copy Email Address</span>
                                        </>
                                    )}
                                </button>

                                {/* LinkedIn Profile */}
                                <a 
                                    href="https://linkedin.com/in/youngryu" // Replace with actual profile if different
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-3.5 border-2 border-slate-200 hover:border-slate-300 text-authority-navy text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors bg-white"
                                >
                                    <ExternalLink className="w-4 h-4 text-slate-500" />
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
