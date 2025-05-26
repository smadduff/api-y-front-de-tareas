import PostFilter from "@/components/PostFilter";
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">Gestión de Posts</h1>
      <PostFilter />
      <PostList />
      <PostForm />
    </main>
  );
}