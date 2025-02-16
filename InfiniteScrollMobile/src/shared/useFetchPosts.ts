import {useCallback, useEffect, useState} from 'react';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) {
      return;
    }
    setLoading(true);
    const newPosts = await fetchPosts(page);
    if (newPosts.length > 0) {
      setPosts(prev => [...prev, ...newPosts]);
      setPage(prev => prev + 1);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  }, [page, loading, hasMore]);

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPosts = async (currentPage: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`,
    );
    return response.json();
  };

  return {posts, loadMore, loading, hasMore};
};
