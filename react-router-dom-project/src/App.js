import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import About from "./About";
import HomeLayout from "./HomeLayout";
// import  Layout from "./Layout";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Rocco",
      date: "July 10, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatem fugiat quia aperiam voluptatum dignissimos dolorem, illum praesentium asperiores vel a beatae voluptatibus eos sed.",
    },
    {
      id: 2,
      title: "Kanas",
      date: "June 19, 2021 12:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iusto incidunt iure similique? Ullam porro eum odit earum reiciendis officiis, unde, praesentium hic doloremque, fugiat velit quam. Placeat laboriosam cumque facilis corrupti quasi ullam assumenda?",
    },
    {
      id: 3,
      title: "Mohammed",
      date: "March 11, 2021 02:17:36 PM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatem fugiat quia aperiam voluptatum dignissimos dolorem, illum praesentium asperiores vel a beatae voluptatibus eos sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iusto incidunt iure similique? Ullam porro eum odit earum reiciendis officiis, unde, praesentium hic doloremque, fugiat velit quam. Placeat laboriosam cumque facilis corrupti quasi ullam assumenda?",
    },
    {
      id: 4,
      title: "Muaz",
      date: "September 22, 2021 10:17:36 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nihil quidem doloremque nisi suscipit quas omnis esse accusantium architecto, nemo voluptates, debitis voluptatum delectus voluptas a id hic. Voluptates atque sint corrupti laborum voluptatum tempora ipsum eveniet nobis officiis quia! Laboriosam tenetur maxime vitae aspernatur ea asperiores ab quo corrupti obcaecati accusamus maiores adipisci hic nostrum molestiae veritatis laborum alias dolorem molestias necessitatibus mollitia, exercitationem id voluptatibus beatae. Incidunt atque maxime rem impedit eius esse quos quidem placeat, voluptate optio!",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    const filterResult = posts.filter(post =>
        post.body.toLowerCase().includes(search.toLowerCase())
        ||
        post.title.toLowerCase().includes(search.toLowerCase()))
        setSearchResult(filterResult.reverse());
  }, [posts, search]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postList = posts.filter(post => post.id !== id);
    setPosts(postList);
    navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), "MMMM dd yyyy pp");
    const newPost = { id, title: postTitle, date, body: postBody };
    const allPost = [...posts, newPost];
    setPosts(allPost);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<HomeLayout  search={search} setSearch={setSearch}/>}>
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
                handleSubmit={handleSubmit}
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
