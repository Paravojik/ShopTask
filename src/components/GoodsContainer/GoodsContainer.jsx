import React from 'react'
import Goods from '../Goods/Goods';
import './GoodsContainer.css'
const goods = [
  {
    title: "Крісло",
    price: 300,
    img: 'https://constanta.ua/7016-large_default/oxford.jpg',
    color: ['gray', 'black', 'white', 'red'],
    description: 'Найкраще, незламне крісло, яку переживе й тебе',
    amount: 72,
    discount: 'none'
  },
  {
    title: "Стілець",
    price: 320,
    img: 'https://concepto.com.ua/image/catalog/products/pavlyk/01_chairs/diran/diran-01.jpg',
    color: ['gray', 'black', 'white'],
    description: 'Слабенький, поганий, але дороший стілець',
    amount: 2314,
    discount: 25
  },
  {
    title: "Стіл",
    price: 500,
    img: 'https://concepto.com.ua/image/cache/catalog/product-photo/4291/hugo-carrara-white-stol-raskladnoy-keramika-140-200-sm-6-1000x1000.jpg',
    color: ['brown', 'white'],
    description: 'Простий, але стильний стіл для твоєї кімнати',
    amount: 150,
    discount: 'none'
  },
  {
    title: "Лампа",
    price: 80,
    img: 'https://svetilnikof.com.ua/uploads/shop/products/large/85e3eecdb63b638db4150a48bedb9014.jpg',
    color: ['black', 'silver'],
    description: 'Модерна лампа, що надає приємне освітлення',
    amount: 510,
    discount: 10
  },
  {
    title: "Диван",
    price: 900,
    img: 'https://shurup.net.ua/image/cache/data/90/23/4b89de5f9ed07f3da74352048df20a56-750x560.jpg',
    color: ['gray', 'beige'],
    description: 'Зручний диван, ідеальний для розслаблення',
    amount: 25,
    discount: 'none'
  },
  {
    title: "Столик",
    price: 150,
    img: 'https://decorize.com.ua/image/catalog/2022/07.2022/_DSC3853.jpg',
    color: ['oak', 'cherry'],
    description: 'Компактний столик для кави, що виглядає шикарно',
    amount: 320,
    discount: 15
  },
  {
    title: "Шафа",
    price: 700,
    img: 'https://images.prom.ua/2017932990_w640_h640_skladnoj-tkanevyj-shkaf.jpg',
    color: ['white', 'brown'],
    description: 'Велика шафа з великими можливостями для зберігання',
    amount: 60,
    discount: 'none'
  },
  {
    title: "Книжкова полиця",
    price: 200,
    img: 'https://images.prom.ua/3817404687_w600_h600_3817404687.jpg',
    color: ['black', 'wooden'],
    description: 'Полиця для книг, яка додає шарму в інтер\'єр',
    amount: 180,
    discount: 20
  },
  {
    title: "Комод",
    price: 400,
    img: 'https://stulchik.com.ua/image/cache/data/product/peh_komodk5eko_taho-700x700.jpg',
    color: ['brown', 'black'],
    description: 'Комод з багатьма шухлядами для зберігання речей',
    amount: 40,
    discount: 'none'
  },
  {
    title: "Тумба під телевізор",
    price: 250,
    img: 'https://tahta.com.ua/files/resized/products/miya.1800x1800w.jpg',
    color: ['black', 'white'],
    description: 'Стильна тумба для телевізора з місцем для електроніки',
    amount: 120,
    discount: 'none'
  }
];export default function GoodsContainer() {
  return (
     <section className="Discounts" id='GoodsContainer'>
             <h5 className='Discounts__text'>Товари</h5>
      <div className="Discounts__main">
      {goods.map(item => <Goods value={item} key={item.title} />)}
      </div>
  
      </section>
  )
}
