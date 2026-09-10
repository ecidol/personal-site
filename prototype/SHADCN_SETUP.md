# Optional shadcn + Tailwind + TypeScript setup

This prototype currently uses Vite, React JSX, and the shared stylesheet at `src/styles.css`. The expanding-cards feature is integrated in the existing stack at `src/components/ui/expanding-cards.jsx` so the rest of the established prototype does not need a risky framework-wide migration.

To convert the project to a full TypeScript + Tailwind + shadcn setup later, make the change on a separate branch and run:

```bash
npm install -D typescript @types/react @types/react-dom tailwindcss @tailwindcss/vite
npx shadcn@latest init -d --base radix
```

Then review the generated `components.json`, keep the UI alias as `@/components/ui`, point the global CSS entry at the stylesheet chosen for the migration, and rename imported JSX modules to TSX incrementally.

For this Vite project, the correct source-root component folder is `src/components/ui`, not a root-level `components/ui`. Keeping UI primitives there lets the standard `@/components/ui/...` alias resolve consistently and prevents reusable components from being mixed with application-level screens. The current project-wide styles remain in `src/styles.css`.
