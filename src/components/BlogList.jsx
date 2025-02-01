import { Link } from 'react-router-dom';
import matter from 'gray-matter';
import { useState, useEffect } from 'react';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const importPosts = async () => {
      try {
        const files = ['post1.md', 'post2.md']; // List all blog files manually or fetch dynamically
        const posts = await Promise.all(
          files.map(async (file) => {
            const response = await fetch(`/posts/${file}`);
            const text = await response.text();
            const { data } = matter(text);
            return { ...data, slug: file.replace('.md', '') };
          })
        );
        setPosts(posts);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    };

    importPosts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="block">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-600">{post.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
