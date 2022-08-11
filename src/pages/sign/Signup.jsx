import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, PresentationContainer, SignupContainer} from "./style";
import { ThreeDots } from "react-loader-spinner";
import { signup } from "../../services/authService";
import { ToastContainer } from "react-toastify";

export default function Signup() {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        username: "",
        pictureUrl: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        setLoad(true);
        try {
            signup(newUser);
            setLoad(false);
            navigate("/", { replace: true });
        } catch {
            setLoad(false);
        }
    }

    return(
        <Container>
            <ToastContainer />
            <PresentationContainer>
                <h1>linkr</h1>
                <h2>save, share and discover<br/>the best links on the web</h2>
            </PresentationContainer>
            <SignupContainer onSubmit={handleSubmit} load={load} >
                <input type="email" placeholder="e-mail" required disabled={load} value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
                <input type="password" placeholder="password" required disabled={load} value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} />
                <input type="text" placeholder="username" required disabled={load} value={newUser.username} onChange={(e) => setNewUser({...newUser, username: e.target.value})} />
                <input type="url" placeholder="picture url" required disabled={load} value={newUser.pictureUrl} onChange={(e) => setNewUser({...newUser, pictureUrl: e.target.value})} />
                <button type="submit" disabled={load}>{load ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : "Sign Up"}</button>
                <Link to="/" placeholder="">Switch back to log in</Link>
            </SignupContainer>
        </Container>
    );
}