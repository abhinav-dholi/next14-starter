import React from "react";

import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API 
// const getData  = async ()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}})

//   if (!res.ok){
//     throw new Error("Something went wrong")
//   }
//   return res.json()
// }
const BlogPage = async () => {

  // FETCH DATA WITH AN API 
  // const posts = await getData();

  // FETCH WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post)=>(
      <div className={styles.post} key={post.id}>
        <PostCard post={post}/>
      </div>
      ))}
     
    </div>
  );
};

export default BlogPage;
