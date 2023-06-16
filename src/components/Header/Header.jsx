import React, {  useEffect, useState } from 'react'
import './Header.css'
import BurgerPoup from '../BurgerPoup/BurgerPoup'
export default function Header() {
  let [isOpen,setIsOpen]=useState(false)
  let [arrOfClasses,setArrOfClasses]=useState(['header__burger'])

//   if(window.attachEvent) {
//     window.attachEvent('onresize', function() {
//         alert('attachEvent - resize');
//     });
// }
function changeInnerWidth() {
  console.log('res')
  window.removeEventListener('resize',changeInnerWidth,true )
  setTimeout(function(){
    window.addEventListener('resize',changeInnerWidth , true);
  },1000)
    if(window.innerWidth<=800){
      setIsOpen(false)
      setArrOfClasses(['header__burger'])
 
    }
}
useEffect(function(){
  if(window.addEventListener) {
    window.addEventListener('resize',changeInnerWidth , true);
}
// eslint-disable-next-line
},[])

  function BurgerClick(){
    let copy=[...arrOfClasses]
    if(isOpen===true){
      copy.pop()
      setIsOpen(false)
    }else{
      copy.push('header__burger__active')
      setIsOpen(true)
    }
    setArrOfClasses(copy)
    // (isOpen===true) ?arrOfClasses.pop():arrOfClasses.push('header__burger__active')

    
  }

//   useLayoutEffect(function(){
//     console.log(window.innerWidth)
//     function checkSize(){
//       if(window.innerWidth>=800){
//         setIsOpen(false)
//         setArrOfClasses(['header__burger'])
//       }
//     }

// window.addEventListener('resize', checkSize);
// checkSize();
// return () => window.removeEventListener('resize', checkSize);
//   },[])

  return (
    <div>
         <BurgerPoup BurgerClick={BurgerClick} visible={isOpen}/>
    <header>


        <div>
        
            <span className='logo'>House Staff</span>
        </div>
        <nav className='naxBtns'>
       
                <ul>
                <li ><a href="#presentationContainer">Головна </a> </li>
                    <li > <a href='#GoodsContainer'>Товар</a></li>
                    <li > <a href='#DiscountsContainer'>Акції</a></li>
                    <li > <a href='#RulesContainer'>Правила</a></li>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
                    
                </ul>
        </nav>
        <div className={arrOfClasses.join(' ')} onClick={BurgerClick} >
          <div className="header__burger__row header__burger__row1" ></div>
          <div className="header__burger__row header__burger__row2"></div>
          <div className="header__burger__row header__burger__row3" ></div>
        </div>
  
        
    </header>
 
    <div className="presentation" id='presentationContainer'>
        <h1>Кращі товари для дому</h1>
        <p>за низькими цінами</p>
        <button>Переглянути</button>
    </div>
    </div>
  )
}
