import React, { useState } from 'react';

import TagFacesIcon from '@mui/icons-material/TagFaces';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import router, { withRouter } from 'next/router';
import useSWR from 'swr';

import MediaGrid from '../../components/common/MediaGrid/MediaGrid';
import feed from '../../data/feed.json';
import tiktokFetch from '../../lib/api/tiktok/feed';

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
// TODO
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

const Feed = (props: any) => {
  const FETCH_FEED_URL =
    'https://tiktok33.p.rapidapi.com/trending/feed?limit=100';
  const { data, error } = useSWR(FETCH_FEED_URL, tiktokFetch);

  const pagginationHandler = (page: number) => {
    const currentPath = props.router.pathname;
    const currentQuery = props.router.query;
    currentQuery.page = page;

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  if (error) router.push('/404');

  return (
    <Box sx={{ pb: 7 }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <ChipsArray />
        <MediaGrid
          posts={
            data &&
            data.slice(
              0 + (parseInt(props.router.query.page || 1) - 1) * 30,
              0 + parseInt(props.router.query.page || 1) * 30,
            )
          }
          isLoading={!data}
        />
        <Stack spacing={2}>
          {data && data.length > 30 && (
            <Pagination
              count={Math.ceil(data.length / 30)}
              page={parseInt(props.router.query.page || 1)}
              onChange={(_, page) => pagginationHandler(page)}
            />
          )}
        </Stack>
        <Box sx={{ m: 2 }} />
      </Grid>
    </Box>
  );
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
