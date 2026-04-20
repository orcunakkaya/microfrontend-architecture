# Microfrontend Architecture Demo

A simple microfrontend architecture demo built with **Module Federation** and **Vite**.

This project demonstrates how a **React host application** can integrate and orchestrate:
- **React remote application**
- **Vue remote application**

## 🧰 Tech Stack

- React
- Vue 3
- TypeScript
- Vite
- Module Federation
- React Router DOM

## ✨ Features

- Cross-framework microfrontend (React + Vue)
- Route-based remote rendering
- Runtime module loading
- Sidebar layout & navigation
- Loading states for remotes
- Error handling for remote failures

## 🚀 Getting Started

Install dependencies:

```bash
cd apps/host-react && npm install
cd apps/dashboard-react && npm install
cd apps/profile-vue && npm install
```

Run apps:
```bash
cd apps/dashboard-react && npm run dev
cd apps/profile-vue && npm run dev
cd apps/host-react && npm run dev
```

## 🌐 Local URLs

- Host: http://localhost:3000
- React Remote: http://localhost:3001
- Vue Remote: http://localhost:3002