'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ScrollTextProps {
    scrollProgress: number;
    start: number;
    end: number;
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
}

const ScrollText = ({ scrollProgress, start, end, children, align = 'center' }: ScrollTextProps) => {
    const opacity = scrollProgress >= start && scrollProgress <= end ? 1 : 0;
    const scale = scrollProgress >= start && scrollProgress <= end ? 1 : 0.8;

    const alignClass = {
        left: 'text-left pl-8 md:pl-16',
        center: 'text-center',
        right: 'text-right pr-8 md:pr-16',
    }[align];

    return (
        <motion.div
            className={`absolute inset-0 flex items-center justify-center ${alignClass} pointer-events-none`}
            style={{
                opacity,
                scale,
                transition: 'opacity 0.3s ease-out, scale 0.3s ease-out',
            }}
        >
            <div className="max-w-4xl w-full px-4">
                {children}
            </div>
        </motion.div>
    );
};

export default function KeyboardScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Use scroll tracking with manual scroll listener to avoid hydration issues
    // Use scroll tracking with manual scroll listener to avoid hydration issues
    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const containerHeight = container.offsetHeight;
            const viewportHeight = window.innerHeight;

            // Calculate scroll progress (0 to 1)
            const scrollDistance = containerHeight - viewportHeight;
            const currentScroll = -rect.top;
            const progress = Math.max(0, Math.min(1, currentScroll / scrollDistance));

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        // Wait a tick to ensure ref is populated before initial check
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Preload all images
    useEffect(() => {
        const frameCount = 80;
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        const loadImage = (index: number) => {
            return new Promise<void>((resolve, reject) => {
                const img = new Image();
                const frameNumber = String(index).padStart(3, '0');
                img.src = `/video-split/ffout${frameNumber}.gif`;

                img.onload = () => {
                    loadedImages[index - 1] = img;
                    loadedCount++;
                    setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
                    resolve();
                };

                img.onerror = () => {
                    console.error(`Failed to load image: ${img.src}`);
                    reject();
                };
            });
        };

        Promise.all(
            Array.from({ length: frameCount }, (_, i) => loadImage(i + 1))
        ).then(() => {
            setImages(loadedImages);
            setImagesLoaded(true);
        }).catch((error) => {
            console.error('Error loading images:', error);
        });
    }, []);

    // Render current frame to canvas
    useEffect(() => {
        if (!imagesLoaded || images.length === 0) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const render = () => {
            const frameIndex = Math.min(
                Math.floor(scrollProgress * images.length),
                images.length - 1
            );

            const img = images[frameIndex];
            if (!img) return;

            // Set canvas size to match window
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            context.scale(dpr, dpr);

            // Clear canvas
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate scaling to fit image while maintaining aspect ratio
            const canvasAspect = window.innerWidth / window.innerHeight;
            const imgAspect = img.width / img.height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasAspect > imgAspect) {
                // Canvas is wider than image
                drawWidth = window.innerWidth;
                drawHeight = drawWidth / imgAspect;
                offsetX = 0;
                offsetY = (window.innerHeight - drawHeight) / 2;
            } else {
                // Canvas is taller than image
                drawHeight = window.innerHeight;
                drawWidth = drawHeight * imgAspect;
                offsetX = (window.innerWidth - drawWidth) / 2;
                offsetY = 0;
            }

            // Draw image centered and scaled
            context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        render();

        const handleResize = () => {
            render();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [scrollProgress, images, imagesLoaded]);

    if (!imagesLoaded) {
        return (
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#050505] z-50 transition-colors duration-300">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-black/10 dark:border-white/10 border-t-black/90 dark:border-t-white/90 rounded-full animate-spin"></div>
                </div>
                <p className="mt-6 text-slate-600 dark:text-white/60 text-sm tracking-wide">
                    Loading Experience... {loadingProgress}%
                </p>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-slate-50 dark:bg-[#050505] transition-colors duration-300">
            {/* Sticky Canvas */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                />

                {/* Text Overlays */}
                <ScrollText scrollProgress={scrollProgress} start={0} end={0.25} align="center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white/90">
                        Rana Muzakir
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-white/60 tracking-tight">
                        Personal Portfolio
                    </p>
                </ScrollText>

                <ScrollText scrollProgress={scrollProgress} start={0.25} end={0.5} align="left">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white/90">
                        Creative<br />Developer.
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-white/60 max-w-md tracking-tight">
                        Building seamless web experiences.
                    </p>
                </ScrollText>

                <ScrollText scrollProgress={scrollProgress} start={0.5} end={0.75} align="right">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white/90">
                        Modern<br />Tech Stack.
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-white/60 max-w-md ml-auto tracking-tight">
                        React, Next.js, and cutting-edge tools.
                    </p>
                </ScrollText>

                <ScrollText scrollProgress={scrollProgress} start={0.75} end={1} align="center">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white/90">
                        Let's Connect.
                    </h2>
                    <a href="https://wa.me/1234567890?text=Hi%20Rana,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!" target="_blank" rel="noopener noreferrer" className="mt-8 px-8 py-4 bg-[#25D366] text-white font-semibold text-lg rounded-full hover:bg-[#128C7E] transition-colors duration-300 tracking-tight flex items-center justify-center gap-2 mx-auto w-fit pointer-events-auto">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        WhatsApp Me
                    </a>
                </ScrollText>
            </div>
        </div>
    );
}
