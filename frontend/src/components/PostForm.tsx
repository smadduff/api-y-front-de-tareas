"use client";

import { useState } from "react";
import { useAppDispatch } from "@/store";
import { createPost } from "@/store/postsSlice";

export default function PostForm() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) return;
    dispatch(createPost({ name, description }));
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
      <div className="flex gap-4">
        <input
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <button
        type="submit"
        className="self-start px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition cursor-pointer"
      >
        Crear
      </button>
    </form>
  );
}
