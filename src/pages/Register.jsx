import { useState } from "react";
import { register } from "../services/auth";
import { useNavigate } from "react-router-dom";


// Register
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await register(email,password);
            navigate("/");
        }catch(error) {
            alert(error.message);
        }
    };

    return(
         <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
    );
};

export default Register;