import { createStore, action, thunk } from "easy-peasy";

export default createStore({
  posts: [],
  setPosts: action((state, payload) => {
    state.posts = payload;
  }),
  searchResults: [],
  setSearchResults: action((state, payload) => {
    state.searchResults = payload;
  }),
  deletePost: thunk(async (actions, id, helpers) => {
    const { posts } = helpers.getState();
    try {
      actions.setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }),
});
