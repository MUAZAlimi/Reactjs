import React, { useState } from "react";
import { Routes, Route, useNegative } from "react-router-dom";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import About from "./About";
import HomeLayout from "./HomeLayout";
// import  Layout from "./Layout";

const App = () => {
  const [search, setSearch] = useState("");
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
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nihil quidem doloremque nisi suscipit quas omnis esse accusantium architecto, nemo voluptates, debitis voluptatum delectus voluptas a id hic. Voluptates atque sint corrupti laborum voluptatum tempora ipsum eveniet nobis officiis quia! Laboriosam tenetur maxime vitae aspernatur ea asperiores ab quo corrupti obcaecati accusamus maiores adipisci hic nostrum molestiae veritatis laborum alias dolorem molestias necessitatibus mollitia, exercitationem id voluptatibus beatae. Incidunt atque maxime rem impedit eius esse quos quidem placeat, voluptate optio!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nihil quidem doloremque nisi suscipit quas omnis esse accusantium architecto, nemo voluptates, debitis voluptatum delectus voluptas a id hic. Voluptates atque sint corrupti laborum voluptatum tempora ipsum eveniet nobis officiis quia! Laboriosam tenetur maxime vitae aspernatur ea asperiores ab quo corrupti obcaecati accusamus maiores adipisci hic nostrum molestiae veritatis laborum alias dolorem molestias necessitatibus mollitia, exercitationem id voluptatibus beatae. Incidunt atque maxime rem impedit eius esse quos quidem placeat, voluptate optio!",
    },
  ]);
  const [searchResult, setSearchResult] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home posts={posts}/>} />
        <Route path="/post" element={<NewPost />} >
        <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
