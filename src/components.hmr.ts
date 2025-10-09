// src/components.hmr.ts
// Foundations from *source* (HMR-friendly)
import "./foundations/reset.css";
import "./foundations/base.css";

// Pull in every component stylesheet eagerly so Vite watches & hot-swaps them.
Object.values(import.meta.glob("./components/**/*.css", { eager: true }));
