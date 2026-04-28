import React from 'react';

// --- الأيقونات (SVG) لضمان التشغيل السريع وبدون مشاكل ---
const IconGithub = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>;
const IconLinkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const IconFacebook = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const IconInstagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const IconWhatsapp = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const IconMail = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const IconExternal = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-lime-400 selection:text-black">
      
      {/* 1. القائمة العلوية - Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 p-6 flex justify-between items-center">
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <span className="text-lime-400 font-mono underline underline-offset-4 font-black">AJ</span>
            <span>AHMED<span className="text-lime-400">JUDA</span></span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#projects" className="text-sm font-medium hover:text-lime-400 transition-colors">Projects</a>
            <a href="https://github.com/23MED-JUDA" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><IconGithub /></a>
            <a href="https://www.linkedin.com/in/ahmed-juda-50127638b/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><IconLinkedin /></a>
            <a href="mailto:ahmedjjuda@gmail.com" className="bg-lime-400 text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/10">Hire Me</a>
          </div>
        </div>
      </nav>

      {/* 2. قسم التعريف - Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lime-400 font-mono mb-4 text-lg">Frontend Developer & API Expert</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white">
            Ahmed Juda
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Building modern web applications with <span className="text-white font-semibold">React</span> and <span className="text-white font-semibold">Tailwind CSS</span>. 
            Creator of the <a href="https://mishkah-app.vercel.app/" target="_blank" rel="noreferrer" className="text-lime-400 border-b border-lime-400/30 hover:border-lime-400">Mishkah App</a>.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
             <a href="https://api.whatsapp.com/send/?phone=201095125229" target="_blank" rel="noreferrer" className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-all text-sm flex items-center gap-2">
                <IconWhatsapp /> Let's Chat
             </a>
             <a href="https://github.com/23MED-JUDA" target="_blank" rel="noreferrer" className="border border-white/10 bg-white/5 px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all text-sm flex items-center gap-2">
                <IconGithub /> GitHub
             </a>
          </div>
        </div>
        
        {/* صندوق التواصل الاجتماعي السريع */}
        <div className="flex-1 relative w-full max-w-sm">
           <div className="relative border border-white/10 p-10 rounded-3xl bg-neutral-900/40 backdrop-blur-xl shadow-2xl">
             <div className="text-center">
                <p className="text-lime-400 font-mono text-xs mb-6 uppercase tracking-[0.2em]">Connect with me</p>
                <div className="flex justify-center gap-8">
                   <a href="https://web.facebook.com/judax2/" target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-all scale-125"><IconFacebook /></a>
                   <a href="https://www.instagram.com/juda_x2" target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-all scale-125"><IconInstagram /></a>
                   <a href="https://www.linkedin.com/in/ahmed-juda-50127638b/" target="_blank" rel="noreferrer" className="hover:text-lime-400 transition-all scale-125"><IconLinkedin /></a>
                </div>
             </div>
           </div>
           <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lime-400/20 rounded-full blur-[80px]"></div>
        </div>
      </header>

      {/* 3. قسم المشاريع - Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-3xl font-bold italic">Featured Projects</h3>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* مشروع مشكاة */}
          <div className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-lime-400/40 transition-all duration-500">
            <div className="h-56 bg-gradient-to-br from-emerald-900/30 to-black flex items-center justify-center">
               <div className="bg-black/60 backdrop-blur-md border border-lime-500/20 px-6 py-3 rounded-full text-lime-400 font-bold tracking-widest text-xs">
                  MISHKAH PROJECT
               </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-2xl font-bold text-white">Mishkah App</h4>
                <div className="flex gap-2">
                  <span className="bg-lime-400/10 text-lime-400 px-2 py-1 rounded text-[10px] font-bold">LIVE</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                A social platform for education and community growth. Developed with a mobile-first approach and high-performance API integration.
              </p>
              <div className="flex gap-6">
                <a href="https://mishkah-app.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-lime-400 hover:text-lime-300 transition-colors">
                  <IconExternal /> Live Demo
                </a>
                <a href="https://github.com/23MED-JUDA" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors">
                  <IconGithub /> Source
                </a>
              </div>
            </div>
          </div>

          {/* خانة مشروع قادم */}
          <div className="border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center p-12 text-center group hover:bg-white/5 transition-colors">
             <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-gray-600">+</span>
             </div>
             <p className="text-gray-500 font-medium">Your Next Big Project</p>
          </div>
        </div>
      </section>

      {/* 4. قسم التواصل - Contact Section */}
      <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-4xl font-bold mb-6">Let's work <br/><span className="text-lime-400">together.</span></h3>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="space-y-6">
              <a href="mailto:ahmedjjuda@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-lime-400 transition-all group-hover:text-black">
                  <IconMail />
                </div>
                <span className="text-lg font-medium">ahmedjjuda@gmail.com</span>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=201095125229" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-all group-hover:text-white text-green-500">
                  <IconWhatsapp />
                </div>
                <span className="text-lg font-medium">+20 109 512 5229</span>
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
            <h4 className="font-bold mb-6">Find me on social media</h4>
            <div className="grid grid-cols-2 gap-4">
               <a href="https://web.facebook.com/judax2/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-black/40 rounded-xl hover:bg-lime-400/10 transition-colors border border-white/5">
                  <IconFacebook /> <span className="text-sm">Facebook</span>
               </a>
               <a href="https://www.linkedin.com/in/ahmed-juda-50127638b/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-black/40 rounded-xl hover:bg-lime-400/10 transition-colors border border-white/5">
                  <IconLinkedin /> <span className="text-sm">LinkedIn</span>
               </a>
               <a href="https://www.instagram.com/juda_x2" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-black/40 rounded-xl hover:bg-lime-400/10 transition-colors border border-white/5">
                  <IconInstagram /> <span className="text-sm">Instagram</span>
               </a>
               <a href="https://github.com/23MED-JUDA" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-black/40 rounded-xl hover:bg-lime-400/10 transition-colors border border-white/5">
                  <IconGithub /> <span className="text-sm">GitHub</span>
               </a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-[0.3em]">
          <p>© 2026 AHMED JUDA PORTFOLIO</p>
          <p>LINUX MINT & REACT & TAILWIND</p>
        </div>
      </footer>
    </div>
  );
}

export default App;