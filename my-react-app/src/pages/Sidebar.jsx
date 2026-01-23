import "./sidebar.css";
import { Link } from "react-router-dom";


function Sidebar(){
    return(
        <>
            <Link to="/"><img src="/logo.png" /></Link>  
            <ul className="sidebar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/student">Student</Link></li>
                <li><Link to="/teacher">Teacher</Link></li>
                <li><Link to="/classes">Classes</Link></li>
            </ul>
            
        </>
    );
}

export default Sidebar