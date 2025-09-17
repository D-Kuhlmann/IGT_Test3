# IGT Healthcare Application - Figma Make Local Runner

This is a local Figma Make runner for the IGT Healthcare Application. The original project is available at https://www.figma.com/design/LGr73ZAeM7xaSor5CihTbz/IGT-Healthcare-Application.

This project is designed to run Figma Make-generated code locally with enhanced development capabilities, including automatic version specifier removal and figma:asset/ import resolution.

## ⚡ Features

- **Automatic Version Specifier Removal**: Automatically removes version specifiers from import statements (e.g., `@radix-ui/react-slot@1.1.2` becomes `@radix-ui/react-slot`)
- **Figma Asset Resolution**: Resolves `figma:asset/` imports to local assets in the `src/assets` directory
- **Single File Build**: Generate a single HTML file containing your entire app using `npm run build:single`
- **Pre-installed Dependencies**: Comes with all necessary packages for Figma Make-generated code

## 🛠️ Running the code

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Build as a single HTML file:
```bash
npm run build:single
```

The application will be available at `http://localhost:3000`.