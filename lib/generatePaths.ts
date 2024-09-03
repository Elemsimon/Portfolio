import { posts } from '@/data/index';

export const generateStaticPaths = () => {
    return posts.map(post => ({
      params: { id: post.id },
    }));
  };