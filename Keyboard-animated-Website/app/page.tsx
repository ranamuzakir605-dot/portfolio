import KeyboardScroll from './components/KeyboardScroll';
import Hero from './components/Hero';


export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#050505] transition-colors duration-300">
            {/* Hero Section */}
            <Hero />

            {/* Scrollytelling Section */}
            <KeyboardScroll />

            {/* Featured Projects Section */}
            <section className="py-32 bg-[#050505] relative z-20 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-16 text-center">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Projects</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Project 1 */}
                        <div className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                            <div className="h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
                                <h3 className="text-3xl font-black text-white/90 z-10 tracking-widest drop-shadow-lg">E-COMMERCE</h3>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white/90 mb-3">Modern E-Commerce App</h3>
                                <p className="text-white/60 mb-6 line-clamp-2">A full-stack e-commerce platform with a modern UI, featuring cart management, payment integration, and a responsive design.</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">Next.js</span>
                                    <span className="px-3 py-1 text-xs font-semibold bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30">Tailwind CSS</span>
                                    <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">Stripe</span>
                                </div>
                                <a href="#" className="inline-flex items-center gap-2 text-white/90 font-semibold hover:text-blue-400 transition-colors">
                                    View Project <span className="text-xl">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                            <div className="h-64 bg-gradient-to-bl from-rose-500/20 to-orange-500/20 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
                                <h3 className="text-3xl font-black text-white/90 z-10 tracking-widest drop-shadow-lg">DASHBOARD</h3>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white/90 mb-3">Analytics Dashboard</h3>
                                <p className="text-white/60 mb-6 line-clamp-2">A real-time admin dashboard with complex data visualization, interactive charts, and user management features.</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">React</span>
                                    <span className="px-3 py-1 text-xs font-semibold bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30">Firebase</span>
                                    <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-300 rounded-full border border-green-500/30">Chart.js</span>
                                </div>
                                <a href="#" className="inline-flex items-center gap-2 text-white/90 font-semibold hover:text-rose-400 transition-colors">
                                    View Project <span className="text-xl">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <section className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#050505] relative transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white/90 mb-8">
                        Ready to build<br />something amazing?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-white/60 mb-12 max-w-2xl mx-auto tracking-tight">
                        Let's collaborate and bring your next big idea to life with modern web technologies.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20">
                        <a href="https://wa.me/1234567890?text=Hi%20Rana,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#25D366] text-white font-bold text-lg rounded-full hover:bg-[#128C7E] transition-all duration-300 tracking-tight hover:scale-105 flex items-center gap-2">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            WhatsApp Me
                        </a>
                        <button className="px-10 py-5 border-2 border-black/20 dark:border-white/20 text-slate-900 dark:text-white font-semibold text-lg rounded-full hover:border-black/40 dark:hover:border-white/40 transition-all duration-300 tracking-tight hover:scale-105">
                            View GitHub
                        </button>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        <div className="p-8 bg-black/5 dark:bg-white/5 rounded-2xl backdrop-blur-sm border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300">
                            <h3 className="text-5xl font-bold text-slate-900 dark:text-white/90 mb-2">3+ Yrs</h3>
                            <p className="text-slate-600 dark:text-white/60 tracking-tight">Experience</p>
                        </div>
                        <div className="p-8 bg-black/5 dark:bg-white/5 rounded-2xl backdrop-blur-sm border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300">
                            <h3 className="text-5xl font-bold text-slate-900 dark:text-white/90 mb-2">100%</h3>
                            <p className="text-slate-600 dark:text-white/60 tracking-tight">Client Satisfaction</p>
                        </div>
                        <div className="p-8 bg-black/5 dark:bg-white/5 rounded-2xl backdrop-blur-sm border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300">
                            <h3 className="text-5xl font-bold text-slate-900 dark:text-white/90 mb-2">24/7</h3>
                            <p className="text-slate-600 dark:text-white/60 tracking-tight">Availability</p>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="mt-32 pt-12 border-t border-black/10 dark:border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-slate-500 dark:text-white/40 text-sm tracking-tight">
                                © 2026 Rana Muzakir. All rights reserved.
                            </p>
                            <div className="flex gap-8">
                                <a href="#" className="text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white/90 transition-colors text-sm tracking-tight">Privacy</a>
                                <a href="#" className="text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white/90 transition-colors text-sm tracking-tight">Terms</a>
                                <a href="#" className="text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white/90 transition-colors text-sm tracking-tight">Contact</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </main>
    );
}
