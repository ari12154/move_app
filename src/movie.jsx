import React, { useEffect, useState } from "react";
import axios from "axios";
import MainMovie from "./comps/home/MainMovie";
import Carusela from "./comps/home/Carusela";
<<<<<<< HEAD
=======
import Test from "./comps/home/Test";
>>>>>>> 015b1c7a25d44496e59497b7c752128c1281083f

export default function Movie() {
  let [data, setData] = useState();


useEffect(()=>{
    getData();
},[])
  async function getData() {
    const { data } = await axios.get("https://api.tvmaze.com/shows");
    setData(data) ;
  }
  
  return <div>
    <MainMovie data={data} />
    <Carusela data={data} />
<<<<<<< HEAD
=======
    <Test data={data}/>
>>>>>>> 015b1c7a25d44496e59497b7c752128c1281083f
    </div>;
  
}
