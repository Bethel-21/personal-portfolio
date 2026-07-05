import { useEffect, useState } from "react";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  read_time?: string;
  created_at: string;
}

export const useBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/blog/");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error loading blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  return { posts, loading };
};