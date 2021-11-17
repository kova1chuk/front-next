import React from 'react';

import { Box, styled } from '@mui/material';

import MediaCardActivityValues from './ActivityValues';
import Hashtags from './Hashtags';
import PostText from './PostText';
import Video from './Video';

// TODO

const VideoAndStatWrapper = styled(Box)`
  display: flex;
  align-items: end;
`;

const VideoWrapper = styled(props => <Box {...props} />)`
  min-height: 100;
  min-width: 100;
`;
interface IProps {
  isLoading: boolean;
  videoSrc: string;
  videoAlt: string;
  coverSrc: string;
  text: string;
  hashtags: { id: string; name: string }[];
  diggCount: number;
  shareCount: number;
  commentCount: number;
  videoHeight: number;
  videoWidth: number;
}

const MediaCardContent: React.FC<IProps> = props => {
  const {
    isLoading,
    videoSrc,
    text,
    hashtags,
    coverSrc,
    diggCount,
    shareCount,
    commentCount,
    videoAlt,
    videoHeight,
    videoWidth,
  } = props;

  const renderVideoAndStat = () => (
    <VideoAndStatWrapper>
      <VideoWrapper
        sx={{
          height: videoHeight ? videoHeight : 400,
          width: videoWidth ? videoWidth : 230,
        }}
      >
        <Video
          isLoading={isLoading}
          coverSrc={coverSrc}
          videoSrc={videoSrc}
          alt={videoAlt}
        />
      </VideoWrapper>
      <Box p={1} pb={0}>
        <MediaCardActivityValues
          isLoading={isLoading}
          diggCount={diggCount}
          shareCount={shareCount}
          commentCount={commentCount}
        />
      </Box>
    </VideoAndStatWrapper>
  );

  return (
    <Box>
      {renderVideoAndStat()}
      <Box sx={{ maxWidth: 250, mt: 2 }}>
        <PostText isLoading={isLoading} text={text} />
        <Hashtags isLoading={isLoading} hashtags={hashtags} />
      </Box>
    </Box>
  );
};

export default MediaCardContent;
