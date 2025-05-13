# OH Studio Clone

This project is a frontend clone of the OH Studio website, meticulously built using React, Vite, and TypeScript. It endeavors to replicate the user interface, design aesthetics, and core functionalities of the original OH Studio platform.

## Core Technologies

This project leverages a modern technology stack for an optimized development experience and a performant end-product:

-   **React (v18+):** A declarative JavaScript library for building dynamic user interfaces and component-based architectures.
-   **TypeScript:** A statically typed superset of JavaScript, enhancing code quality, maintainability, and developer productivity.
-   **Vite:** A next-generation frontend tooling solution providing extremely fast Hot Module Replacement (HMR) and optimized builds.
-   **React Router DOM:** (Assumed, based on typical React SPA structure and previous interactions) For declarative, client-side routing between different "pages" of the application.
-   **CSS / CSS Modules:** For styling components, offering both global styling capabilities (`index.css`, `App.css`) and component-scoped styles (e.g., `Gallery.css`, `ClickableFace.css`).
-   **ESLint:** (Indicated by `eslint.config.js`) For static code analysis to identify problematic patterns and enforce code style consistency.

## Understanding the Project Structure

The project adheres to a well-organized structure, facilitated by Vite, with the primary application logic residing within the `src` directory.

    # Root application component (handles routing)├── index.css                # Global base styles└── main.tsx                 # Application entry point

-   **`public/`**: Assets in this directory are not processed by Vite and are copied directly to the root of the `dist` folder on build. Ideal for assets like `robots.txt` or favicons.
-   **`src/assets/`**: Contains static resources like images, SVGs, and custom fonts that are imported and processed by Vite during the build.
-   **`src/components/`**: This is the heart of the UI, housing reusable React components. It's further organized by feature or page-specific contexts (`HapticStudioComponents`, `OhStudioComponents`).
-   **`src/pages/`**: Contains components that represent entire pages or views within the application. These components typically compose various smaller components from the `src/components/` directory.
-   **`src/App.tsx`**: The main application shell, often responsible for setting up routing and global layout structures.
-   **`src/main.tsx`**: The JavaScript entry point for the application. It renders the root `App` component into the `index.html`.
-   **Configuration Files**: Files like `vite.config.ts`, `tsconfig.json`, `eslint.config.js`, and `package.json` define the project's build process, TypeScript compilation rules, linting standards, and dependencies, respectively.

## Getting Up and Running

To set up and run this project locally, please follow the steps below.

### Essential Prerequisites

Ensure you have the following software installed on your system:

-   **Node.js:** LTS version (e.g., v18.x, v20.x, or v22.x) is recommended. You can download it from [nodejs.org](https://nodejs.org/).
-   **npm (Node Package Manager):** Comes bundled with Node.js.
-   Alternatively, **Yarn (Package Manager):** Can be installed via npm (`npm install --global yarn`).

### Installation Guide

1. **Clone the Repository:**
   Open your terminal or command prompt and run:

    ```bash
    git clone <your-repository-url>
    cd OH-STUDIO-CLONE
    ```

    (Replace `<your-repository-url>` with the actual URL of your Git repository).

2. **Install Project Dependencies:**
   Navigate to the project's root directory (`OH-STUDIO-CLONE`) and install the necessary packages.

    Using npm:

    ```bash
    npm install
    ```

    Or, if you prefer Yarn:

    ```bash
    yarn install
    ```

### Launching the Development Environment

To start the Vite development server, which features Hot Module Replacement (HMR) for a fast and efficient development workflow:

Using npm:

```bash
npm run dev
```
