# Mina Design Studio — AI art-direction workflow

This fork is optimized for a simple editorial social-design workflow:

1. Paste a post or creative brief into AI Assist.
2. The assistant extracts one core message instead of illustrating every paragraph.
3. It chooses one visual metaphor and one dominant hero object or scene.
4. It composes the canvas with minimal supporting elements, strong hierarchy, negative space, lighting, texture, and editorial typography.
5. Keep headline typography editable as real text layers.
6. Refine in plain language, e.g. “make the hero larger”, “remove secondary objects”, or “increase negative space”.
7. Export from Tela in the required social format.

## Reference-image rule

When reference-image input is connected to the AI endpoint, references are art direction rather than content to copy. Extract composition, scale, crop, light, texture, hierarchy, whitespace, and mood, while creating a new visual concept for the supplied post.

## Quality gate

Before accepting a generated composition, ask:

- Is there exactly one obvious focal idea?
- Can any decorative element be removed without losing the message? If yes, remove it.
- Is the headline readable and part of the composition rather than pasted on top?
- Does the empty space feel intentional?
- Is the visual metaphor specific to this post rather than generic “AI/technology” imagery?

## AI connection

Tela's existing AI Assist remains provider-independent. Configure `VITE_AI_API_ORIGIN` and optionally `VITE_AI_API_PATH` to point at a server-side endpoint implementing `docs/ai-endpoint.md`. Keep provider secrets on the server, never in the browser.
