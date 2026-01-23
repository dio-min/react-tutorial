import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home.jsx';
import Sidebar from './pages/Sidebar.jsx';
import Student from './pages/Student.jsx';
import Teacher from './pages/Teacher.jsx';
import Classes from './pages/Classes.jsx';




function App() {
 return (
  <BrowserRouter>
    <div className="router">
      <div className="divider">
        <Sidebar />
      </div>
      <div className="divider1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student /> } />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </div> 
      
    </div>
  </BrowserRouter>
 );
}


export default App
