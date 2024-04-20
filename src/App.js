import "./App.css";
import { Route, Routes, } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Service from "./components/Service";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route exact path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        
      </Route>
    </Routes>
  );
}

export default App;
