// components/PostCard.tsx
import Link from "next/link";

type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
};

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group p-4 border border-gray-200 rounded-xl hover:shadow-sm transition">
        <h2 className="text-xl font-semibold group-hover:underline">{post.title}</h2>
        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
        {post.excerpt && (
          <p className="mt-2 text-gray-700 text-base line-clamp-3">{post.excerpt}</p>
        )}
      </article>
    </Link>
  );
}
