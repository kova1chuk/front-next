import React, { useState, useEffect } from "react";

import Router, { withRouter } from "next/router";

import Box from "@mui/material/Box";
// import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
// import Avatar from '@mui/material/Avatar';
import { MediaCard } from "../components/MediaCard";
import Avatar from "@mui/material/Avatar";

import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

import user from "../data/user.json";
import { IconWrapper } from "../components/common/IconWrapper";
import { Card, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import PeopleIcon from "@mui/icons-material/People";

// TODO

const User = (props: any) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      // justifyContent="start"
      style={{ minHeight: "100vh" }}
    >
      <Card>
        <Grid container spacing={0} alignItems="space-around">
          <Avatar
            alt="Ted talk"
            src={user.user.avatarMedium}
            sx={{ width: "30%", height: "auto", m: 5 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

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
          <IconWrapper value={user.stats.followerCount}>
            <PeopleIcon />
          </IconWrapper>
          <IconWrapper value={user.stats.followingCount}>
            <VisibilityIcon />
          </IconWrapper>
          <IconWrapper value={user.stats.heartCount}>
            <FavoriteIcon />
          </IconWrapper>
          <IconWrapper value={user.stats.videoCount}>
            <PersonalVideoIcon />
          </IconWrapper>
        </Grid>
      </Card>
    </Grid>
  );
};

User.getInitialProps = async ({ query }: any) => {
  const page = query.page || 1; //if page empty we request the first page

  return {
    // totalCount: feed.length,
    // pageCount: 10,
    // currentPage: page,
    // perPage: 10,
    // posts: feed,
  };
};

export default User;
