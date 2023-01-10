# react-vite-monorepo

The goal of this project is to explore different approaches to building and organizing the frontend of a web and mobile app using a monorepo structure and pnpm workspaces.

The project uses Vite as the build tool, which is a lightweight alternative to tools like Webpack and Rollup. Vite is designed to be fast and easy to use, making it a good choice for this project.

The project also uses React and React Native to build the frontend of the web and mobile app. These frameworks allow developers to build reusable UI components that can be shared across platforms, making it easier to build and maintain the app.

In addition to React and React Native, the project also uses Expo, which is a set of tools, libraries, and services that allow developers to build native iOS and Android apps using JavaScript and React.

By testing out these different approaches in a monorepo structure with pnpm workspaces, the project can compare and contrast the benefits and trade-offs of each approach, and ultimately choose the best one for the needs of the project.

```
react-vite-monorepo
├─ apps
│  ├─ react-multi-page-app // Vite React App (MPA)
│  │  ├─ apps
│  │  │  ├─ react-multi-page-app-1 // Vite React App (SPA)
│  │  │  ├─ react-multi-page-app-2 // Vite React App (SPA)
│  ├─ react-native-expo-app // Expo app
│  ├─ react-vite-app // React and Vite App (SPA)
│  ├─ react-vite-microfrontends-app // // React and Vite App with Microfrontends
│  │  ├─ apps
│  │  │  ├─ react-vite-microfrontends-app-1 // Vite React App (SPA)
│  │  │  ├─ react-vite-microfrontends-app-2 // Vite React App (SPA)
│  │  │  ├─ react-vite-microfrontends-app-3 // Webpack React App (SPA)
├─ packages
│  ├─ shared // Internal shared library
│  │  ├─ src
│  │  │  ├─ components
│  │  │  │  ├─ Card // React Native component used in all the apps
│  │  │  ├─ hooks
│  │  │  ├─ utils
package.json
pnpm-workspace.yaml
...
```

<p align="center">
<img width="70%" src="https://user-images.githubusercontent.com/40212595/211433500-136ab822-2f89-4d38-9d5e-b3c0f3da28ed.png">
</p>
