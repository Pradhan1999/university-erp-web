# University ERP Web

University ERP Web is a modern, modular, and scalable web application for managing university operations. Built with React, Refine, and Radix UI, it provides a robust foundation for ERP features such as student management, course administration, and more.

## Features

- Modular component architecture (Refine, Radix UI)
- Modern UI/UX with Tailwind CSS
- Authentication and user management
- Data tables with sorting, filtering, and pagination
- Notification system
- Responsive design for desktop and mobile
- Extensible for custom university workflows

## Tech Stack

- [React 19](https://react.dev/)
- [Refine Framework](https://refine.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
	```bash
	git clone <repo-url>
	cd university-erp-web
	```
2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build

To build for production:
```bash
npm run build
# or
yarn build
```

### Start (Production)

```bash
npm run start
# or
yarn start
```

## Project Structure

- `src/` - Main source code
  - `components/` - UI and Refine components
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions
  - `pages/` - Application pages
  - `providers/` - Context and data providers
- `public/` - Static assets
- `package.json` - Project metadata and scripts
- `vite.config.ts` - Vite configuration

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `refine` - Refine CLI

## License

This project is licensed under the MIT License.

---

For more information, see the documentation or contact the project maintainers.
