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
import "./carusela.css";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Carusela(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  const [i, setI] = useState(0);
  let img = props?.data?.[i]?.image?.original;
  let img1 = props?.data?.[i + 1]?.image?.original;
  let img2 = props?.data?.[i + 2]?.image?.original;
  // console.log(props.data);
  return (
    <div className="bg_carusela" >
    <Slider {...settings}>
      {props.data?.map((e) => 
        <div className="item_carusela" key={e.id}>
        <img src={e.image.medium} alt="" />
      </div>
      )}
     
    </Slider>
    </div>
  );
>>>>>>> 015b1c7a25d44496e59497b7c752128c1281083f
}
