import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  return( 
    <main className="PostPage">
      <article className="post">
          {post && <>
            
          </>}
      </article>
    </main>
  )
};

export default PostPage;