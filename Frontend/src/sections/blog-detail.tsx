import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("https://personal-portfolio-5jb6.onrender.com/api/blog/");
        const data = await res.json();

        const found = data.find((p: any) => p.id.toString() === id);
        setPost(found);
      } catch (err) {
        console.error("Failed to load post", err);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-6 text-center">
        Loading article...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <p className="text-muted-foreground mb-6">
        {new Date(post.created_at).toDateString()} • {post.read_time || "5 min read"}
      </p>

      <p className="text-lg leading-8 whitespace-pre-line">
        {post.content}
      </p>
    </div>
  );
}