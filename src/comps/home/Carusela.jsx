<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react'
import './carusela.css'
import  {MdArrowBackIosNew}  from'react-icons/md'


export default function Carusela(props) {
    const [i, setI] = useState(0)
    let img = props?.data?.[i]?.image?.original;
    console.log(props.data);
    return (
        <div >
            <div className='main_car'>
                <img className='item_carusela' src={img} alt="" />
                <img className='item_carusela' src={img} alt="" />
                <img className='item_carusela' src={img} alt="" />
                <img className='item_carusela' src={img} alt="" />
                <img className='item_carusela' src={img} alt="" />
                <img className='item_carusela' src={img} alt="" />
                <img className='item_carusela' src={img} alt="" />
                <img className='item_carusela' src={img} alt="" />
            </div>
        </div>
    )
=======
import React, { useState } from "react";
=======
import React, { useContext, useState } from "react";
>>>>>>> ca2cdc45dc82d08259e5e21e470c8473b616eb2c
import "./carusela.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import MainMovie from "./MainMovie";
import Slider from "react-slick";
import { APIContext } from "../../movie";

export default function Carusela(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  // const [i, setI] = useState(0);
  // const data = useContext(APIContext);
  function bg_main() {}
// console.log(props.data);
  return (
    <div className="main_slider">
      <div className="main_slider_tow">
        <div className="sliderA">
          <p className="category">nnnn</p>
          <Slider {...settings}>
            {props.data?.map((e,i) => (
              <div className="item_carusela " key={e.id}>
                <button
                  onClick={() => {
                    props.changI(e.id);
                    props.changeJ(i);
                    console.log(e.id);
                    console.log(i);
                    
                  }}
                >
                  <img src={e.image.medium} alt="" height="250px" />
                </button>
              </div>
            ))}
          </Slider>
        </div>
        <div className="sliderB">
          <p className="category">nnnn</p>
          <Slider {...settings}>
            {props.data?.map((e,i) => (
              <div className="item_carusela" key={e.id}>
                <button
                  onClick={() => {
                    props.changI(e.id);
                    
                  }}
                >
                  <img src={e.image.medium} alt="" height="250px" />
                </button>
              </div>
            ))}
          </Slider>
        </div>
        <div className="sliderC">
          <p className="category">nnnn</p>
          <Slider {...settings}>
            {props.data?.map((e,i) => (
              <div className="item_carusela" key={e.id}>
                <button
                  onClick={() => {
                    props.changI(i);
                    
                  }}
                >
                  <img src={e.image.medium} alt="" height="250px" />
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
>>>>>>> 015b1c7a25d44496e59497b7c752128c1281083f
}
