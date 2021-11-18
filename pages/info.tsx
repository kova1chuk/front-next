import { useState } from 'react';

import TagFacesIcon from '@mui/icons-material/TagFaces';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import { withRouter } from 'next/router';

// import CssBaseline from '@mui/material/CssBaseline';

// import Avatar from '@mui/material/Avatar';
import feed from '../data/feed.json';

// TODO
interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export function ChipsArray() {
  const [chipData, setChipData] = useState<readonly ChipData[]>([
    { key: 0, label: 'Feed' },
    { key: 1, label: '#jQuery' },
    { key: 2, label: '#Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
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

        if (data.label === 'Feed') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'Feed' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Box>
  );
}

const Feed = () => {
  return <></>;
};

Feed.getInitialProps = async ({ query }: any) => {
  const page = query.page || 1; //if page empty we request the first page

  return {
    totalCount: feed.length,
    pageCount: 10,
    currentPage: page,
    perPage: 10,
    posts: feed,
  };
};

export default withRouter(Feed);
