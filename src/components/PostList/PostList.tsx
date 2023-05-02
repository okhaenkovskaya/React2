import { useState, useEffect } from "react";
import axios from "axios";

import style from "./PostList.module.scss";
import PostItem from "./PostItem";

type PostProps = {
  id: number;
  title: string;
  body: string;
  userID: number;
};

const PostList = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const getPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setPosts([...posts, ...res.data]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={style.postList}>
      {posts.length > 0 &&
        posts.map((postItem) => (
          <PostItem
            title={postItem.title}
            body={postItem.body}
            key={postItem.id}
          />
        ))}
    </div>
  );
};

export default PostList;
