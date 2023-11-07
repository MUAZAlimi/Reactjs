import  Feed  from "./Feed";

const Home = ({fetchError, isLoading}) => {
  return (
      // {/* {posts.length ? (
      //   <Feed posts={posts}/>
      // ) : (
      //   <p style={{marginTop: "2rem"}}>Notting To Display</p>
      // )} */},
    <main className='Home'>
      {isLoading && <p className="statusMsg">Loading Post...</p>}
      {!isLoading && fetchError && <p className="statusMsg" style={{color: 'red'}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ?  <Feed  posts = {searchResults}/> : <p className="statusMsg">No post to display</p>)}
    </main>
  )
}

export default Home
