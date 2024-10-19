"use client";

import React, { useEffect, useState } from "react";
import { storageService, initializeStorageService } from '@/app/services/storage';

export default function SongsPage() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // ストレージサービスを初期化
    initializeStorageService();
    if (storageService) {
      setIsInitialized(true);
    }
  }, []);

  // ダミーデータとして複数の曲を配列に格納
  const songs = [
    { id: 1, title: 'Song 1', fileName: 'yagoku_offvocal.mp3' },
  ];

  if (!isInitialized) {
    return <p>Loading...</p>; // 初期化が完了するまでローディング表示
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Songs</h1>
      <p className="text-xl mb-8">以下の曲を視聴できます。</p>
      <div className="space-y-4">
        {songs.map((song) => (
          <SongCard key={song.id} title={song.title} fileName={song.fileName} />
        ))}
      </div>
    </div>
  );
}

function SongCard({ title, fileName }: { title: string; fileName: string }) {
  const [fileUrl, setFileUrl] = React.useState('');

  React.useEffect(() => {
    async function fetchFileUrl() {
      if (!storageService) {
        console.error('Storage service is not initialized');
        return;
      }

      try {
        // 署名付きURLを取得
        const url = await storageService.getSignedUrl(fileName);
        console.log('Fetched signed file URL:', url);
        setFileUrl(url);
      } catch (error) {
        console.error('Error fetching file URL:', error);
      }
    }
    fetchFileUrl();
  }, [fileName]);

  return (
    <div className="card p-4 bg-white shadow-md rounded-md animate-fade-in-up">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <audio controls preload="none" className="w-full">
        <source src={fileUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
