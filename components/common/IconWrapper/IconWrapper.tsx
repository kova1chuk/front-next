import React, { ReactNode } from 'react';

import { Box, Skeleton } from '@mui/material';

import abbreviateNumber from '../../../lib/abbreviateNumber';

interface IProps {
  isLoading: boolean;
  value: number;
  children: ReactNode;
}

// TODO: add styled

const IconWrapper: React.FC<IProps> = props => {
  const { isLoading, children, value } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0.5,
        m: 0,
      }}
      component="div"
    >
      {children}
      {isLoading ? (
        <Skeleton
          animation="wave"
          height="0.8rem"
          width="100%"
          sx={{
            marginTop: '0.2rem',
          }}
        />
      ) : (
        <Box
          sx={{
            color: 'rgba(0, 0, 0, 0.6)',
            fontSize: '0.6rem',
            marginTop: '0.2rem',
            padding: 0,
            height: 16,
          }}
          component="p"
        >
          {value < 1000 ? value : abbreviateNumber(value)}
        </Box>
      )}
    </Box>
  );
};

export default IconWrapper;
