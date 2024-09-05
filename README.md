# React + DaisyUI + AnimationOnScroll Template

---

This template provides a minimal setup to get React working in Vite alongside TailwindCSS, DaisyUI and Animate On Scroll with HMR and some ESLint rules.

### File Structure

```
.
├── .gitignore - List of files and directories to ignore
├── eslint.config.js - ESLint configuration
├── index.html - HTML template
├── package.json - Node.js dependencies
├── postcss.config.js - PostCSS configuration
├── public/ - Static files which can be accessed directly
├── README.md - This file
├── src/
│ ├── App.css - Global styles
│ ├── App.tsx - Main React component
│ ├── assets/ - Images, fonts, etc.
│ ├── components/ - Reusable components
│ │ ├── helloworld.tsx - Example component
│ │ └── index.ts - Export all components
│ ├── index.css - Entry point for global styles
│ ├── main.tsx - Entry point for React
│ └── vite-env.d.ts - Typescript types for Vite
├── tailwind.config.js - TailwindCSS configuration
├── tsconfig.app.json - Typescript configuration for the app
├── tsconfig.json - Typescript configuration
├── tsconfig.node.json - Typescript configuration for Node.js
└── vite.config.ts - Vite configuration
```

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/whirlxd/react-daisyui-aos-template.git
```

2. Install the dependencies:

```bash
cd react-daisyui-aos-template
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`.

#### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

### Why use this template?

- I do not like to use create-react-app because it is too bloated and I do not need all the features it provides.
- I like to have a minimal setup with the tools I need to get started quickly.
- I like to have a clean and organized file structure.
- This is my personal preference and you may not like it. That's okay.

---
