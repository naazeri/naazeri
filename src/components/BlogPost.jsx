import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import matter from 'gray-matter';
import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import useAppStore from '../store/useAppStore';
window.Buffer = Buffer;

const BlogPost = () => {
  const { slug } = useParams();
  const { setLang } = useAppStore();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/posts/${slug}.md`);
        const text = await response.text();
        const { data, content } = matter(text);
        setPost(data);
        setContent(content);
      } catch (error) {
        console.error('Error loading post:', error);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post) {
      setLang(post.language);
    }
  }, [post, setLang]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {post && (
        <>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-gray-600">{post.date}</p>
          <img src={post.image} alt={post.title} className="w-full my-4" />
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  return !inline ? (
                    <SyntaxHighlighter
                      dir="ltr"
                      style={materialDark}
                      language="javascript"
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className="bg-gray-200 p-1 rounded">{children}</code>
                  );
                },
                img({ src, alt }) {
                  return (
                    <img
                      src={src}
                      alt={alt}
                      className="w-full rounded-lg my-4"
                    />
                  );
                },
                a({ href, children }) {
                  return (
                    <a
                      href={href}
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPost;
