import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E10613',              // Primary brand red from design.md
          redHover: '#BC0711',         // Pressed / hover state
          redSoft: '#FFF0F1',          // Soft highlight background
          black: '#111111',            // Main dark surface / display text
          charcoal: '#1B1B1D',         // Hero / footer dark charcoal surface
          neutral900: '#171717',       // Primary body text
          neutral700: '#454545',       // Secondary body text
          neutral500: '#737373',       // Muted text, metadata
          neutral300: '#D9D9DE',       // Borders, dividers
          neutral100: '#F5F5F7',       // Section background
          surface: '#FFFFFF',          // Cards & modal surfaces
          border: '#E7E7EB',           // Subtle card border
          success: '#16794B',
          warning: '#946200',
          error: '#B42318',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'Segoe UI', 'Arial', 'sans-serif'],
        display: ['var(--font-poppins)', 'Poppins', 'Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        card: '0 8px 28px rgba(17, 17, 17, 0.07)',
        hover: '0 14px 36px rgba(17, 17, 17, 0.12)',
        redGlow: '0 8px 30px rgba(225, 6, 19, 0.25)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        pill: '999px',
      },
      maxWidth: {
        content: '1200px',
        hero: '1320px',
      },
    },
  },
  plugins: [],
};

export default config;
