"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
    Copy, 
    Check, 
    FileText, 
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
        <main className="min-h-screen bg-slate-gray selection:bg-electric-cyan selection:text-authority-navy font-sans text-authority-navy flex items-center justify-center pt-24 pb-12">
            <Navbar />

            <div className="container mx-auto px-6 max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-white space-y-8"
                >
                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wide text-authority-navy/70">
                            Open to new opportunities
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-authority-navy tracking-tight">
                            Let's Connect.
                        </h1>
                        <p className="text-base text-authority-navy/70 font-light max-w-lg mx-auto leading-relaxed">
                            I am seeking in-house design leadership roles. Reach out to coordinate introductory conversations, interview syncs, or technical design systems alignment.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-100 py-6 text-left max-w-md mx-auto">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Email</span>
                            <a href="mailto:sharpencil@gmail.com" className="block text-sm font-semibold text-authority-navy hover:text-electric-cyan transition-colors truncate">
                                sharpencil@gmail.com
                            </a>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Location</span>
                            <span className="block text-sm font-semibold text-authority-navy">
                                Austin, TX
                            </span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={handleCopyEmail}
                            className="flex-1 py-3.5 bg-electric-cyan text-authority-navy text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-electric-cyan/15 hover:shadow-electric-cyan/30 hover:-translate-y-0.5 transition-all cursor-pointer"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    <span>Email Address Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4" />
                                    <span>Copy Email Address</span>
                                </>
                            )}
                        </button>

                        <a 
                            href="https://www.linkedin.com/in/young-ryu-ph-d-8668703/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3.5 border-2 border-slate-200 hover:border-slate-300 text-authority-navy text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors bg-white hover:-translate-y-0.5"
                        >
                            <ExternalLink className="w-4 h-4 text-slate-400" />
                            LinkedIn Profile
                        </a>
                    </div>

                    {/* CV Downloader */}
                    <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between text-left">
                        <div className="space-y-0.5">
                            <h3 className="text-sm font-bold text-authority-navy">Curriculum Vitae</h3>
                            <p className="text-xs text-authority-navy/60 font-light">Download my latest resume (PDF).</p>
                        </div>
                        <a 
                            href="/images/resume.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shrink-0"
                        >
                            <FileText className="w-3.5 h-3.5" />
                            Download Resume
                        </a>
                    </div>

                </motion.div>
            </div>
        </main>
    );
}
