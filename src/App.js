import "./App.css";
import { Route, Routes, } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Service from "./components/Service";
import Navbar from "./components/Navbar";
import Addmenu from "./components/Addmenu";


// оборачиваем для того чтобы навбар был на всех страницах
// прописываем маршрут exact для того чтобы указать какая страница главная
// для каждой страницы прописываем маршрут

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}> 
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/addmenu" element={<Addmenu />} />
      </Route>
      
    </Routes>
    
  );
}

export default App;
