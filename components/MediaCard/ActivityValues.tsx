import Box from "@mui/material/Box";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import React from "react";
import { IconWrapper } from "../common/IconWrapper";

// TODO

interface IProps {
  diggCount: number;
  shareCount: number;
  commentCount: number;
}

const MediaCardActivityValues: React.FC<IProps> = (props) => {
  const { diggCount, shareCount, commentCount } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 0,
        m: 0,
      }}
    >
      <IconWrapper value={diggCount}>
        <FavoriteIcon />
      </IconWrapper>
      <IconWrapper value={shareCount}>
        <ShareIcon />
      </IconWrapper>
      <IconWrapper value={commentCount}>
        <CommentIcon />
      </IconWrapper>
    </Box>
  );
};

export default MediaCardActivityValues;
