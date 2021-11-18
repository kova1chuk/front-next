import React from 'react';

import { Box, Skeleton } from '@mui/material';
import { useRouter } from 'next/router';

import { ITag } from '../../interfaces';

interface IProps {
  isLoading: boolean;
  hashtags: ITag[];
}

const Hashtags: React.FC<IProps> = props => {
  const { isLoading, hashtags } = props;

  const router = useRouter();

  const onClick = (tag: ITag) => {
    // setSelectedTag(tag);
    router.push({ pathname: router.pathname, query: { tag: tag.name } });
  };

  const renderSceleton = () => <Skeleton animation="wave" height={10} />;

  const renderHashtags = () =>
    hashtags && hashtags.length ? (
      <>
        {hashtags.map((item: ITag) => (
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
            onClick={() => onClick(item)}
          >
            #{item.name}
          </Box>
        ))}
      </>
    ) : null;

  return isLoading ? renderSceleton() : renderHashtags();
};

export default Hashtags;
