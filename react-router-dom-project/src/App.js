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

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Rocco",
      date: "July 01, 2021 11:12:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque quo, neque quas quaerat vel perspiciatis! Dolorum, consectetur! Veniam doloremque quidem quam recusandae beatae sint.",
    },
    {
      id: 2,
      title: "Kanas",
      date: "June 19, 2021 12:12:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolore! Maxime itaque voluptas commodi voluptatum quam non, veniam quae incidunt, veritatis amet vitae adipisci inventore.",
    },
    {
      id: 3,
      title: "Muhammad",
      date: "September 21, 2026 12:19:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis laudantium architecto quis harum nobis ut reiciendis recusandae illo nostrum impedit labore earum, omnis non?",
    },
    {
      id: 4,
      title: "Muaz",
      date: "August 03, 2025 13:34:50 PM",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit enim distinctio asperiores, magnam maiores quaerat consectetur voluptatem vel dolores ipsum sed. Illum, aut quo?",
    },
  ]);
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