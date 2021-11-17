// import * as React from "react";

import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import MediaCardContent from './Content';
import MediaHeader from './MediaHeader';
// TODO

interface IProps {
  isLoading: boolean;
  createTime: number;
  authorMeta: { id: string; nickName: string; avatar: string };
  coverSrc: string;
  videoSrc: string;
  videoAlt: string;
  videoHeight: number;
  videoWidth: number;
  text: string;
  hashtags: { id: string; name: string }[];
  diggCount: number;
  shareCount: number;
  commentCount: number;
}

const MediaCard: React.FC<IProps> = props => {
  const {
    isLoading,
    createTime,
    authorMeta,
    videoSrc,
    videoAlt,
    videoHeight,
    videoWidth,
    coverSrc,
    hashtags,
    text,
    diggCount,
    shareCount,
    commentCount,
  } = props;

  return (
    <Card sx={{ m: 2 }}>
      <MediaHeader
        isLoading={isLoading}
        authorMeta={{
          avatar: authorMeta.avatar,
          nickName: authorMeta.nickName,
        }}
        createTime={createTime}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'end',
        }}
      >
        <Box p={1}>
          <MediaCardContent
            isLoading={isLoading}
            videoSrc={videoSrc}
            videoAlt={videoAlt}
            coverSrc={coverSrc}
            text={text}
            hashtags={hashtags}
            diggCount={diggCount}
            shareCount={shareCount}
            commentCount={commentCount}
            videoHeight={videoHeight}
            videoWidth={videoWidth}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default MediaCard;
