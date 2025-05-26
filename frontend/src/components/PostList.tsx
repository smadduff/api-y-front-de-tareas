"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { deletePost, fetchPosts, Post } from "@/store/postsSlice";

export default function PostList() {
  const dispatch = useAppDispatch();
  const { list, filter } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const uniquePosts = Array.from(
    new Map(list.map((item) => [item.name + item.description, item])).values()
  );

  const filteredPosts = uniquePosts.filter((post) =>
    post.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 shadow-sm rounded-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2 border-b border-gray-300">Nombre</th>
            <th className="text-left px-4 py-2 border-b border-gray-300">Descripción</th>
            <th className="text-left px-4 py-2 border-b border-gray-300">Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post: Post) => (
            <tr key={post.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-2 border-b border-gray-200">{post.name}</td>
              <td className="px-4 py-2 border-b border-gray-200">{post.description}</td>
              <td className="px-4 py-2 border-b border-gray-200">
                <button
                  onClick={() => dispatch(deletePost(post.id))}
                  className="text-red-600 hover:underline cursor-pointer transition"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
