import './BurgerPoup.css'
export default function BurgerPoup(props){
    return(
        <div className="BurgerPoup" style={props.visible? {transform:'translateY(0)'}:{transform:'translateY(-150vh)'}}>
                    <nav>
       
       <ul>
       <li ><a onClick={props.BurgerClick} href="#presentationContainer">Головна </a> </li>
                    <li > <a onClick={props.BurgerClick} href='#GoodsContainer'>Товар</a></li>
                    <li > <a onClick={props.BurgerClick} href='#DiscountsContainer'>Акції</a></li>
                    <li > <a onClick={props.BurgerClick} href='#RulesContainer'>Правила</a></li>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
           
       </ul>
</nav>    
        </div>
    )
}