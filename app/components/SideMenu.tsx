"use client";

import Link from 'next/link';
import { useState } from 'react';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* ハンバーガーメニューのボタン */}
      <button
        className="lg:hidden fixed top-5 right-5 text-white z-50 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* サイドメニュー */}
      <div
        className={`fixed right-0 top-0 h-full bg-gray-900 text-white w-60 transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:translate-x-0 z-40`}
      >
        <nav className="flex flex-col items-start space-y-4 p-6">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <Link href="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition-colors">
            About
          </Link>
          <Link href="/songs" className="hover:text-gray-400 transition-colors">
            Songs
          </Link>
          <Link
            href="/discography"
            className="hover:text-gray-400 transition-colors"
          >
            Discography
          </Link>
          <Link href="/link" className="hover:text-gray-400 transition-colors">
            Links
          </Link>
          <Link href="/mail" className="hover:text-gray-400 transition-colors">
            Mail
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
