import React from 'react';

import { CardHeader, Skeleton, Avatar } from '@mui/material';
import moment from 'moment';
import { useRouter } from 'next/router';

import CustomizedMenus from './Context';

interface IProps {
  isLoading: boolean;
  authorMeta: { avatar: string; nickName: string; name: string };
  createTime: number;
}

const MediaHeader: React.FC<IProps> = props => {
  const { isLoading, authorMeta, createTime } = props;

  const router = useRouter();

  const renderAvatarSceleton = () => (
    <Skeleton animation="wave" variant="circular" width={40} height={40} />
  );
  const renderAvatar = () => (
    <Avatar alt={`${authorMeta.nickName} avatar`} src={authorMeta.avatar} />
  );

  const renderTitleSceleton = () => (
    <Skeleton
      animation="wave"
      height={10}
      width="80%"
      style={{ marginBottom: 6 }}
    />
  );

  const renderSubheaderSceleton = () => (
    <Skeleton animation="wave" height={10} width="40%" />
  );
  const renderSubheader = () => moment.unix(createTime).fromNow();

  return (
    <CardHeader
      onClick={() => router.push(`/user/${authorMeta.name}`)}
      avatar={isLoading ? renderAvatarSceleton() : renderAvatar()}
      action={isLoading ? null : <CustomizedMenus />}
      title={isLoading ? renderTitleSceleton() : authorMeta.nickName}
      subheader={isLoading ? renderSubheaderSceleton() : renderSubheader()}
    />
  );
};
export default MediaHeader;
