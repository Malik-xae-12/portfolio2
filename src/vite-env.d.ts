/// <reference types="vite/client" />

declare module 'next/link' {
  import React from 'react';
  const Link: React.ComponentType<{
    href: string;
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
  }>;
  export default Link;
}

declare module 'motion/react' {
  export * from 'framer-motion';
}


