import React, { useState, useEffect } from "react";
import {API_URL} from './../config/ApiConstants';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((err) => alert(err));
  }, []);

  return (
    <div id="posts">
      {posts.length > 0 ? (
        posts.map((post, i) => {
          return (<div key={post.id}>
            <p>Title: <span>{post.title}</span></p>
            <p>Body: <span>{post.body}</span></p>
            <hr/>
          </div>);
        })
      ) : (
        <h3>No Elements found</h3>
      )}
    </div>
  );
};
