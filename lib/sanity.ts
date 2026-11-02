import { createClient } from 'next-sanity';

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2026-10-31';
export const sanityReady = Boolean(sanityProjectId && sanityProjectId !== 'projectIdNotConfigured');

export const sanity = createClient({
  projectId: sanityProjectId || 'projectIdNotConfigured',
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
});
