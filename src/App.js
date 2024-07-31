
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PostLists from './Posts/postLists';
import PaginateBx from './Posts/paginate';

function App() {

    const [posts , setPosts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [page , setPage] = useState(1);
    const [perPage , setPerPage] = useState(10);

    useEffect(()=>{
      const fetchPosts = async ()=>{
        try{
          setLoading(true)
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
          const data = response.data;
          setPosts(data);
          setLoading(false)

        } 

        catch(err){

          console.log(err);

        }

      }
      fetchPosts();

    },[])

    const endPage = page * perPage;
    const startPage = endPage - perPage;
     const currentPosts = posts.slice(startPage , endPage);

     const onPaginate = (num) => {
      setPage(num);
     }


  return (
    <div className="App">
        <h2 class="animated-heading">Pagination</h2>
            <div>
              <PostLists postData={currentPosts} loading ={loading}/>
              <PaginateBx perPageNum={perPage}  totalPage={posts.length} activePage={page} paginate={onPaginate} />
            </div> 

    </div>
  );
}

export default App;
