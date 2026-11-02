import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
  name: 'alerta-diario',
  title: 'Alerta Diário — Redação',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'projectIdNotConfigured',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
