// import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import moment from "moment";
import React from "react";
import MediaCardContent from "./Content";
import MediaCardActivityValues from "./ActivityValues";
import CustomizedMenus from "./Context";
// TODO
function Media(props: {
  loading?: boolean | undefined;
  createTime: any;
  authorMeta: any;
  cover: any;
  videoUrl: any;
  text: any;
  hashtags: any[];
  diggCount: number;
  shareCount: number;
  commentCount: number;
}) {
  const {
    loading = false,
    createTime,
    authorMeta,
    cover,
    hashtags,
    videoUrl,
    text,
    diggCount,
    shareCount,
    commentCount,
  } = props;

  return (
    <Card sx={{ width: 345, m: 2 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar alt="Ted talk" src={authorMeta.avatar} />
          )
        }
        action={loading ? null : <CustomizedMenus />}
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            authorMeta.nickName
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            moment(
              new Date(createTime)
              // "YYYYMMDD"
            ).fromNow()
            // "Texd"
          )
        }
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
        }}
      >
        <Box p={1}>
          <MediaCardContent
            loading={loading}
            videoUrl={videoUrl}
            cover={cover}
            text={text}
            hashtags={hashtags}
            diggCount={diggCount}
            shareCount={shareCount}
            commentCount={commentCount}
          />
        </Box>
        {/* <Box p={1}>
          <MediaCardActivityValues
            diggCount={diggCount}
            shareCount={shareCount}
            commentCount={commentCount}
          />
        </Box> */}
      </Box>
    </Card>
  );
}

export default function CustomCard({
  isLoading,
  createTime,
  authorMeta,
  cover,
  videoUrl,
  text,
  hashtags,
  diggCount,
  shareCount,
  commentCount,
}: any) {
  return (
    <div>
      <Media
        loading={isLoading}
        hashtags={hashtags}
        createTime={createTime}
        authorMeta={authorMeta}
        cover={cover}
        videoUrl={videoUrl}
        text={text}
        diggCount={diggCount}
        shareCount={shareCount}
        commentCount={commentCount}
      />
    </div>
  );
}
