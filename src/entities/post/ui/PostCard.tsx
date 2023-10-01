import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";
import { useGetPostByIdQuery } from "../api/post-api";

interface PostCardProps {
  id: number;
  bottomSlot?: (id: PostCardProps["id"]) => ReactNode;
}

const PostCard: FC<PostCardProps> = ({ id, bottomSlot }) => {
  const { data } = useGetPostByIdQuery(id.toString());

  if (data) {
    const { id, title, description } = data;
    return (
      <article className={styles.mycard}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.number}>{id}.</span>
        <p className={styles.descr}> {description}</p>
        {bottomSlot && <div className={styles.btn}>{bottomSlot(id)}</div>}
      </article>
    );
  }

  return null;
};

export { PostCard };
