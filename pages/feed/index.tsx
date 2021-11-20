import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter, withRouter } from 'next/router';
import useSWR from 'swr';

import ChipsHathtagsArray from '../../components/common/ChipsArray/ChipsHathtagsArray';
import MediaGrid from '../../components/common/MediaGrid/MediaGrid';
import tiktokFetch from '../../lib/api/tiktok/feed';

const Feed = (props: any) => {
  const router = useRouter();
  // ----------- fetch feed ===========================
  const FETCH_FEED_URL =
    'https://tiktok33.p.rapidapi.com/trending/feed?limit=100';
  const url = router.query.tag
    ? `https://tiktok33.p.rapidapi.com/hashtag/feed/${
        router.query.tag as string
      }`
    : FETCH_FEED_URL;

  const { data, error } = useSWR(url, tiktokFetch);
  // ----------- fetch feed ===========================

  console.log(data);

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
        <ChipsHathtagsArray />
        <MediaGrid
          posts={
            data &&
            data.slice(
              0 + (parseInt(props.router.query.page || 1) - 1) * 30,
              0 + parseInt(props.router.query.page || 1) * 30,
            )
          }
          isLoading={!data}
          loadingCount={6}
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

export default withRouter(Feed);
