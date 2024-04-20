
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";



function App() {
  return (
    
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
    </Routes>
      
    
    
    
  );
}

export default App;
