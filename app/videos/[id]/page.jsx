import dbConnect from '@/lib/mongoose';
import Video from '@/models/Video';

export default async function VideoPage({ params }) {
  await dbConnect();
  const video = await Video.findById(params.id);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
      <div className="mb-4">
        <iframe
          className="w-full aspect-video"
          src={video.url}
          title={video.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p>{video.description}</p>
    </div>
  );
}