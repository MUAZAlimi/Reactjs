import { createStore, action, thunk, computed } from "easy-peasy"; 
import Api from "./Api/Posts";

export default createStore({
    posts: [],
    setPosts: action(() => {})
})
