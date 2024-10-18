import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import SideMenu from './components/SideMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Corporate Website',
  description: 'A modern corporate website with a side menu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          {/* メインコンテンツ */}
          <div className="flex-grow p-8">
            {children}
          </div>
          {/* サイドメニュー */}
          <SideMenu />
        </div>
      </body>
    </html>
  );
}
