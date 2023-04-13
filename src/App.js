 import Navbar from "./Components/Navbar/Navbar";
 import Constants from "./Components/Constants";
 import './App.css'
 import Intro from "./Components/Navbar/Intro/Intro";
 import About from "./Components/About/About";
 import Services from "./Components/Services/Services";
 import Footer from "./Components/Footer/Footer";
 import Contact  from "./Components/Contact/Contact";
  
 function App() {
  return (
    <div className="App">
      
      <Navbar/>
       <Intro/>
       <About/>
       <Services/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
