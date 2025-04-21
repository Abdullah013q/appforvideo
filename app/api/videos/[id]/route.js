import dbConnect from '@/lib/mongoose';
import Video from '@/models/Video';

export async function DELETE(_, { params }) {
  await dbConnect();
  await Video.findByIdAndDelete(params.id);
  return new Response(null, { status: 204 });
}