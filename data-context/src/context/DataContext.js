import { createContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";
import Api from "../Api/Posts";

const DataContext = createContext({}) 
    
export const DataProvider = ({children}) => {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const { width } = useWindowSize();
    const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts')
    useEffect(() => {
      setPosts(data)
    }, [data])
  
    
  
    useEffect(() => {
      const filterResult = posts.filter(
        (post) =>
          post.body.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLowerCase())
      );
  
      setSearchResult(filterResult.reverse());
    }, [posts, search]);

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
          await Api.delete(`/posts/${id}`);
          const postLists = posts.filter((post) => post.id !== id);
          setPosts(postLists);
          navigate("/");
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const date = format(new Date(), "MMMM dd, yyyy pp");
        const newPost = { id, title: postTitle, date, body: postBody };
        try {
          const response = await Api.post("/posts", newPost);
          const allPost = [...posts, response.data];
          setPosts(allPost);
          setPostTitle("");
          setPostBody("");
          navigate("/");
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      };
      
    
      const handleEdit = async (id) => {
        const date = format(new Date(), "MMMM dd, yyyy pp");
        const updatedPost = { id, title: editTitle, date, body: editBody };
        try {
          const response = await Api.put(`/posts/${id}`, updatedPost);
          setPosts(
            posts.map((post) => (post.id === id ? { ...response.data } : post))
          );
          setEditTitle("");
          setEditBody("");
          navigate("/");
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      };
    return (
        <DataContext.Provider value={{
            width,search,setSearch, // header and nav
            posts, fetchError, isLoading, searchResult, // home
            postTitle, setPostTitle, postBody, setPostBody, handleSubmit, // newpost
            handleDelete,  //postPage
            setEditBody, editBody, setEditTitle, editTitle, handleEdit, //editPost
        }}>
            {children}
        </DataContext.Provider> 
    )
}

export default DataContext