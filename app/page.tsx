"use client";

import React from 'react';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-8 animate-float">
        Welcome to Our Corporate Site
      </h1>
      <p className="text-xl mb-8 animate-float delay-200">
        最新のお知らせやイベント情報をこちらで確認できます。
      </p>
      <div className="card animate-float delay-400">
        <h2 className="text-3xl font-semibold mb-4">最新情報</h2>
        <p>
          イベントや製品に関する最新情報をこちらに表示します。
        </p>
      </div>
    </div>
  );
}
