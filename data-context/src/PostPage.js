import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import Api from "./Api/Posts";

const PostPage = () => {

  const { posts, setPosts } = useContext(DataContext)
  const navigate = useNavigate()

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

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2 className="postTitle">{post.title}</h2>
            <p className="postDate">{post.date}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button className="deleteButton" onClick={() => handleDelete(post.id)}>Delete</button>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;