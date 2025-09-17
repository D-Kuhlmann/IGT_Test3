
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react-swc'
import { viteSingleFile } from "vite-plugin-singlefile"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * A custom Vite plugin to automatically remove version specifiers from import statements.
 * For example:
 *   import { Slot } from "@radix-ui/react-slot@1.1.2";
 * becomes:
 *   import { Slot } from "@radix-ui/react-slot";
 */
function removeVersionSpecifiers(): Plugin {
  const VERSION_PATTERN = /@\d+\.\d+\.\d+/;

  return {
    name: 'remove-version-specifiers',

    resolveId(id: string, importer) {
      if (VERSION_PATTERN.test(id)) {
        const cleanId = id.replace(VERSION_PATTERN, '');
        return this.resolve(cleanId, importer, { skipSelf: true });
      }
      return null;
    },
  }
}

/**
 * A custom Vite plugin to resolve imports with the "figma:asset/" prefix.
 */
function figmaAssetsResolver(): Plugin {
  const FIGMA_ASSETS_PREFIX = 'figma:asset/';

  return {
    name: 'figma-assets-resolver',

    resolveId(id: string) {
      if (id.startsWith(FIGMA_ASSETS_PREFIX)) {
        const assetPath = id.substring(FIGMA_ASSETS_PREFIX.length);
        return path.resolve(__dirname, './src/assets', assetPath);
      }
      return null;
    },
  };
}

// Check if we should produce a single file build
const produceSingleFile = process.env.SINGLE_FILE === 'true'

export default defineConfig({
  plugins: [
    react(), 
    figmaAssetsResolver(), 
    removeVersionSpecifiers(),
    ...(produceSingleFile ? [viteSingleFile()] : [])
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});