import { FC, useState } from "react";

import { PostCard, useGetPostsQuery } from "@entities/post";
import { BtnToPostDetails } from "@src/features";

const Posts: FC = () => {
  const [itemsToSkip, setItemsToSkip] = useState(0);

  const { isLoading, isError, data } = useGetPostsQuery(itemsToSkip.toString());
  console.log(isLoading, isError, data);

  return (
    <section>
      <h2>Список постов</h2>
      <button
        onClick={() => {
          setItemsToSkip((p) => p + 5);
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          setItemsToSkip((p) => p - 5);
        }}
      >
        -5
      </button>
      <ul>
        {data &&
          data.products.length &&
          data.products.map((post, index) => (
            <PostCard
              key={post.id}
              id={post.id}
              cardNumber={index + itemsToSkip}
              description={post.description}
              title={post.title}
              bottomSlot={() => <BtnToPostDetails productId={post.id} />}
            />
          ))}
      </ul>
    </section>
  );
};

export { Posts };
