import React from 'react';

import { Box, CardContent, CircularProgress, Skeleton, Typography } from '@mui/material';
import HoverVideoPlayer from 'react-hover-video-player';

import MediaCardActivityValues from './ActivityValues';

// TODO
interface IProps {
  loading: boolean;
  videoUrl: string;
  cover: string;
  text: string;
  hashtags: any[];
  diggCount: number;
  shareCount: number;
  commentCount: number;
}

const MediaCardContent: React.FC<IProps> = props => {
  const {
    loading,
    videoUrl,
    text,
    hashtags,
    cover,
    diggCount,
    shareCount,
    commentCount,
  } = props;

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'end',
        }}
      >
        {loading ? (
          <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
        ) : (
          <HoverVideoPlayer
            videoSrc={videoUrl}
            muted={false}
            // eslint-disable-next-line @next/next/no-img-element
            pausedOverlay={<img alt="" src={cover} />}
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
        )}
        <Box p={1} pb={0}>
          <MediaCardActivityValues
            diggCount={diggCount}
            shareCount={shareCount}
            commentCount={commentCount}
          />
        </Box>
      </Box>
      <CardContent>
        {loading ? (
          <>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
            {text}
          </Typography>
        )}
      </CardContent>
      <CardContent>
        {loading ? (
          <Skeleton animation="wave" height={10} width="40%" />
        ) : (
          hashtags.map(item => (
            <Box
              key={item.id}
              component="div"
              sx={{
                typography: 'subtitle2',
                display: 'inline-block',
                // p: 1,
                m: 0.2,
                bgcolor: 'background.paper',
                cursor: 'pointer',
              }}
            >
              #{item.name}
            </Box>
          ))
        )}
      </CardContent>
    </Box>
  );
};

export default MediaCardContent;
