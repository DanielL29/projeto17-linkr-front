import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { Container, PresentationContainer, SignContainer } from "./style";
import { signin } from "../../services/authService";
import { ToastContainer } from "react-toastify";
import { treatErrors } from "../../utils/global";

export default function Signin() {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    async function handleSignin(e) {
        e.preventDefault();
        setLoad(true);
        try {
            const {data} = await signin(user);
            const token = JSON.stringify(`Bearer ${data}`);
            localStorage.setItem("token", token);
            setLoad(false);
            navigate("/home", { replace: true });
        } catch(err) {
            setLoad(false);
            treatErrors(err);
        }
    }

    return(
        <Container>
            <ToastContainer/>
            <PresentationContainer>
                <h1>linkr</h1>
                <h2>save, share and discover<br/>the best links on the web</h2>
            </PresentationContainer>
            <SignContainer onSubmit={handleSignin} load={load}>
                <input type="email" placeholder="e-mail" required disabled={load} value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                <input type="password" placeholder="password" required disabled={load} value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
                <button type="submit" disabled={load}>{load ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : "Log In"}</button>
                <Link to="/sign-up">First time? Create an account!</Link>
            </SignContainer>
        </Container>
    );
}