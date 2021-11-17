import React from "react";
import { MediaCard } from "../../MediaCard";
import PostsWrapper from "./PostWrapper";

// TODO: typing, refactoring

interface IProps {
  posts: any[];
  isLoading: boolean;
  loadingCount?: number;
}

const MediaGrid: React.FC<IProps> = (props) => {
  const { posts, isLoading, loadingCount } = props;

  return (
    <PostsWrapper>
      {posts
        ? posts.map((item) => (
            <MediaCard
              loading={isLoading}
              key={item.id}
              createTime={item.createTime}
              authorMeta={{
                id: item.authorMeta.id,
                nickName: item.authorMeta.nickName,
                avatar: item.authorMeta.avatar,
              }}
              hashtags={item.hashtags}
              cover={item.covers.origin}
              videoUrl={item.videoUrl}
              text={item.text}
              diggCount={item.diggCount}
              shareCount={item.shareCount}
              commentCount={item.commentCount}
            />
          ))
        : Array.from(Array(6)).map((_, index) => (
            <MediaCard key={index} isLoading={isLoading} />
          ))}
    </PostsWrapper>
  );
};

export default MediaGrid;
