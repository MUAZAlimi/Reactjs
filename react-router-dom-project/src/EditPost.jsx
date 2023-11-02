import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  editTitle,
  setEditTitle,
  setEditBody,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <main className="NewPost">
        {editTitle && 
            <>
      <h2>Edit Post</h2>
      <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle">Edit Title</label>
        <input
          type="text"
          required
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="postBody">Edit Body</label>
        <textarea
          id="postBody"
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        />
        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
      </form>
            </>
        }
        {!editTitle &&
            <>
            <h2>Post not Found!</h2>
            <p>Well, That's disappointing</p>
            <p>
                <Link to='/'>Visit our website</Link>
            </p>
            </>
        }   
    </main>
  );
};

export default EditPost;
