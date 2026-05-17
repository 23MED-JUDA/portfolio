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
      <header className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left relative z-10">
          <h2 className="text-lime-400 font-mono mb-4 text-lg tracking-widest uppercase">Frontend Developer & API Expert</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white">
            Ahmed Juda
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Building modern web applications with <span className="text-white font-semibold">React</span> and <span className="text-white font-semibold">Tailwind CSS</span>. 
            Creator of the <a href="https://mishkah-app.vercel.app/" target="_blank" rel="noreferrer" className="text-lime-400 border-b border-lime-400/30 hover:border-lime-400">Mishkah App</a>.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
             <a href="https://api.whatsapp.com/send/?phone=201095125229" target="_blank" rel="noreferrer" className="bg-lime-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] text-sm flex items-center gap-2">
                <IconWhatsapp /> Let's Chat
             </a>
             <a href="https://github.com/23MED-JUDA" target="_blank" rel="noreferrer" className="border border-white/10 bg-white/5 px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all text-sm flex items-center gap-2">
                <IconGithub /> GitHub
             </a>
          </div>
        </div>
        
        {/* الصورة الشخصية وصندوق التواصل */}
        <div className="flex-1 relative w-full max-w-sm flex flex-col items-center group">
           {/* مكان الصورة الشخصية */}
           <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-2 border-dashed border-lime-400/40 group-hover:border-lime-400 transition-all duration-500 mb-8">
             <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 border-4 border-[#0a0a0a] relative">
               {/* Replace src with your actual image path e.g. /me.jpeg */}
               <img src="/me.jpeg" alt="Ahmed Juda" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x400/111/a3e635?text=Your+Photo" }} />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             </div>
             
             {/* Glowing background */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[120%] h-[120%] bg-lime-400/20 rounded-full blur-[80px] group-hover:bg-lime-400/30 transition-all duration-500"></div>
           </div>

           {/* Social links */}
           <div className="flex justify-center gap-6 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl backdrop-blur-md relative z-10">
              <a href="https://web.facebook.com/judax2/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-lime-400 transition-all hover:-translate-y-1"><IconFacebook /></a>
              <a href="https://www.instagram.com/juda_x2" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-lime-400 transition-all hover:-translate-y-1"><IconInstagram /></a>
              <a href="https://www.linkedin.com/in/ahmed-juda-50127638b/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-lime-400 transition-all hover:-translate-y-1"><IconLinkedin /></a>
           </div>
        </div>
      </header>

      {/* 3. قسم المشاريع - Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-4xl font-bold italic tracking-tight">Featured <span className="text-lime-400">Projects</span></h3>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Mishkah App */}
          <div className="group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-lime-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(163,230,53,0.1)] flex flex-col">
            <div className="h-48 bg-gradient-to-br from-emerald-900/30 to-black flex items-center justify-center relative overflow-hidden shrink-0">
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
               <div className="bg-black/60 backdrop-blur-md border border-lime-500/20 px-6 py-3 rounded-full text-lime-400 font-bold tracking-widest text-xs relative z-10">
                  MISHKAH PLATFORM
               </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">Mishkah App</h4>
                <span className="bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-[10px] font-bold border border-lime-400/20">LIVE</span>
              </div>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-1">
                A social platform for education and community growth. Developed with a mobile-first approach and high-performance API integration.
              </p>
              <div className="flex gap-4 mt-auto">
                <a href="https://mishkah-app.vercel.app/" target="_blank" rel="noreferrer" className="flex-1 text-center bg-white/5 hover:bg-lime-400 text-white hover:text-black py-3 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2">
                  <IconExternal /> Live Demo
                </a>
                <a href="https://github.com/23MED-JUDA/mishkah" target="_blank" rel="noreferrer" className="px-4 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center">
                  <IconGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Graduation Project (Team) */}
          <div className="group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-lime-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(163,230,53,0.1)] flex flex-col">
            <div className="h-48 bg-gradient-to-br from-indigo-900/30 to-black flex items-center justify-center relative overflow-hidden shrink-0">
               <div className="bg-black/60 backdrop-blur-md border border-indigo-500/20 px-6 py-3 rounded-full text-indigo-400 font-bold tracking-widest text-xs relative z-10">
                  LANDING PAGE
               </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">Team Project</h4>
              </div>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-1">
                A premium, luxury-themed graduation project landing page featuring 3D interactions, smooth scrolling, and dynamic team presentation.
              </p>
              <div className="flex gap-4 mt-auto">
                <a href="https://github.com/23MED-JUDA/team" target="_blank" rel="noreferrer" className="flex-1 text-center bg-white/5 hover:bg-lime-400 hover:text-black py-3 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2 text-white">
                  <IconGithub /> View Source
                </a>
              </div>
            </div>
          </div>

          {/* API Teacher */}
          <div className="group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-lime-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(163,230,53,0.1)] flex flex-col">
            <div className="h-48 bg-gradient-to-br from-orange-900/30 to-black flex items-center justify-center relative overflow-hidden shrink-0">
               <div className="bg-black/60 backdrop-blur-md border border-orange-500/20 px-6 py-3 rounded-full text-orange-400 font-bold tracking-widest text-xs relative z-10">
                  BACKEND SERVICE
               </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">API Teacher</h4>
              </div>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-1">
                A robust backend API service designed for managing teachers, courses, and educational content seamlessly.
              </p>
              <div className="flex gap-4 mt-auto">
                <a href="https://github.com/23MED-JUDA/api-teacher" target="_blank" rel="noreferrer" className="flex-1 text-center bg-white/5 hover:bg-lime-400 hover:text-black py-3 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2 text-white">
                  <IconGithub /> View Source
                </a>
              </div>
            </div>
          </div>

          {/* Space Project */}
          <div className="group relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden hover:border-lime-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(163,230,53,0.1)] flex flex-col">
            <div className="h-48 bg-gradient-to-br from-blue-900/30 to-black flex items-center justify-center relative overflow-hidden shrink-0">
               <div className="bg-black/60 backdrop-blur-md border border-blue-500/20 px-6 py-3 rounded-full text-blue-400 font-bold tracking-widest text-xs relative z-10">
                  UI/UX SHOWCASE
               </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">Space Exploration</h4>
              </div>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-1">
                A creative web project featuring beautiful UI/UX designs to explore space content with interactive animations.
              </p>
              <div className="flex gap-4 mt-auto">
                <a href="https://github.com/23MED-JUDA/Space" target="_blank" rel="noreferrer" className="flex-1 text-center bg-white/5 hover:bg-lime-400 hover:text-black py-3 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2 text-white">
                  <IconGithub /> View Source
                </a>
              </div>
            </div>
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