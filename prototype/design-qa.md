# Design QA — Blur Vignette video cards

Date: 2026-09-08

## Visual truth and implementation

- Reference: `https://www.ui-layouts.com/components/blur-vignette`
- Registry inspected: `https://www.ui-layouts.com/r/blur-vignette-video.json`
- Implementation route: `http://127.0.0.1:4173/?blurqa=1#statement-followup-blank-panel-02`
- Implementation component: `src/components/ui/blur-vignette.jsx`
- Comparison evidence: reference and implementation were captured together in the Codex in-app browser at desktop size. The same source forest clip, rounded 24px frame, blurred perimeter, clear center, and soft transition are visibly matched.

## Fidelity checks

- Source video interaction preserved: muted autoplay, loop, inline playback, cover crop, and a 1 → 1.1 hover/focus zoom with a 500ms transition.
- Source vignette values preserved in the cards: `radius=24px`, `inset=10px`, `transitionLength=100px`, `blur=15px`.
- The default source clip is stored locally at `public/assets/video/blur-vignette-forest.mp4`; there is no production hotlink.
- Desktop layout uses four large cards in a two-by-two grid without clipping or broken gutters.
- Mobile layout was inspected at 390×844: one large card remains readable at a time in a horizontal snap row and card controls remain reachable.
- The four user-selected replacement videos were uploaded independently, persisted to disk, and remained visible after a full page reload.

## Functional checks

- All four `编辑文字` controls open the per-card editor with eyebrow, title, and description fields.
- The editor can be cancelled without changing content and supports repeated saves through the local persistence endpoint.
- All four `更换视频` controls accept MP4, MOV, WebM, or OGV files up to 200 MB.
- Each card has an independent latest-video undo. Card text has a separate latest-edit undo. The page layout undo restores only the prior white blank screen.
- The browser console was checked after loading the default clip and again after the four replacements: no warnings or errors.
- `npm run build` completed and emitted the required Sites build artifacts.
- `npm run test:sites` passed 4/4 tests.

## Severity review

- P0: none
- P1: none
- P2: none

final result: passed
