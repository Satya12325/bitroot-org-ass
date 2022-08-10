import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import {useState,useEffect} from "react";
import CircularProgress from '@mui/material/CircularProgress';
function App() {
    const [data,setData] = useState([]);
    const [load,setLoad,setState] = useState(false)
  const getData = async () =>{
    setLoad(true)
    try{
      const data = await fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts");
      const res = await data.json();
      console.log(res);
      setData(res);
      setLoad(false)
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, [])
  if(load){
    return <div className="load"><div className="flex">
    <div className ="spinner">
    </div>
    ...Looding
    </div></div>
  }
  return (
    <div className="App">
      {
        data?.map((item)=>(
          <Cards
          key={item.id}
          large={item.thumbnail.large}
          title={item.title}
          content={item.content}
          name={item.author.name}
          role={item.author.role}
          avatar={item.author.avatar}
          />
         
        ))
      }
    </div>
  );
}

export default App;
