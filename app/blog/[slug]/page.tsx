import Link from "next/link";
import { getPost, getAllPostsMeta } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

// ⚡ Đây là nơi Next.js build các page động
export async function generateStaticParams() {
  const posts = getAllPostsMeta();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <article className="prose prose-neutral max-w-none">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}

