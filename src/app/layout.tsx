import '../styles/globals.scss';
import '../styles/globals.css';

import React from 'react';

import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import config from '_config';

import RootProvider from '@/providers/root';

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  icons: 'favicon.svg',
  manifest: 'app.webmanifest'
};

export const viewport: Viewport = {
  themeColor: '#000'
};

type TRootLayout = PropsWithChildren;

export default function RootLayout({ children }: TRootLayout) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}