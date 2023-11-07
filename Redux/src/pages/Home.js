import { Feed } from "../component/index";
import { useStoreState } from "easy-peasy";

const Home = ({ fetchError, isLoading }) => {
  const searchResults = useStoreState((actions) => actions.searchResults);
  return (
    // {/* {posts.length ? (
    //   <Feed posts={posts}/>
    // ) : (
    //   <p style={{marginTop: "2rem"}}>Notting To Display</p>
    // )} */},
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading Post...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No post to display</p>
        ))}
    </main>
  );
};

export default Home;
