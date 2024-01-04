import React, { useEffect, useState } from "react";

const Product = ({ post }) => {
  return (
    <>
      <div>
        <p>{post.title}</p>
      </div>
    </>
  );
};

const FetchApi = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setError(error);
      });

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="App">
        <div>
          <h1>Fetch API Component</h1>
        </div>
        <h4>Product List</h4>
        <div className="Product-List">
          {posts.slice(0, 10).map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FetchApi;
