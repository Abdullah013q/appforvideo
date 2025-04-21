import connect from '@/lib/mongoose';
import Video from '@/models/Video';
import { NextResponse } from 'next/server';

export async function GET() {
  await connect();
  const videos = await Video.find().sort({ createdAt: -1 });
  return NextResponse.json(videos);
}

export async function POST(req) {
  await connect();
  const { title, description, youtubeId } = await req.json();
  if (!title || !youtubeId) {
    return NextResponse.json({ error: 'title and youtubeId required' }, { status: 400 });
  }
  const video = new Video({ title, description, youtubeId });
  await video.save();
  return NextResponse.json(video, { status: 201 });
}
