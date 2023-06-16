import React from 'react'
import Goods from './Goods';
const goods = [
  { title: "Крісло", price: 300,img:'https://constanta.ua/7016-large_default/oxford.jpg',color:['сірий','чорний','білий','червоний'],description:'Найкраще, незламне крісло, яку переживе й тебе',amount:72,discount:'none'},
  { title: "Стілець", price: 320,img:'https://concepto.com.ua/image/catalog/products/pavlyk/01_chairs/diran/diran-01.jpg',color:['сірий','чорний','білий'],description:'Слабенький, поганий, але дороший стілець',amount:2314,discount:25}];
export default function GoodsContainer() {
  return (
     <div className="GoodsContainer">
        {goods.map(item => <Goods key={item.title} title={item.title} />)}
      </div>
  )
}
