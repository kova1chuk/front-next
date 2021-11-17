import React from 'react';

import { Box, CircularProgress, Skeleton } from '@mui/material';
import HoverVideoPlayer from 'react-hover-video-player';

interface IProps {
  isLoading: boolean;
  coverSrc: string;
  videoSrc: string;
  alt: string;
}

const Video: React.FC<IProps> = props => {
  const { isLoading, coverSrc, videoSrc, alt } = props;

  const renderSceleton = () => {
    console.log(isLoading);
    return (
      <Skeleton
        sx={{ height: '100%', width: '100%' }}
        animation="wave"
        variant="rectangular"
      />
    );
  };

  const renderVideo = () => (
    <HoverVideoPlayer
      videoSrc={videoSrc}
      muted={false}
      style={{ height: '100%', width: '100%' }}
      pausedOverlay={
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={alt}
          src={coverSrc}
          style={{ height: '100%', width: '100%', zIndex: -1 }}
        />
      }
      loadingOverlay={
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      }
    />
  );

  return isLoading ? renderSceleton() : renderVideo();
};

export default Video;
