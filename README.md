# FocusFlow - Pomodoro Timer App

A clean and focused productivity timer built using **React** and wrapped as a native desktop app with **Electron**.

## Purpose

This app helps you use the **Pomodoro Technique** to structure your work into focused sessions and breaks — now available both as a **web app** and a **desktop app**.

## Tech Stack

- **React** (via Create React App)
- **Electron** (for desktop app bundling)
- HTML/CSS/JS (Vanilla + ES6+)

## Project Structure

```
focusflow-project/
├── focusflow-cra-app-full/ # React frontend app
│ ├── public/
│ ├── src/
│ └── package.json
│ └── build/ # (After running npm run build)
│
├── focusflow-electron-app/ # Electron wrapper
│ ├── main.js # Electron entry point
│ ├── index.html # Hosts built React app
│ ├── bundle.js # Copied from React build
│ └── package.json
│
├── .gitignore
└── README.md
```

## How to Run (React Web Version)

```
cd focusflow-cra-app-full
npm install
npm start
```
Go to: http://localhost:3000

## How to Run (Electron Desktop Version)

1. Build the React app:
```
cd focusflow-cra-app-full
npm install
npm run build
```
2. Copy the output JS bundle to Electron folder:
```
cp build/static/js/main.*.js ../focusflow-electron-app/bundle.js
```
3. Run Electron app:
```
cd ../focusflow-electron-app
npm install
npm start
```

## Package as Desktop App

### A. Quick Run (Dev)

```
npm install -g electron-packager
electron-packager . FocusFlow --platform=darwin --arch=x64 --overwrite
```

### B. Create macOS .dmg Installer (Production)

1. Install electron-builder:
```
npm install --save-dev electron-builder
```
2. Add the following to package.json:
```
"build": {
  "appId": "com.focusflow.app",
  "productName": "FocusFlow",
  "mac": { "target": "dmg" },
  "files": ["main.js", "index.html", "bundle.js", "node_modules/**/*", "package.json"]
}
```
3. Build the .dmg:
```
npm run dist
```
Your app will be in dist/FocusFlow.dmg

## Features

- 25-minute Pomodoro timer (customizable)
- Pause/Resume and Reset buttons
- Alarm sound on completion
- Works on macOS, Windows, Linux
- Cross-browser compatible web app

## Deployment

Host focusflow-cra-app-full/build/ on Netlify, Vercel or GitHub Pages

## Download FocusFlow App (macOS)

Check releases

## Future Enhancements

Automating releases using GitHub Actions

## ScreenShots


