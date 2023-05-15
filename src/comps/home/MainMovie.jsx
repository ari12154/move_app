import React, { useState } from "react";
import "./MainMovie.css";
import Nav from "./Nav";
import Carusela from "./Carusela";
import { AiOutlinePlayCircle, AiOutlineInfoCircle } from "react-icons/ai";
import Info from "../info/Info";
// import {BrowserRouter as router, Route,Switch,Link, Router} from 'react-router-dom'

export default function MainMovie(props) {
  let img = props?.data?.[props.j]?.image?.original;
  // let img1 = props.data;
  // let summary = props?.data?.[props.i]?.summary;
  const [over, setOver] = useState(false);
  

  let list_ar = [];
  // list_ar.push(7)
  // console.log(list_ar);
  function changeInfo() {
    setOver(!over);
  }

  return (
    <div className="main_all">
      <Nav />
      <img src={img} className="img_all" />
      <div className="btn_div_watch">
        <button
          className="btn_watch"
          onClick={() => {
            list_ar.push(props.j);
          }}
        >
          <AiOutlinePlayCircle /> WATCH
        </button>
      </div>
<<<<<<< HEAD
     
<<<<<<< HEAD
      {console.log(i)}
=======
      {/* {console.log(i)} */}
      {/* <Carusela/> */}
>>>>>>> 015b1c7a25d44496e59497b7c752128c1281083f
=======

      <div className="btn_div_info">
        <button className="btn_info" onClick={changeInfo}>
          <AiOutlineInfoCircle /> INFO
        </button>
      </div>

      <div className="info_class" style={{ display: over ? "block" : "none" }}>
        <Info i={props.i} />
      </div>
      {/* <Carusela  changI={changI} /> */}
>>>>>>> ca2cdc45dc82d08259e5e21e470c8473b616eb2c
    </div>
  );
}
