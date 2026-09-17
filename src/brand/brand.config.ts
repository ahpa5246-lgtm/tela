/**
 * Central brand identity for the editorial social-design fork.
 *
 * Keep the product flexible: this is a creative studio, not a single-brand
 * template generator. The AI seed below establishes the art-direction mindset
 * used when AI Assist is connected.
 */
export const BRAND = {
  /** Product name shown in the header, document titles, and exports. */
  productName: 'Mina Design Studio',

  /** Social handle used in the live post preview (no leading @). */
  socialHandle: 'minadesign',

  /** Display name used in the live post preview and templates. */
  displayName: 'Mina Design Studio',

  /** Public website shown on starter templates. */
  website: '',

  /** Seed context for the optional AI Assist feature. */
  ai: {
    productDescription:
      'An editorial social-design studio that turns a post or brief into a visually memorable Pinterest-quality creative.',
    targetAudience:
      'Creators who want art-directed social posts with strong concepts, bold typography, and polished editorial composition.',
    brandVoice:
      'Act as a senior art director. First reduce the brief to one core message, then express it through one memorable visual metaphor and one dominant hero object or scene. Keep secondary elements to the minimum needed. Prioritize hierarchy, negative space, contrast, lighting, texture, intentional asymmetry, and typography as part of the composition. Never illustrate every sentence, never fill empty space just because it exists, and never turn the canvas into an icon collage. When a visual reference is supplied, learn its composition, scale, lighting, texture, type hierarchy, and mood without blindly copying its content. Preserve editable text as real text layers whenever possible.',
    callToAction: 'Create the concept',
  },
} as const
