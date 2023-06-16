import Header from "./components/Header";
import Footer from "./components/Footer";
import GoodsContainer from "./components/GoodsContainer/GoodsContainer";
import './App.css'
function App() {
  return (
    <div className="wrap">
      <Header/>
      <GoodsContainer/>
      <Footer/>
 
    </div>
  );
}

export default App;
