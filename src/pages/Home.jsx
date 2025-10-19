import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

// Home
const Home = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = async() => {
        await logout();
        navigate("/login");
    };
    return(
        <div>
            <h1>Welcome,{currentUser?.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home;