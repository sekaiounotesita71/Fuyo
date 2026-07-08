@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-noto-sans-jp: "Yu Gothic", "Hiragino Kaku Gothic ProN", "Meiryo", system-ui, sans-serif;
  --font-noto-serif-jp: "Yu Mincho", "Hiragino Mincho ProN", "Times New Roman", serif;
  color-scheme: light;
  background: #ffffff;
  color: #0b111c;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    linear-gradient(180deg, rgba(244, 246, 248, 0.78), rgba(255, 255, 255, 0) 420px),
    #ffffff;
  color: #0b111c;
  font-family: var(--font-noto-sans-jp), system-ui, sans-serif;
  text-rendering: optimizeLegibility;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: rgba(16, 26, 45, 0.16);
}

.container-shell {
  width: min(1120px, calc(100% - 40px));
  margin-inline: auto;
}

.section-y {
  padding-block: clamp(72px, 10vw, 120px);
}

.reveal {
  animation: reveal 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.reveal-delay-1 {
  animation-delay: 100ms;
}

.reveal-delay-2 {
  animation-delay: 180ms;
}

.hairline {
  background-image: linear-gradient(90deg, transparent, rgba(169, 133, 67, 0.7), transparent);
  height: 1px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #ffffff;
  color: #0b111c;
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  transition:
    background-color 180ms ease,
    transform 180ms ease;
}

.btn-primary:hover {
  background: #f4f6f8;
  transform: translateY(-1px);
}

.btn-outline-dark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.24);
  color: #ffffff;
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  transition:
    background-color 180ms ease,
    border-color 180ms ease;
}

.btn-outline-dark:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.44);
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
