import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav style={{display:"flex",gap:"20px", padding: "10px", background: "#f5f5f5"}}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    );
};


export default Navbar;
