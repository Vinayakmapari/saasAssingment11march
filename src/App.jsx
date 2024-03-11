import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import HorizontalScroll from "./components/HorizontalScroll";
const App =() =>{
return(
  <>
  <div className="black-box"><div className="fade-line"><p>this page is free SaaS Website Kit.</p></div> <div className="bold-line"><b>View the complete Kit</b><img src="/Arrow-b.svg" alt="" /></div></div>
  <Navbar/>
    <Hero/>
    <HorizontalScroll/>
  </>

)
}
export default App;