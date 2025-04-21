import dbConnect from '@/lib/mongoose';
import Video from '@/models/Video';
import Link from 'next/link';

export default async function VideosPage() {
  await dbConnect();
  const videos = await Video.find();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">All Videos</h1>
      <ul className="space-y-4">
        {videos.map(video => (
          <li key={video._id} className="border p-4">
            <h2 className="text-xl font-semibold">{video.title}</h2>
            <p>{video.description}</p>
            <Link href={`/videos/${video._id}`} className="text-blue-600">Watch</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}