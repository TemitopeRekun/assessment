![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

# React, TypeScript & Tailwind CSS Showcase

A modern, responsive single-page application built to demonstrate a clean and scalable front-end architecture using React, TypeScript, and Tailwind CSS.

**[Live Demo](https://temitoperekun.github.io/assessment/)**

---

## 🚀 Project Overview

This project is a modern, responsive single-page application built with a clean and scalable front-end architecture. It demonstrates component-based design, strong typing with TypeScript, and utility-first styling with Tailwind CSS v4.

The page showcases product information, benefits, nutrition insights, and trust-building elements — all organized into reusable components.

## ✨ Key Features

- **Component-Based Architecture**: UI is broken down into small, reusable, and maintainable components.
- **Strongly Typed**: Full TypeScript integration for improved reliability and developer experience.
- **Utility-First Styling**: Styled entirely with Tailwind CSS for rapid, consistent, and maintainable design.
- **Responsive Design**: Mobile-first approach ensures a seamless experience on all screen sizes without custom media queries.
- **Modern Tooling**: Built with Vite for an exceptionally fast local development experience and optimized production builds.

---

## 🛠️ Technology Stack

*   **React**: For building the user interface with a component-based model.
*   **TypeScript**: For adding static types to enhance code quality and maintainability.
*   **Vite**: As the build tool, providing a faster and leaner development experience.
*   **Tailwind CSS v4**: For all styling, using a utility-first approach.

---

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/TemitopeRekun/assessment.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd my-app
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Development Server

To start the Vite development server with Hot Module Replacement (HMR):

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 🧩 Component Architecture

This project follows a modular, component-driven structure, keeping UI elements reusable, readable, and easy to scale.

*   **`Homepage.tsx`**: The main page component that assembles all the individual sections of the application. It manages section-level data and demonstrates clean parent-to-child prop passing.
*   **`FoodSection.tsx`**: Displays the benefits grid, central product image, and trusted-by logos. It leverages Tailwind's grid system for full responsiveness.
*   **`NutritionSection.tsx`**: A two-column responsive layout that uses a reusable `KeyPoint` component to display nutritional information.
*   **`ImproveSection.tsx` / `DigestiveSection.tsx`**: Consistent two-column layouts that use `flex-col-reverse` to provide a better mobile user experience.
*   **`FeatureItem.tsx` / `KeyPoint.tsx`**: Small, stateless, and reusable presentational components. Their props are strongly typed with TypeScript interfaces to ensure correctness.

---

## 🎨 Styling and Responsiveness

The entire UI is styled using Tailwind CSS with a mobile-first approach.

*   **Global Styles**: The `index.css` file sets up the base theme, including the `Inter Tight` font and default typography for headings and paragraphs. It also defines a reusable `.sectionWrapper` utility for consistent section padding and width.
*   **Responsive Layouts**: Responsiveness is achieved through Tailwind’s utility classes (e.g., `flex-col md:flex-row`, `grid-cols-1 lg:grid-cols-3`). No custom media queries are needed, which keeps the styling streamlined and maintainable.