export default function SongsPage() {
    return (
      <div>
        <h1 className="text-4xl font-bold">Songs</h1>
        <p className="mt-4">以下の曲を視聴できます。</p>
        <audio controls>
          <source src="/sample.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
  