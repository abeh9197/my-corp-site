"use client";

export default function SongsPage() {
  // ダミーデータとして複数の曲を配列に格納
  const songs = [
    { id: 1, title: 'Song 1', src: '/song1.mp3' },
    { id: 2, title: 'Song 2', src: '/song2.mp3' },
    { id: 3, title: 'Song 3', src: '/song3.mp3' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Songs</h1>
      <p className="text-xl mb-8">以下の曲を視聴できます。</p>
      <div className="space-y-4">
        {songs.map((song) => (
          <div
            key={song.id}
            className="card p-4 bg-white shadow-md rounded-md animate-fade-in-up"
          >
            <h2 className="text-2xl font-semibold mb-2">{song.title}</h2>
            <audio controls preload="none" className="w-full">
              <source src={song.src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}
