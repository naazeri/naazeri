import { useEffect } from 'react';
import BlogList from '../components/BlogList';
import useAppStore from '../store/useAppStore';

const BlogPage = () => {
  const { setLang } = useAppStore();

  useEffect(() => {
    setLang('fa');
  }, [setLang]);

  return <BlogList />;
};

export default BlogPage;
