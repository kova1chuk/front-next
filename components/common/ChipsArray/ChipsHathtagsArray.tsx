import React from 'react';

import TagFacesIcon from '@mui/icons-material/TagFaces';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';

interface ChipData {
  key: number;
  label: string;
  id?: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ChipsHathtagsArray: React.FC = () => {
  const router = useRouter();

  const chipData: ChipData[] = [
    { key: 0, label: 'Feed' },
    { key: 1, label: router.query.tag as string },
  ];

  const handleDelete = () => () => {
    router.push({
      pathname: router.pathname,
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        mt: 5.5,
        mb: 2,
      }}
      component="ul"
    >
      {chipData.map(data => {
        let icon;

        if (!data.label) return;

        if (data.label === 'Feed') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'Feed' ? undefined : handleDelete()}
            />
          </ListItem>
        );
      })}
    </Box>
  );
};

export default ChipsHathtagsArray;
