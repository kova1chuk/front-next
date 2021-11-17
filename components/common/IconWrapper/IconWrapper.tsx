import React, { ReactNode } from 'react';

import { Box } from '@mui/system';

interface IProps {
  value: number;
  children: ReactNode;
}

// TODO: add styled

const IconWrapper: React.FC<IProps> = props => {
  const { children, value } = props;

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
      <Box sx={{ color: 'blue' }} component="p">
        {value}
      </Box>
    </Box>
  );
};

export default IconWrapper;
