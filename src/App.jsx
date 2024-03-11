import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import HorizontalScroll from "./components/HorizontalScroll";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Footer from "./components/Footer";
const App =() =>{
return(
  <>
  <div className="black-box"><div className="fade-line"><p>this page is free SaaS Website Kit.</p></div> <div className="bold-line"><b>View the complete Kit</b><img src="/Arrow-b.svg" alt="" /></div></div>
  <Navbar/>
    <Hero/>
    <HorizontalScroll/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Footer/>
  </>

)
}
export default App;