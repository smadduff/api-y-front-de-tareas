"use client";

import { useAppDispatch } from "@/store";
import { setFilter } from "@/store/postsSlice";

export default function PostFilter() {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Filtrar por nombre..."
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
}