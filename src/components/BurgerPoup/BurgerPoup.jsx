import './BurgerPoup.css'
export default function BurgerPoup(props){
    return(
        <div className="BurgerPoup" style={props.visible? {transform:'translateY(0)'}:{transform:'translateY(-150vh)'}}>
                    <nav>
       
       <ul>
       <li>Головна</li>
           <li>Товар</li>
           <li>Акції</li>
           <li>Правила</li>
           <li>Про нас</li>
           <li>Контакти</li>
           <li>Кабінет</li>
           
       </ul>
</nav>    
        </div>
    )
}