import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home.jsx';
import AddStudent from './pages/AddStudent.jsx';
import Sidebar from './pages/sidebar.jsx';
import ViewStudent from './pages/ViewStudent.jsx';
import DeleteStudent from './pages/DeleteStudent.jsx';



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
          <Route path="/add-student" element={<AddStudent /> } />
          <Route path="/view-students" element={<ViewStudent />} />
          <Route path="/delete-students" element={<DeleteStudent />} />
        </Routes>
      </div> 
    </div>
  </BrowserRouter>
 );
}


export default App
