import React from 'react';

import { Box, Skeleton } from '@mui/material';

interface IProps {
  isLoading: boolean;
  hashtags: { id: string; name: string }[];
}

const Hashtags: React.FC<IProps> = props => {
  const { isLoading, hashtags } = props;

  const renderSceleton = () => <Skeleton animation="wave" height={10} />;

  const renderHashtags = () =>
    hashtags && hashtags.length ? (
      <>
        {hashtags.map(item => (
          <Box
            sx={{
              fontSize: '0.8rem',
              margin: '0.05rem',
              marginRight: '0.1rem',
              padding: 0,
              height: 16,
              color: 'blue',
              cursor: 'pointer',
              display: 'inline-block',
              ':hover': {
                color: 'black',
              },
            }}
            component="p"
            key={item.id}
          >
            #{item.name}
          </Box>
        ))}
      </>
    ) : null;

  return isLoading ? renderSceleton() : renderHashtags();
};

export default Hashtags;
