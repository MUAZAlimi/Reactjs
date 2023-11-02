import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import About from "./About";
import HomeLayout from "./HomeLayout";

const App = () => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postLists = posts.filter((post) => post.id !== id);
    setPosts(postLists);
    navigate("/");
  };

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, date, body: postBody };
    const allPost = [...posts, newPost]
    setPosts(allPost);
    setPostTitle('');
    setPostBody('')
    navigate('/')
  };

  useEffect(() => {
    const filterResult = posts.filter(post => post.body.toLowerCase().includes(search.toLowerCase()) 
    || 
    post.title.toLowerCase().includes(search.toLowerCase()))

    setSearchResult(filterResult.reverse());
  }, [posts, search])

  return (
    <Routes>
      <Route path="" element={<HomeLayout search={search} setSearch={setSearch} />}>
        <Route index element={<Home posts={searchResult} />} />
        <Route path="/post">
          <Route
            index
            element={
              <NewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handleSumit={handleSubmit}
              />
            }
          />
          <Route
            path=":id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;