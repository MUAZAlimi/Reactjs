import { createContext, useEffect, useState } from 'react'
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({}) 

export const DataProvider = ({children}) => {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const { width } = useWindowSize();
    const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts')
    useEffect(() => {
      setPosts(data)
    }, [data])
  
    
  
    useEffect(() => {
      const filterResult = posts.filter(
        (post) =>
          post.body.toLowerCase().includes(search.toLowerCase()) ||
          post.title.toLowerCase().includes(search.toLowerCase())
      );
  
      setSearchResult(filterResult.reverse());
    }, [posts, search]);
    
    return (
        <DataContext.Provider value={{
            width,search,setSearch, // header and nav
            posts, fetchError, isLoading, searchResult, setPosts, // home
        }}>
            {children}
        </DataContext.Provider> 
    )
}

export default DataContext