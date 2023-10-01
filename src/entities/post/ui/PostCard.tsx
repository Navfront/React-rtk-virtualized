import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface PostCardProps {
  cardNumber: number;
  id: number;
  title: string;
  description: string;
  bottomSlot?: (id: PostCardProps["id"]) => ReactNode;
}

const PostCard: FC<PostCardProps> = ({
  id,
  title,
  description,
  cardNumber,
  bottomSlot,
}) => {
  return (
    <article className={styles.card + ` card mb-3 d-grid`}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.number}>{cardNumber}</span>
      <p className={styles.descr}> {description}</p>
      {bottomSlot && <div className={styles.btn}>{bottomSlot(id)}</div>}
    </article>
  );
};

export { PostCard };
