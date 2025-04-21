'use client';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({ title: '', url: '', description: '' });

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const res = await fetch('/api/videos');
    const data = await res.json();
    setVideos(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/videos', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' }
    });
    setForm({ title: '', url: '', description: '' });
    fetchVideos();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/videos/${id}`, { method: 'DELETE' });
    fetchVideos();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="border p-2 w-full" />
        <input name="url" placeholder="YouTube URL" value={form.url} onChange={handleChange} className="border p-2 w-full" />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 w-full"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Video</button>
      </form>

      <ul className="mt-8 space-y-4">
        {videos.map(video => (
          <li key={video._id} className="border p-4">
            <h3 className="font-bold">{video.title}</h3>
            <p>{video.description}</p>
            <button onClick={() => handleDelete(video._id)} className="text-red-600 mt-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}