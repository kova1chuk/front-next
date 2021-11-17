import useSWR from 'swr';

interface IFeedItem {
  id: string;
  secretID: string;
  text: string;
  createTime: number;
  authorMeta: {
    id: string;
    secUid: string;
    name: string;
    nickName: string;
    verified: boolean;
    signature: string;
    avatar: string;
    following: number;
    fans: number;
    heart: number;
    video: number;
    digg: number;
  };
  musicMeta: {
    musicId: string;
    musicName: string;
    musicAuthor: string;
    musicOriginal: boolean;
    musicAlbum: string;
    playUrl: string;
    coverMedium: string;
    coverLarge: string;
    duration: number;
  };
  covers: {
    default: string;
    origin: string;
    dynamic: string;
  };
  webVideoUrl: string;
  videoUrl: string;
  videoUrlNoWaterMark: string;
  videoApiUrlNoWaterMark: string;
  videoMeta: {
    height: number;
    width: number;
    duration: number;
  };
  diggCount: number;
  shareCount: number;
  playCount: number;
  commentCount: number;
  downloaded: boolean;
  mentions: string[];
  hashtags: [
    {
      id: string;
      name: string;
      title: string;
      cover: string;
    }[],
  ];
  effectStickers: {
    id: string;
    name: string;
  }[];
}

// TODO

export function useUser() {
  const { data: feed, mutate: mutateFeed, error } = useSWR<IFeedItem>('/api/feed');

  const isLoading = !feed && !error;

  return { user: feed as IFeedItem, mutateFeed, isLoading };
}

// interface HttpResponse<T> extends Response {
//   parsedBody?: T;
// }

const tiktokFetch = (url: string) =>
  fetch(url, {
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
    },
  }).then(res => res.json());

export default tiktokFetch;
