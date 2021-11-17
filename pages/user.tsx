import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Card, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// import Avatar from '@mui/material/Avatar';
import { IconWrapper } from '../components/common/IconWrapper';
import user from '../data/user.json';

// TODO

const User = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      // justifyContent="start"
      style={{ minHeight: '100vh' }}
    >
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
            <Typography>bio link: {user.user.bioLink.link}</Typography>
            <Typography>{user.user.createTime}</Typography>
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
