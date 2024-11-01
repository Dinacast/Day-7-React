import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function App(props) {
  console.log(props);

  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const post = await res.json();
      console.log(post);
      setPost(post);
      setIsFetching(false);
    };

    fetchPost();
  }, [postId]);

  // if (isFetching) {
  //   return <h1>Loading..</h1>
  // }
  return (
    <>
      <Header>{props.nama}</Header>
      <p>React is Awesome</p>
      <p>Post ID: {postId}</p>
      <button onClick={(e) => setPostId(postId + 1)}>Next Post</button>
      {/* {isFetching ? (
      <h1>Loading..</h1>
      ) : (
     <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      </>
      )} */}
      {isFetching && <h1>Loading..</h1>}
      {!isFetching && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
}

App.propTypes = {
  nama: PropTypes.string.isRequired
};

export default App;
