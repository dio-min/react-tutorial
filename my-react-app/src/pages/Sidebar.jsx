import "./sidebar.css";
import { Link } from "react-router-dom";


function Sidebar(){
    return(
        <>
            <Link to="/"><img src="/logo.png" /></Link>  
            <ul className="sidebar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-student">Add Student</Link></li>
                <li><Link to="/view-students">View Students</Link></li>
                <li><Link to="/delete-students">Delete Students</Link></li>
            </ul>
            
        </>
    );
}

export default Sidebar