import React from 'react';

// 曲のデータを管理する配列
const songs = [
  {
    id: 1,
    title: 'Sample 01',
    fileUrl: 'https://f005.backblazeb2.com/file/chikuchi/yagoku_offvocal.mp3',
  },
];

export default function SongsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Songs</h1>
      <p className="text-xl mb-8">以下の曲を視聴できます。</p>
      <div className="flex flex-wrap gap-4 justify-left">
        {/* 曲のデータをマップして表示 */}
        {songs.map((song) => (
          <SongCard key={song.id} title={song.title} fileUrl={song.fileUrl} />
        ))}
      </div>
    </div>
  );
}

function SongCard({ title, fileUrl }: { title: string; fileUrl: string }) {
  return (
    <div className="card p-4 bg-white shadow-md rounded-md animate-fade-in-up w-full max-w-lg">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <audio controls preload="none" className="w-full">
        <source src={fileUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
