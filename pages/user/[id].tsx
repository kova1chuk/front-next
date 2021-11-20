import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Card, Typography, Grid, Avatar, Box } from '@mui/material';
import moment from 'moment';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { IconWrapper } from '../../components/common/IconWrapper';
import { MediaGrid } from '../../components/common/MediaGrid';
import tiktokFetch from '../../lib/api/tiktok/feed';

const User = () => {
  const router = useRouter();

  const userUrl = `https://tiktok33.p.rapidapi.com/user/info/${
    router.query.id as string
  }`;
  const { data: user, error: userError } = useSWR(userUrl, tiktokFetch);

  const url = `https://tiktok33.p.rapidapi.com/user/feed/${
    router.query.id as string
  }`;
  const { data, error } = useSWR(url, tiktokFetch);

  if (error && userError) router.push('/404');

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      {user & user.user && (
        <Card>
          <Grid container spacing={0} alignItems="space-around">
            <Avatar
              alt="Ted talk"
              src={user.user.avatarMedium}
              sx={{ width: '30%', height: 'auto', m: 5 }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',

                m: 5,
              }}
            >
              <Typography>{user.user.nickname}</Typography>
              <Typography>@{user.user.uniqueId}</Typography>
              <Typography>{user.user.signature}</Typography>
              {user.user.bioLink && (
                <Typography>bio link: {user.user.bioLink.link}</Typography>
              )}
              <Typography>
                {moment.unix(user.user.createTime).fromNow()}
              </Typography>
            </Box>
          </Grid>
          <Grid container spacing={4} justifyContent="center" mt={5}>
            <IconWrapper value={user.stats.followerCount} isLoading={false}>
              <PeopleIcon />
            </IconWrapper>
            <IconWrapper value={user.stats.followingCount} isLoading={false}>
              <VisibilityIcon />
            </IconWrapper>
            <IconWrapper value={user.stats.heartCount} isLoading={false}>
              <FavoriteIcon />
            </IconWrapper>
            <IconWrapper value={user.stats.videoCount} isLoading={false}>
              <PersonalVideoIcon />
            </IconWrapper>
          </Grid>
        </Card>
      )}
      <Box sx={{ pt: 2, pb: 7 }}>
        <MediaGrid posts={data && data} isLoading={!data} loadingCount={6} />
      </Box>
    </Grid>
  );
};

User.getInitialProps = async () => {
  // const page = query.page || 1; //if page empty we request the first page

  return {
    // totalCount: feed.length,
    // pageCount: 10,
    // currentPage: page,
    // perPage: 10,
    // posts: feed,
  };
};

export default User;
