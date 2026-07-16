"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
    Mail, 
    MapPin, 
    Phone, 
    Globe, 
    Linkedin, 
    Printer, 
    Download, 
    BookOpen, 
    GraduationCap, 
    Briefcase, 
    Cpu, 
    Award 
} from "lucide-react";
import { useState } from "react";

export default function ResumeClient() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("sharpencil@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-electric-cyan selection:text-authority-navy font-sans text-authority-navy print:bg-white print:text-black">
            <div className="print:hidden">
                <Navbar />
            </div>

            <div className="container mx-auto px-6 pt-32 pb-24 max-w-5xl print:pt-0 print:pb-0 print:px-0">
                
                {/* Print & Action Controls Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm print:hidden">
                    <div className="text-sm font-light text-authority-navy/70">
                        Need a physical or PDF copy? You can print this page directly to PDF.
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button 
                            onClick={() => window.print()}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all"
                        >
                            <Printer className="w-4 h-4" />
                            Print / Save as PDF
                        </button>
                        <a 
                            href="/images/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-200 hover:border-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-all bg-white"
                        >
                            <Download className="w-4 h-4" />
                            Download Original PDF
                        </a>
                    </div>
                </div>

                {/* Main Resume Sheet */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 print:border-none print:shadow-none print:p-0"
                >
                    {/* Header Info */}
                    <div className="border-b border-slate-200 pb-8 text-center md:text-left print:pb-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-authority-navy tracking-tight mb-2 print:text-3xl">
                            Young Ryu, Ph.D.
                        </h1>
                        <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-electric-cyan print:text-base print:text-slate-800">
                            UX Director & Senior Product Designer
                        </h2>
                        
                        {/* Meta links */}
                        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-y-3 gap-x-6 text-sm text-authority-navy/70 print:text-xs print:mt-4">
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4 text-authority-navy/40 print:w-3.5 print:h-3.5" />
                                Austin, TX
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Phone className="w-4 h-4 text-authority-navy/40 print:w-3.5 print:h-3.5" />
                                512-740-5086
                            </span>
                            <span className="flex items-center gap-1.5 cursor-pointer hover:text-electric-cyan" onClick={handleCopyEmail}>
                                <Mail className="w-4 h-4 text-authority-navy/40 print:w-3.5 print:h-3.5" />
                                {copied ? "Copied!" : "sharpencil@gmail.com"}
                            </span>
                            <a href="https://youngryu.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-electric-cyan transition-colors">
                                <Globe className="w-4 h-4 text-authority-navy/40 print:w-3.5 print:h-3.5" />
                                youngryu.netlify.app
                            </a>
                            <a href="https://www.linkedin.com/in/young-ryu-ph-d-8668703/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-electric-cyan transition-colors">
                                <Linkedin className="w-4 h-4 text-authority-navy/40 print:w-3.5 print:h-3.5" />
                                linkedin.com/in/young-ryu-ph-d
                            </a>
                        </div>
                    </div>

                    {/* Summary Statement */}
                    <div className="py-8 border-b border-slate-200 print:py-6">
                        <p className="text-lg text-authority-navy/80 font-light leading-relaxed print:text-sm print:leading-normal">
                            Highly analytical and strategic UX leader with a Ph.D. in Industrial & Systems Engineering (Human Factors) and over a decade of experience driving product design for enterprises and startups. Proven expertise in leading cross-functional teams (UX, UI, Research, Content) to deliver complex B2B and enterprise solutions from discovery to dev-ready design. Recognized for establishing data-driven user research programs, leading UX Design Sprints, and transforming complex business requirements into intuitive, highly successful digital products.
                        </p>
                    </div>

                    {/* Core Competencies */}
                    <div className="py-8 border-b border-slate-200 print:py-6">
                        <h3 className="text-xs font-mono font-bold text-electric-cyan uppercase tracking-widest mb-6 flex items-center gap-2 print:text-[10px] print:mb-4">
                            <Cpu className="w-4 h-4 text-electric-cyan print:w-3 print:h-3" /> Core Competencies
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-8 print:grid-cols-3 print:gap-4">
                            <div className="space-y-2">
                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider print:text-xs">UX Strategy & Leadership</h4>
                                <p className="text-xs text-authority-navy/70 leading-relaxed print:leading-tight">
                                    Team Building & Mentorship, Design Sprints, B2B & Enterprise Strategy, Cross-Functional Collaboration, Lean UX Methodologies, Stakeholder Alignment.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider print:text-xs">Product Design</h4>
                                <p className="text-xs text-authority-navy/70 leading-relaxed print:leading-tight">
                                    End-to-End Product Design, UI Design, Highly Interactive Prototyping, Wireframing, Interaction Design, Developer Handoff.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider print:text-xs">Research & Human Factors</h4>
                                <p className="text-xs text-authority-navy/70 leading-relaxed print:leading-tight">
                                    Data-Driven User Research, Usability Testing, Cognitive Psychology, Discovery Research, Analytics Dashboards, Human-Computer Interaction (HCI).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Professional Experience */}
                    <div className="py-8 border-b border-slate-200 print:py-6">
                        <h3 className="text-xs font-mono font-bold text-electric-cyan uppercase tracking-widest mb-8 flex items-center gap-2 print:text-[10px] print:mb-6">
                            <Briefcase className="w-4 h-4 text-electric-cyan print:w-3 print:h-3" /> Professional Experience
                        </h3>
                        
                        <div className="space-y-8">
                            
                            {/* Role 1 */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 print:flex-row print:text-xs">
                                    <div>
                                        <span className="font-bold text-lg text-authority-navy print:text-sm">Principal & Director of UX</span>
                                        <span className="text-slate-400 font-light mx-2">•</span>
                                        <span className="text-sm font-semibold text-authority-navy/80 print:text-xs">Proto UX LLC</span>
                                    </div>
                                    <div className="text-xs font-mono text-slate-500 font-bold shrink-0">
                                        Apr 2016 – Present
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 font-mono mb-3">Austin, TX</div>
                                <ul className="list-disc pl-5 text-xs text-authority-navy/80 space-y-2 leading-relaxed print:leading-tight">
                                    <li>Founded and led a specialized UX consultancy providing lean, end-to-end design and research services for enterprise and startup clients across web, tablet, and mobile platforms.</li>
                                    <li>Direct and mentor teams of UX/UI designers, researchers, and content strategists to deliver high-quality, dev-ready product designs.</li>
                                    <li>Partner with C-suite executives and Product leaders to establish user-centered design methodologies and integrate data-driven UX components into their product development lifecycles.</li>
                                    <li>Develop and facilitate custom UX & Design Sprint programs for major clients (e.g., ProjectManager.com), directly accelerating time-to-market and product success.</li>
                                    <li>Lead the research, strategy, and design for highly complex technical tools, including a consumer portal analytics dashboard (New Home Source Professional) and a site-control mobile web application for retail and commercial management (SIEMENS).</li>
                                    <li>Execute full-lifecycle design processes: discovery research, wireframing, high-fidelity interactive prototyping, usability testing, and final visual design.</li>
                                </ul>
                            </div>

                            {/* Role 2 */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 print:flex-row print:text-xs">
                                    <div>
                                        <span className="font-bold text-lg text-authority-navy print:text-sm">Director of UX / Senior UX Designer</span>
                                        <span className="text-slate-400 font-light mx-2">•</span>
                                        <span className="text-sm font-semibold text-authority-navy/80 print:text-xs">Design For Use</span>
                                    </div>
                                    <div className="text-xs font-mono text-slate-500 font-bold shrink-0">
                                        Mar 2014 – Mar 2016
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 font-mono mb-3">Austin, TX (Promoted from Senior UX Designer in Sep 2014)</div>
                                <ul className="list-disc pl-5 text-xs text-authority-navy/80 space-y-2 leading-relaxed print:leading-tight">
                                    <li>Promoted to direct UX initiatives and manage project deliverables for a dedicated user experience agency.</li>
                                    <li>Directed UX strategy and oversaw the execution of user-centered design solutions for a diverse portfolio of clients.</li>
                                    <li>Acted as a multi-skilled UX/UI expert, consistently delivering high-quality results and managing complex design scopes under tight, high-pressure deadlines.</li>
                                    <li>Collaborated closely with engineering and product teams to ensure design feasibility and seamless implementation of digital solutions.</li>
                                </ul>
                            </div>

                            {/* Role 3 */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 print:flex-row print:text-xs">
                                    <div>
                                        <span className="font-bold text-lg text-authority-navy print:text-sm">UX Designer</span>
                                        <span className="text-slate-400 font-light mx-2">•</span>
                                        <span className="text-sm font-semibold text-authority-navy/80 print:text-xs">Patient Conversation Media, Inc.</span>
                                    </div>
                                    <div className="text-xs font-mono text-slate-500 font-bold shrink-0">
                                        Sep 2013 – Feb 2014
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 font-mono mb-3">Austin, TX</div>
                                <ul className="list-disc pl-5 text-xs text-authority-navy/80 space-y-2 leading-relaxed print:leading-tight">
                                    <li>Designed user interfaces and user experiences for digital healthcare platforms, focusing on empathy and patient engagement.</li>
                                    <li>Conducted usability testing and applied user-centered design principles to iterate and improve product features.</li>
                                </ul>
                            </div>

                            {/* Role 4 */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 print:flex-row print:text-xs">
                                    <div>
                                        <span className="font-bold text-lg text-authority-navy print:text-sm">Senior UX Designer (Strategy & Design Lead)</span>
                                        <span className="text-slate-400 font-light mx-2">•</span>
                                        <span className="text-sm font-semibold text-authority-navy/80 print:text-xs">Myxer</span>
                                    </div>
                                    <div className="text-xs font-mono text-slate-500 font-bold shrink-0">
                                        Sep 2012 – Aug 2013
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 font-mono mb-3">Austin, TX</div>
                                <ul className="list-disc pl-5 text-xs text-authority-navy/80 space-y-2 leading-relaxed print:leading-tight">
                                    <li>Led the user experience strategy and design for consumer-facing mobile and web applications.</li>
                                    <li>Translated business goals and user feedback into strategic design improvements, wireframes, and final UI deliverables.</li>
                                </ul>
                            </div>

                            {/* Role 5 */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 print:flex-row print:text-xs">
                                    <div>
                                        <span className="font-bold text-lg text-authority-navy print:text-sm">Usability Specialist (Contract)</span>
                                        <span className="text-slate-400 font-light mx-2">•</span>
                                        <span className="text-sm font-semibold text-authority-navy/80 print:text-xs">Aon Hewitt</span>
                                    </div>
                                    <div className="text-xs font-mono text-slate-500 font-bold shrink-0">
                                        May 2012 – Aug 2012
                                    </div>
                                </div>
                                <div className="text-xs text-slate-400 font-mono mb-3">Greater Chicago Area</div>
                                <ul className="list-disc pl-5 text-xs text-authority-navy/80 space-y-2 leading-relaxed print:leading-tight">
                                    <li>Conducted accessibility reviews, compliance audits, and heuristic assessments for employee benefit systems dashboards.</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Education */}
                    <div className="py-8 border-b border-slate-200 print:py-6">
                        <h3 className="text-xs font-mono font-bold text-electric-cyan uppercase tracking-widest mb-6 flex items-center gap-2 print:text-[10px] print:mb-4">
                            <GraduationCap className="w-4 h-4 text-electric-cyan print:w-3 print:h-3" /> Education
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-6 print:text-xs">
                            <div className="space-y-1">
                                <div className="font-bold text-sm text-authority-navy print:text-xs">Ph.D. in Industrial & Systems Engineering</div>
                                <div className="text-xs font-semibold text-authority-navy/80">Virginia Polytechnic Institute and State University (Virginia Tech)</div>
                                <div className="text-xs text-slate-500 font-mono">Specialization: Human Factors Engineering</div>
                                <div className="text-xs text-slate-400 mt-1 font-light">Officer & Webmaster, HFES VT Student Chapter</div>
                            </div>
                            <div className="space-y-1">
                                <div className="font-bold text-sm text-authority-navy print:text-xs">M.S. in Industrial Engineering</div>
                                <div className="text-xs font-semibold text-authority-navy/80">Korea Advanced Institute of Science and Technology (KAIST)</div>
                                <div className="text-xs text-slate-500 font-mono">Specialization: Human Factors Lab</div>
                            </div>
                        </div>
                    </div>

                    {/* Publications & Academic Contributions */}
                    <div className="py-8 print:py-6">
                        <h3 className="text-xs font-mono font-bold text-electric-cyan uppercase tracking-widest mb-6 flex items-center gap-2 print:text-[10px] print:mb-4">
                            <BookOpen className="w-4 h-4 text-electric-cyan print:w-3 print:h-3" /> Publications & Academic Contributions
                        </h3>
                        
                        <div className="space-y-6 text-xs text-authority-navy/80 leading-relaxed print:text-xs print:leading-tight">
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 print:bg-white print:border-none print:p-0">
                                <p className="font-medium text-authority-navy text-sm mb-3 print:text-xs print:mb-1">
                                    Deep domain authority in Human Factors and Usability, bridging academic research with practical software systems.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        <strong>Journal Publications:</strong> 8 refereed journal articles published in leading usability and cognitive science platforms:
                                        <span className="block text-slate-500 italic mt-0.5 text-[11px] font-sans">
                                            Journal of Usability Studies, Ergonomics in Design, Journal of Eye Movement Research, and Gerontechnology.
                                        </span>
                                    </li>
                                    <li>
                                        <strong>Conference Proceedings:</strong> 19 refereed articles published and presented at premier international human-computer interaction symposiums:
                                        <span className="block text-slate-500 italic mt-0.5 text-[11px] font-sans">
                                            Association for Computing Machinery (ACM), Institute of Electrical and Electronics Engineers (IEEE), Human Factors and Ergonomics Society (HFES), and HCI International.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>

            <div className="print:hidden">
                <Footer />
            </div>
        </main>
    );
}
