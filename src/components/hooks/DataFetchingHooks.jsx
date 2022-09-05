import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFetchingHooks = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchPost = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        { signal }
      );
      console.log(data);
      setPost(data);
    };
    fetchPost();
    return () => controller.abort();
  }, []);
  return (
    <div>
      {post.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </div>
  );
};

export default DataFetchingHooks;
