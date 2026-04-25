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
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#050505] z-50">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-white/10 border-t-white/90 rounded-full animate-spin"></div>
                </div>
                <p className="mt-6 text-white/60 text-sm tracking-wide">
                    Loading Experience... {loadingProgress}%
                </p>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
            {/* Sticky Canvas */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                />

                {/* Text Overlays */}
                <ScrollText scrollProgress={scrollProgress} start={0} end={0.25} align="center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white/90">
                        Kami Techs
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-white/60 tracking-tight">
                        Wireless Keyboard
                    </p>
                </ScrollText>

                <ScrollText scrollProgress={scrollProgress} start={0.25} end={0.5} align="left">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white/90">
                        Precision<br />Engineering.
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-white/60 max-w-md tracking-tight">
                        Every component crafted to perfection.
                    </p>
                </ScrollText>

                <ScrollText scrollProgress={scrollProgress} start={0.5} end={0.75} align="right">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white/90">
                        Mechanical<br />Switches.
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-white/60 max-w-md ml-auto tracking-tight">
                        Tactile feedback that responds to your touch.
                    </p>
                </ScrollText>

                <ScrollText scrollProgress={scrollProgress} start={0.75} end={1} align="center">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white/90">
                        Type Everything.
                    </h2>
                    <button className="mt-8 px-8 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-white/90 transition-colors duration-300 tracking-tight">
                        Explore Now
                    </button>
                </ScrollText>
            </div>
        </div>
    );
}
