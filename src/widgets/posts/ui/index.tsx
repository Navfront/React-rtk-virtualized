import { FC } from "react";

import { PostCard, useGetPostsQuery } from "@entities/post";
import { BtnToPostDetails } from "@src/features";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";

const Posts: FC = () => {
  const { data } = useGetPostsQuery("0");

  const totalItems = data ? data.total : 0;
  const rowSizes = new Array(totalItems).fill(true).map(() => 230);

  const getItemSize = (index: number) => rowSizes[index];

  const Row = ({ index, style }: any) => {
    const currentId = index + 1;
    return (
      <div className="" style={style}>
        <PostCard
          id={currentId}
          bottomSlot={() => <BtnToPostDetails productId={currentId} />}
        />
      </div>
    );
  };

  return (
    <section>
      <div style={{ width: 100, height: 1 }}></div>

      {data && (
        <AutoSizer style={{ display: "contents" }}>
          {() => {
            return (
              <List
                className="List "
                height={700}
                itemCount={100}
                itemSize={getItemSize}
                width="100%"
                itemData={data.products}
                style={{ margin: "0 auto" }}
              >
                {Row}
              </List>
            );
          }}
        </AutoSizer>
      )}
    </section>
  );
};

export { Posts };
