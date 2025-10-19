import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";


// Login
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email,password);
            navigate("/");
        } catch(error) {
            alert(error.message);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;