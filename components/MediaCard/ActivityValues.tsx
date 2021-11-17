import React from 'react';

import {
  Comment as CommentIcon,
  Share as ShareIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material';
import { Box, styled } from '@mui/material';

import { IconWrapper } from '../common/IconWrapper';

// TODO
const Wrapper = styled(Box)`
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'center';
  align-items: 'center';
  padding: 0;
  margin: 0;
`;

interface IProps {
  isLoading: boolean;
  diggCount: number;
  shareCount: number;
  commentCount: number;
}

const MediaCardActivityValues: React.FC<IProps> = props => {
  const { isLoading, diggCount, shareCount, commentCount } = props;

  return (
    <Wrapper>
      <IconWrapper isLoading={isLoading} value={diggCount}>
        <FavoriteIcon />
      </IconWrapper>
      <IconWrapper isLoading={isLoading} value={shareCount}>
        <ShareIcon />
      </IconWrapper>
      <IconWrapper isLoading={isLoading} value={commentCount}>
        <CommentIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export default MediaCardActivityValues;
