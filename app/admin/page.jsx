import connect from '@/lib/mongoose';
import Video from '@/models/Video';
import { notFound } from 'next/navigation';

export default async function VideoPage({ params }) {
  await connect();
  const video = await Video.findById(params.id).lean();
  if (!video) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
      <div className="aspect-video mb-4">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <p className="text-lg">{video.description}</p>
    </main>
  );
}
