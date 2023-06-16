import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import GoodsContainer from "./components/GoodsContainer/GoodsContainer";
import './App.css'
import Rules from "./components/Rules/Rules";
import Discounts from "./components/Discounts/Discounts";
function App() {
  return (
    <div className="wrap">
      <Header/>
      <GoodsContainer/>
      <Discounts/>
      <Rules/>
      <Footer/>
 
    </div>
  );
}

export default App;
