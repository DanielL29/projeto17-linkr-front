import { Container, PresentationContainer, SignupContainer } from "./style";

export default function Signup() {
    return(
        <Container>
            <PresentationContainer>
                <h1>linkr</h1>
                <h2>save, share and discover<br/>the best links on the web</h2>
            </PresentationContainer>
            <SignupContainer>
                <input type="email" placeholder="e-mail" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="username" />
                <input type="url" placeholder="picture url" />
                <input type="button"/>
            </SignupContainer>
        </Container>
    );
}