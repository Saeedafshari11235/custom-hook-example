import { useEffect, useState } from "react";

export default function useFetch() {
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json)
        .then((data) => {
          setPosts(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return [posts, isPending, error];
}
