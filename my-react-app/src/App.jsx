import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home.jsx';
import Sidebar from './pages/sidebar.jsx';


function App() {
 return (
  
   <BrowserRouter>


   <div className="router">
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />     
      </Routes>
   </div>

   
   </BrowserRouter>
 );
}
export default App
