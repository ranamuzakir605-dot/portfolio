import KeyboardScroll from './components/KeyboardScroll';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505]">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10 px-4">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white/95 mb-6">
                        KAMI TECHS
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 tracking-tight mb-8">
                        The Future of Wireless Typing
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                        <p className="text-sm text-white/40 uppercase tracking-widest">Scroll to explore</p>
                        <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Animated gradient background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
            </section>

            {/* Scrollytelling Section */}
            <KeyboardScroll />

            {/* Footer Section */}
            <section className="min-h-screen flex items-center justify-center bg-[#050505] relative">
                <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white/90 mb-8">
                        Ready to elevate<br />your typing experience?
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto tracking-tight">
                        Join thousands of professionals and enthusiasts who have discovered the perfect balance of form and function.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20">
                        <button className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-white/90 transition-all duration-300 tracking-tight hover:scale-105">
                            Pre-Order Now
                        </button>
                        <button className="px-10 py-5 border-2 border-white/20 text-white font-semibold text-lg rounded-full hover:border-white/40 transition-all duration-300 tracking-tight hover:scale-105">
                            Learn More
                        </button>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <h3 className="text-5xl font-bold text-white/90 mb-2">100hrs</h3>
                            <p className="text-white/60 tracking-tight">Battery Life</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <h3 className="text-5xl font-bold text-white/90 mb-2">1ms</h3>
                            <p className="text-white/60 tracking-tight">Response Time</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <h3 className="text-5xl font-bold text-white/90 mb-2">RGB</h3>
                            <p className="text-white/60 tracking-tight">Per-Key Lighting</p>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="mt-32 pt-12 border-t border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-white/40 text-sm tracking-tight">
                                © 2026 Kami Techs. All rights reserved.
                            </p>
                            <div className="flex gap-8">
                                <a href="#" className="text-white/40 hover:text-white/90 transition-colors text-sm tracking-tight">Privacy</a>
                                <a href="#" className="text-white/40 hover:text-white/90 transition-colors text-sm tracking-tight">Terms</a>
                                <a href="#" className="text-white/40 hover:text-white/90 transition-colors text-sm tracking-tight">Contact</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </main>
    );
}
