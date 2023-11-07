import { useContext } from "react";
import  Feed  from "./Feed";
import DataContext from "./context/DataContext"

const Home = ({fetchError, isLoading}) => {

  const {searchResult} = useContext(DataContext)
  return (
      // {/* {posts.length ? (
      //   <Feed posts={posts}/>
      // ) : (
      //   <p style={{marginTop: "2rem"}}>Notting To Display</p>
      // )} */},
    <main className='Home'>
      {isLoading && <p className="statusMsg">Loading Post...</p>}
      {!isLoading && fetchError && <p className="statusMsg" style={{color: 'red'}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResult.length ?  <Feed  posts = {searchResult}/> : <p className="statusMsg">No post to display</p>)}
    </main>
  )
}

export default Home
