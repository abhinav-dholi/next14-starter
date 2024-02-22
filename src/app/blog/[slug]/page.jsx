import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = ({params}) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/19936793/pexels-photo-19936793/free-photo-of-vicmary.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/19936793/pexels-photo-19936793/free-photo-of-vicmary.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
          ></Image>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ex
          nemo placeat repellendus sapiente dicta. Eaque, dicta voluptate
          similique rerum quas ad minus facere optio possimus dolor. Accusamus,
          quos deleniti!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
