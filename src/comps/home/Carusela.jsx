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
}
