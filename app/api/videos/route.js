import dbConnect from '@/lib/mongoose';
import Video from '@/models/Video';

export async function GET() {
  await dbConnect();
  const videos = await Video.find();
  return Response.json(videos);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const video = await Video.create(data);
  return Response.json(video);
}