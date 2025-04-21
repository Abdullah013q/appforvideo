import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  youtubeId: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.Video || mongoose.model('Video', VideoSchema);
