import { useEffect } from "react";
import "./App.css";
import { useFetchPosts } from "./shared/useFetchPosts";

function App() {
  const { posts, loadMore, loading, hasMore } = useFetchPosts();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore, loading]);

  return (
    <>
      <div>
        <h1>Infinite Scroll - Web</h1>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
        {loading && <p>Loading more posts...</p>}
        {!hasMore && <p>You have reached the end.</p>}
      </div>
    </>
  );
}

export default App;
