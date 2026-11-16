'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Registers the `request_machinery_quote` WebMCP tool for agentic browsers
 * across all Minerals Solutions routes.
 */
interface WebMCPContext {
  registerTool?: (
    tool: Record<string, unknown>,
    options?: { signal?: AbortSignal },
  ) => Promise<unknown>;
}

function equipmentCategoryFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/products\/([^/]+)(?:\/([^/]+))?\/?$/);
  if (!match) return null;
  return match[2] || match[1] || null;
}

export function WebMCPQuoteTool() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const win = window as unknown as { modelContext?: WebMCPContext };
    const nav = navigator as unknown as { modelContext?: WebMCPContext };
    const mc = win.modelContext ?? nav.modelContext;
    if (!mc || typeof mc.registerTool !== 'function') return;

    const defaultCategory = equipmentCategoryFromPath(pathname) || 'industrial-rotary-dryers';
    const controller = new AbortController();

    mc.registerTool(
      {
        name: 'request_machinery_quote',
        description:
          'Submit an industrial machinery RFQ (Rotary Dryers, Sand Washing Plants, Granulation Lines, Conveyors) to Minerals Solutions sales desk in Zak GIDC, Dahegam, Gujarat.',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Contact person or engineer full name' },
            phone: { type: 'string', description: 'Phone number or WhatsApp number with country code' },
            category: {
              type: 'string',
              description: 'Machinery category (e.g., industrial-rotary-dryers, sand-washing-plants, fertilizer-granulation-plants, industrial-conveyors-spares)',
            },
            companyName: { type: 'string', description: 'Company or manufacturing plant name' },
            email: { type: 'string', description: 'Corporate email address' },
            city: { type: 'string', description: 'Plant installation city or region' },
            capacity: { type: 'string', description: 'Required throughput capacity (e.g., 5 TPH, 20 TPH)' },
            material: { type: 'string', description: 'Feed material to process (e.g., silica sand, bentonite, fertilizer)' },
            message: { type: 'string', description: 'Specific project requirements or operating constraints' },
          },
          required: ['name', 'phone', 'category'],
        },
        annotations: {
          consequentialHint: true,
        },
        async execute(inputs: Record<string, unknown>) {
          const payload = {
            category: defaultCategory,
            ...inputs,
          };
          const res = await fetch('/api/quote/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          return {
            content: [
              {
                type: 'text',
                text: res.ok
                  ? 'Industrial machinery quote request submitted successfully. Minerals Solutions engineering team will review specs and respond within 24 hours.'
                  : 'Could not accept quote request. Please ensure name, phone, and machinery category are provided or contact sales@mineralssolution.in directly.',
              },
            ],
          };
        },
      },
      { signal: controller.signal },
    ).catch(() => {});

    return () => controller.abort();
  }, [pathname]);

  return null;
}
