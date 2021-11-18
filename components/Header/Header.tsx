import React, { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';

import { getIp } from '../../lib/api/ip';

// TODO

const Header = () => {
  const [ip, setIp] = useState<string>();

  useEffect(() => {
    getIp<{ ip: string }>()
      .then(data => setIp(data.ip))
      .catch(error => console.error(`IP request was errored: ${error}`));
  }, []);

  return <AppBar position="static">{ip && <h1>{ip}</h1>}</AppBar>;
};

export default Header;
