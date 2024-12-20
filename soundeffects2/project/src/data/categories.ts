export const categories = [
  'nature',
  'environment',
  'human',
  'animal',
  'action',
  'technology',
] as const;

export type SoundCategory = typeof categories[number];