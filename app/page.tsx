import { getAllPostsMeta } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPostsMeta();

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">ZobraTzu 🌿</h1>
      <p className="text-lg text-gray-600 max-w-xl">
        A stream of reflections, a journal of becoming and returning.
      </p>

      <div className="space-y-6 pt-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}