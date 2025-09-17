// Type declarations for Figma asset imports
declare module "figma:asset/*" {
  const content: string;
  export default content;
}

// Type declarations for image imports
declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

// Type declarations for versioned package imports (handled by Vite plugin at runtime)
declare module "*@*" {
  const content: any;
  export = content;
  export default content;
}
