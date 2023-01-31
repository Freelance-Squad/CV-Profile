'use client';

import React from 'react';
import Topbar from '../components/Topbar';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Topbar />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
