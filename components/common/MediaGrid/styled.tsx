import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const PostsWrapper = styled(props => (
  <Grid {...props} container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }} />
))`
  justify-content: center;
`;

export default PostsWrapper;
