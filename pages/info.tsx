import { useState, useEffect } from 'react';

import ArchiveIcon from '@mui/icons-material/Archive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestoreIcon from '@mui/icons-material/Restore';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Router, { withRouter } from 'next/router';

// import CssBaseline from '@mui/material/CssBaseline';

// import Avatar from '@mui/material/Avatar';
import { MediaCard } from '../components/MediaCard';
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

const Feed = (props: any) => {
  const [isLoading, setLoading] = useState(false); //State for the loading indicator
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    //After the component is mounted set router event handlers
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    };
  }, []);

  const pagginationHandler = (page: number) => {
    const currentPath = props.router.pathname;
    const currentQuery = props.router.query;
    currentQuery.page = page;

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

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
        <Grid
          container
          justifyContent="center"
          //   spacing={{ xs: 1, md: 1 }}
          spacing={0}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {feed
            .slice(
              0 + (parseInt(props.router.query.page || 1) - 1) * 10,
              0 + parseInt(props.router.query.page || 1) * 10,
            )
            .map(item => (
              <Grid
                key={item.id}
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="start"
              >
                <MediaCard
                  loading={isLoading}
                  key={item.id}
                  createTime={item.createTime}
                  authorMeta={{
                    id: item.authorMeta.id,
                    nickName: item.authorMeta.nickName,
                    avatar: item.authorMeta.avatar,
                  }}
                  hashtags={item.hashtags}
                  cover={item.covers.origin}
                  webVideoUrl={item.webVideoUrl}
                  text={item.text}
                  diggCount={item.diggCount}
                  shareCount={item.shareCount}
                  commentCount={item.commentCount}
                />
              </Grid>
            ))}
        </Grid>
        <Stack spacing={2}>
          <Pagination
            count={10}
            page={parseInt(props.router.query.page || 1)}
            onChange={(_, page) => pagginationHandler(page)}
          />
        </Stack>
        <Box sx={{ m: 2 }} />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            //   value={value}
            //   onChange={(event, newValue) => {
            //     setValue(newValue);
            //   }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>
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
