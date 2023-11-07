import { createStore, action, thunk, computed } from "easy-peasy"; 
import Api from "./Api/Posts";

export default createStore({
    posts: [],
    setPosts: action((state, payLoad) => {
        state.posts = payLoad;
    }),
    postTitle: "",
    setPostTitle: action((state, payload) => {
        state.postTitle = payload;
    }),
    postBody: "",
    setPostBody: action((state, payload) => {
        state.postBody = payload;
    }),
    editTitle: "",
    setEditTitle: action((state, payload) => {
        state.editTitle = payload;
    }),
    editBody: "",
    setEditBody: action((state, payload) => {
        state.editBody = payload;
    }),
    search: "",
    setSearch: action((state, payload) => {
        state.search = payload;
    }),
    searchResults: [],
    setSearchResults: action((state, payload) => {
        state.searchResults = payload;
    }),
    setPostCount: computed((state) => state.posts.length),
    setPostId: computed((id, posts) => {
        return posts.find((post) => post.id.toString() === id);
    }),
    savePost: thunk(async (actions, newPost, helpers) => {
        const {posts} = helpers.getState()
    })
})