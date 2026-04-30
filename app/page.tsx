"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, CheckCircle2, SendHorizontal, Download, Moon, Sun, 
  Building2, Sparkles, Languages, Loader2, Mail, User, MessageSquare,
  GraduationCap, Phone, MapPin, Users
} from "lucide-react";

export default function OptimizedPortfolio() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleDownloadCV = useCallback(() => {
    const link = document.createElement('a');
    link.href = 'resume.jpg'; 
    link.download = 'resume.jpg';
    link.click();
  }, []);

  const handleContactSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const formData = new FormData(e.currentTarget);
    
    const templateParams = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      message: formData.get("message"),
      title: "Portfolio Inquiry",
      time: new Date().toLocaleString()
    };

    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.send('service_9gip8bc', 'template_qqjkmw8', templateParams, 'bid0DSFa4gtw6aU8x');
      setIsSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send. Please try again.");
    } finally {
      setIsSending(false);
    }
  }, []);

  const themeClasses = useMemo(() => ({
    bg: darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-900",
    card: darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100 shadow-sm",
    input: darkMode ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-100"
  }), [darkMode]);

  return (
    <>
      <div className={`min-h-screen transition-colors duration-300 ${themeClasses.bg} selection:bg-indigo-500/30 antialiased font-sans overflow-x-hidden will-change-transform`}>
        
        {/* GEOMETRIC BACKGROUND */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
            className={`absolute top-0 right-0 w-[45%] h-full bg-[#6366f1] hidden lg:block transition-opacity duration-300 ${darkMode ? "opacity-5" : "opacity-80"}`} 
            style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }} 
          />
          <div className={`absolute top-0 w-full h-[30vh] bg-[#6366f1] lg:hidden transition-opacity duration-300 ${darkMode ? "opacity-20" : "opacity-100"}`} />
        </div>

        {/* NAV */}
        <nav className="relative z-50 max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-10 flex justify-between items-center">
          <div>
            <img src="chs.png" alt="Logo" className="h-8 md:h-12 w-auto object-contain cursor-pointer" loading="lazy" width="48" height="48" />
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            {/* SOLID NON-TRANSPARENT BUTTON */}
            <button 
              onClick={() => setIsFormOpen(true)}
              className="px-5 md:px-7 py-2.5 md:py-3 font-black rounded-full text-[10px] uppercase tracking-widest transition-all duration-200 flex items-center gap-2 bg-indigo-600 text-white shadow-xl shadow-indigo-500/40 border-none hover:bg-indigo-700 active:scale-95"
            >
              Contact Me <Sparkles size={14} className="hidden sm:block" />
            </button>

            <button onClick={() => setDarkMode(!darkMode)} className={`p-2.5 rounded-xl transition-colors duration-200 ${darkMode ? "bg-slate-800 text-yellow-400" : "bg-slate-100 text-slate-600"}`}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-6 md:pt-10 pb-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-lg md:text-2xl font-extrabold mb-4 opacity-70">Hello, I am</h2>
            <h1 className={`text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase leading-none ${darkMode ? "text-white" : "text-slate-900"}`}>
              Marc Angender A. Monoy
            </h1>
            
            <div className="flex flex-col gap-2 mb-8 opacity-70 font-bold uppercase text-xs tracking-widest">
              <div className="flex items-center gap-2"><MapPin size={14} className="text-indigo-500" /> Talisay City, Cebu</div>
              <div className="flex items-center gap-2"><Phone size={14} className="text-indigo-500" /> (63) 961-799-6303</div>
            </div>

            <p className={`max-w-md leading-relaxed text-base md:text-lg mb-8 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              I am a dedicated and hardworking graduate student of **Hospitality Management**. I am passionate about delivering excellent service and I am eager to contribute positively to the Hospitality Industry.
            </p>
            <button 
              onClick={handleDownloadCV}
              className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 active:scale-95 transition-transform duration-200"
            >
              Download CV <Download size={18} />
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
            <motion.div className="relative group" layout>
              <div className={`absolute inset-[-10px] md:inset-[-15px] rounded-full ring-2 ring-indigo-200 ${darkMode ? "ring-indigo-500/30" : "ring-indigo-100"}`} />
              <div className={`relative z-20 w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 ${darkMode ? "border-slate-800 bg-slate-900" : "border-white bg-white" }`}>
                <img src="doy-4k.jpg" alt="Marc Monoy" className="w-full h-full object-cover" loading="lazy" width="450" height="450" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID */}
        <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 pb-20">
          
          {/* ABOUT ME SECTION */}
          <div className={`md:col-span-12 p-8 md:p-10 rounded-[2.5rem] border mb-6 ${themeClasses.card}`}>
            <div className="flex items-center gap-3 mb-6"><User className="text-indigo-500" /><h3 className="text-xl md:text-2xl font-black uppercase">About Me</h3></div>
            <p className={`leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              I am a dedicated and hardworking graduate student of Hospitality Management with experience as a working student. Balancing academics and work has strengthened my time management, adaptability, and strong work ethic. I am eager to grow professionally, apply my skills and experience to contribute positively in the Hospitality Industry. I am passionate about delivering excellent service and a visionary individual with clear career goals.
            </p>
          </div>

          {/* EXPERIENCE SECTION */}
<div className={`md:col-span-8 p-8 md:p-10 rounded-[2.5rem] border ${themeClasses.card}`}>
  <div className="flex items-center gap-3 mb-6">
    <Building2 className="text-indigo-500" />
    <h3 className="text-xl md:text-2xl font-black uppercase">Experience & OJT</h3>
  </div>

  {/* NEW ENTRY: Good luck Hot Pot */}
  <div className="mb-8">
    <h4 className="font-bold text-lg text-indigo-500">Good luck Hot Pot (OJT)</h4>
    <p className="font-bold text-sm mb-2 opacity-70 italic">Food & Beverage Service • 500 Hours</p>
    <p className="italic opacity-70 leading-relaxed text-sm">
      Ensured efficient and timely delivery of orders from the kitchen to guest tables while maintaining high standards of accuracy and service quality in a fast-paced environment.
    </p>
  </div>

  <div className="mb-8">
    <h4 className="font-bold text-lg text-indigo-500">Registrar Staff</h4>
    <p className="font-bold text-sm mb-2 opacity-70 italic">Salazar Colleges of Science and Institute of Technology • 3 Years</p>
    <p className="italic opacity-70 leading-relaxed text-sm">
      Responsible for encoding and processing academic documents such as Transcript of Records (TOR), Diplomas, and certificates. Provides customer service by assisting students and external clients, and manages incoming and outgoing mails as well as local and international phone calls.
    </p>
  </div>

  <div>
    <h4 className="font-bold text-lg text-indigo-500">Golden Peak Hotel (OJT)</h4>
    <p className="font-bold text-sm mb-2 opacity-70 italic">Kitchen Department • 600 Hours</p>
    <p className="italic opacity-70 leading-relaxed text-sm">
      Responsible for maintaining and marketing stocks for the entire kitchen department.
    </p>
  </div>
</div>

          {/* LANGUAGES & EXPERTISE SECTION */}
<div className={`md:col-span-4 p-8 md:p-10 rounded-[2.5rem] border flex flex-col gap-8 ${themeClasses.card}`}>
  {/* Languages Sub-section */}
  <div>
    <div className="flex items-center gap-3 mb-6">
      <Languages className="text-indigo-500" />
      <h3 className="text-xl font-black uppercase">Languages</h3>
    </div>
    <div className="space-y-4">
      {['English', 'Tagalog', 'Bisaya'].map(lang => (
        <div key={lang} className="flex items-center justify-between font-bold">
          <span className="opacity-70">{lang}</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? "bg-indigo-500" : "bg-slate-700"}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Divider Line */}
  <div className={`h-px w-full ${darkMode ? "bg-slate-800" : "bg-slate-100"}`} />

  {/* Expertise Sub-section */}
  <div>
    <div className="flex items-center gap-3 mb-6">
      <Sparkles className="text-indigo-500" />
      <h3 className="text-xl font-black uppercase">Expertise</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {[
        "Management skills", 
        "Communication", 
        "Problem Solving", 
        "Critical Thinking", 
        "Leadership", 
        "Computer Literate"
      ].map((skill) => (
        <span 
          key={skill} 
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
            darkMode 
              ? "bg-slate-800/50 border-slate-700 text-indigo-300" 
              : "bg-indigo-50 border-indigo-100 text-indigo-600"
          }`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>

          {/* EDUCATION & CHARACTER REFERENCE */}
          <div className={`md:col-span-6 p-8 md:p-10 rounded-[2.5rem] border ${themeClasses.card}`}>
            <div className="flex items-center gap-3 mb-6"><GraduationCap className="text-indigo-500" /><h3 className="text-xl md:text-2xl font-black uppercase">Education</h3></div>
            <div className="space-y-4 font-bold text-sm">
              <div><p className="text-indigo-500">2026</p><p>Salazar Colleges of Science and Institute of Technology</p></div>
              <div><p className="text-indigo-500">2022</p><p>Academia System Global Colleges</p></div>
            </div>
          </div>

          <div className={`md:col-span-6 p-8 md:p-10 rounded-[2.5rem] border ${themeClasses.card}`}>
            <div className="flex items-center gap-3 mb-6"><Users className="text-indigo-500" /><h3 className="text-xl md:text-2xl font-black uppercase">References</h3></div>
            <div className="space-y-2 text-sm font-bold opacity-80 italic">
              <p>Trinidad B. Hermosila, RL (OIC-Registrar)</p>
              <p>Bretche P. Estrada (Registrar Staff)</p>
              <p>Maria Teresita Ferras (Records in Charge)</p>
            </div>
          </div>
        </main>

        <footer className="py-12 text-center opacity-40 font-bold text-[10px] uppercase tracking-[0.3em]">
          Marc Monoy • 2026 • Talisay City, Cebu
        </footer>
      </div>

      {/* FORM MODAL - Outside main container */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className={`p-8 md:p-10 rounded-[2.5rem] w-full max-w-lg relative border ${themeClasses.card} ${darkMode ? "text-white" : "text-slate-900"}`}>
              <button onClick={() => setIsFormOpen(false)} className="absolute top-6 right-6 opacity-40 hover:opacity-100 transition-colors"><X /></button>
              {!isSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <h2 className="text-3xl font-black mb-2 tracking-tighter">Get in Touch</h2>
                  <p className="text-sm opacity-60 mb-6">I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
                  <input name="user_name" required placeholder="Your Full Name" className={`w-full px-5 py-4 rounded-2xl outline-none border ${themeClasses.input}`} />
                  <input name="user_email" type="email" required placeholder="Your Professional Email" className={`w-full px-5 py-4 rounded-2xl outline-none border ${themeClasses.input}`} />
                  <textarea name="message" required rows={3} placeholder="How can I help you today?" className={`w-full px-5 py-4 rounded-2xl outline-none border resize-none ${themeClasses.input}`}></textarea>
                  <button disabled={isSending} type="submit" className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3">
                    {isSending ? <Loader2 className="animate-spin" /> : "Send Professional Inquiry"} <SendHorizontal size={18}/>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <CheckCircle2 size={40} className="text-indigo-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-black mb-2">Thank You</h2>
                  <p className="text-sm opacity-60 mb-6">Your professional inquiry has been received. I will get back to you shortly.</p>
                  <button onClick={() => { setIsFormOpen(false); setIsSubmitted(false); }} className="mt-4 px-12 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 active:scale-95 transition-transform duration-200">Return to Portfolio</button>
                </div>
              )}
            </div>
          </div>
        )}
    </>
  );
}
