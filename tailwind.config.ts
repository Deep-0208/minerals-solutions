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
          primary: '#BE2323',          // Official Logo Crimson Red
          primaryHover: '#9E1B1B',     // Interactive Deepened Red
          primaryLight: '#FEF2F2',     // Red 50 tint
          secondary: '#2A2C2D',        // Official Logo Industrial Charcoal
          secondaryHover: '#1E2124',   // Elevated Graphite
          accent: '#DC2626',           // High-visibility Action Red
          amber: '#D97706',            // Industrial Warning / Rating Amber
          whatsapp: '#16A34A',         // Direct WhatsApp Emerald
          slateDark: '#0F172A',        // Slate 900 Footer / High Contrast
          slateNav: '#1E293B',         // Slate 800 Topbar
          surface: '#F8FAFC',          // Slate 50 Technical Section Fill
          border: '#E2E8F0',           // Slate 200 Hairline Borders
          borderStrong: '#CBD5E1',     // Slate 300 Card Hover Strokes
          textPrimary: '#0F172A',      // Slate 900 Headings
          textSecondary: '#334155',    // Slate 800 Body Copy
          textMuted: '#64748B',        // Slate 500 Metadata
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        cardHover: '0 8px 20px -4px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)',
        primaryGlow: '0 4px 14px 0 rgba(190, 35, 35, 0.25)',
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
      },
    },
  },
  plugins: [],
};

export default config;

