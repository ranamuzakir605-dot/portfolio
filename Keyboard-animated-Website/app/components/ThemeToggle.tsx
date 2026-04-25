'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="fixed top-6 right-6 z-50 w-12 h-12" />; // placeholder
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
                <Moon className="w-6 h-6 text-slate-700" />
            )}
        </button>
    );
}
