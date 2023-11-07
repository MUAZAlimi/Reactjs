import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NewPost from "./NewPost";
import Missing from "./Missing";
import PostPage from "./PostPage";
import About from "./About";
import HomeLayout from "./HomeLayout";
import EditPost from "./EditPost";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
