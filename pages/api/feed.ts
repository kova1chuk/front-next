import tiktokFetch from "../../lib/api/tiktok/feed";
// TODO
const feed = async (req, res) => {
  //   const { username } = await req.body;
  const url = "https://tiktok33.p.rapidapi.com/trending/feed";

  try {
    // we check that the user exists on GitHub and store some data in session
    const { data: feed } = await tiktokFetch(url);
    // const user: User = { isLoggedIn: true, username: login, avatarUrl };

    // req.session.set("user", user);

    // await req.session.save();
    res.json(feed);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
};

export default feed;
