import React from 'react';

import { MediaCard } from '../../MediaCard';
import PostsWrapper from './styled';

interface IProps {
  posts: any[];
  isLoading: boolean;
  loadingCount?: number;
}

const MediaGrid: React.FC<IProps> = props => {
  const { posts, isLoading, loadingCount } = props;

  const renderPostsSceleton = () =>
    Array.from(Array(loadingCount)).map((_, index) => (
      <MediaCard
        key={index}
        isLoading={isLoading}
        createTime={0}
        authorMeta={{
          id: '',
          nickName: '',
          avatar: '',
        }}
        coverSrc={''}
        videoSrc={''}
        videoAlt={''}
        videoHeight={0}
        videoWidth={0}
        text={''}
        hashtags={[]}
        diggCount={0}
        shareCount={0}
        commentCount={0}
      />
    ));
  const renderPosts = () =>
    posts.map(item => (
      <MediaCard
        isLoading={isLoading}
        key={item.id}
        createTime={item.createTime}
        authorMeta={{
          id: item.authorMeta.id,
          nickName: item.authorMeta.nickName,
          avatar: item.authorMeta.avatar,
        }}
        hashtags={item.hashtags}
        coverSrc={item.covers.origin}
        videoSrc={item.videoUrl}
        text={item.text}
        diggCount={item.diggCount}
        shareCount={item.shareCount}
        commentCount={item.commentCount}
        videoAlt={item.id + item.text}
        videoHeight={0}
        videoWidth={0}
      />
    ));

  return (
    <PostsWrapper>
      {posts && posts.length ? renderPosts() : renderPostsSceleton()}
    </PostsWrapper>
  );
};

export default MediaGrid;
