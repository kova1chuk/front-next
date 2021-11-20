import React from 'react';

import { Skeleton, Typography } from '@mui/material';

interface IProps {
  isLoading: boolean;
  text: string;
}

const PostText: React.FC<IProps> = props => {
  const { isLoading, text } = props;

  const renderSceleton = () => (
    <>
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} width="80%" />
    </>
  );

  const renderText = () => (
    <Typography variant="body2" color="text.secondary" component="p">
      {text}
    </Typography>
  );

  return isLoading ? renderSceleton() : renderText();
};

export default PostText;
