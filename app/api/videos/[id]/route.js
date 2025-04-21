import connect from '@/lib/mongoose';
import Video from '@/models/Video';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  await connect();
  const video = await Video.findById(params.id);
  return video
    ? NextResponse.json(video)
    : NextResponse.json({ error: 'Not found' }, { status: 404 });
}

export async function PUT(request, { params }) {
  await connect();
  const { title, description, youtubeId } = await request.json();
  const updated = await Video.findByIdAndUpdate(
    params.id,
    { title, description, youtubeId },
    { new: true }
  );
  return NextResponse.json(updated);
}

export async function DELETE(request, { params }) {
  await connect();
  await Video.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
