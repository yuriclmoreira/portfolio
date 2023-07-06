
import { Container } from "react-bootstrap";
import "./styles.css"
import code from "../../assets/code3.jpg";

const About = () => {
    function whatsapp() {
        window.open('https://wa.me/5532984060604?text=');

    }
    return (
        <section id="s-about">
            <Container>

                <div className="banner">
                    <div className="intro">
                        <h1>Olá,eu sou o</h1>
                        <span>Yuri Moreira</span>
                        <p>Seu desenvolvedor FullStack</p>
                        <div className="action">
                            <button className="btn-active" onClick={whatsapp}>Entrar em contato</button>
                            <button className="btn-about">Download CV</button>
                        </div>
                    </div>

                    <div className="profile">
                        <img className="image-about" src={code} alt="" />
                    </div>
                </div>
                <div className="about">
                    <h1>Sobre</h1>
                    <p>Bem-vindo ao meu portfólio de desenvolvedor! Estou empolgado em apresentar a você uma seleção dos meus projetos pessoais, demonstrando minha paixão e habilidades na área de desenvolvimento. Ao longo do meu percurso como desenvolvedor, mergulhei em uma variedade de projetos desafiadores, abrangendo desde aplicativos móveis e web. Cada projeto representa meu compromisso em criar soluções eficientes e intuitivas, com foco na experiência do usuário e na excelência técnica.
                    </p>
                </div>
            </Container>
        </section>
    )
}

export default About;