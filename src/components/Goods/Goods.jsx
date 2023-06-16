import React from 'react'
import './Goods.css'
export default function Goods(props) {
  return (
    <div className='goodsItem'>
      <img className='goodsItem__img' src={props.value.img}alt={props.value.title} />
      <div className="goodsItem__top"> 
      <h3>{props.value.title}</h3>
      <p>
      <h4>{props.value.price} грн</h4>
      <h6>{props.value.discount!=='none'?props.value.discount+'%':null }</h6>
      </p>
    </div>
    <div className="goodsItem__description">
    <h5>
    {props.value.description}
    </h5>
    </div>
    <div className="goodsItem__bottom">
      <div className="goodsItem__bottom__colors">
        {props.value.color.map(item=>{
          return(
            <div className="goodsItem__bottom__colors__color" style={{backgroundColor:item}}></div>
          )
        })}
      </div>
      <div className="goodsItem__bottom__amount">Amount: <h2>{props.value.amount}</h2></div>
    </div>
       
    </div>
  )
}
