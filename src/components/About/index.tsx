
import { Container } from "react-bootstrap";
import "./styles.css"
import code from "../../assets/code3.jpg";

const About = () => (
    <Container>

        <div className="banner">
            <div className="intro">
                <h1>Olá,eu sou o</h1>
                <span>Yuri Moreira</span>
                <p>Seu desenvolvedor FullStack</p>
                <div className="action">
                    <button className="btn-active">Entrar em contato</button>
                    <button className="btn-about">Download CV</button>
                </div>
            </div>

            <div className="profile">
                <img src={code} alt="" />
            </div>
        </div>
        <div className="about">
            <h1>Sobre</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita molestiae veniam maiores, vero, ad nostrum repudiandae, unde explicabo aspernatur cupiditate aperiam assumenda fuga libero! Animi, facilis. Atque dolore vero voluptatum.
            </p>
        </div>
    </Container>
)

export default About;