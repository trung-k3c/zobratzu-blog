import { getAllPostsMeta } from "@/lib/posts";
import Link from "next/link";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <section className="space-y-10">
        <p>This is not a blog.<br/>
            This is where a soul once sat down,<br/>
            and decided not to hurry anymore.
        </p>
      <h1 className="text-3xl font-bold">I am here</h1>
      <div className="space-y-6 pt-4">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
    </section>
  );
}
