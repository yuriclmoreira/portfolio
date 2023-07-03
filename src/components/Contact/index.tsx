
import { Container } from "react-bootstrap";
import "./styles.css"
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const Contact = () => {
    function whatsapp() {
        window.open('https://wa.me/5532984060604?text=');

    }
    function linkedinIn() {
        window.open('https://www.linkedin.com/in/yuri-clemente-233047137/');

    }
    function github() {
        window.open('https://github.com/yuriclmoreira');

    }
    function mail() {
        window.open('mailto:yuriclmoreira@terra.com.br');

    }
    return (

        <section id="s-contact">
            <Container className="contact ">
                <h1 className="about title-contact ">Contato</h1>
                <div className="social">
                    <div className="icon icon-contact">

                        <FaWhatsapp onClick={whatsapp} />
                        <p className="title-text">Telefone</p>
                        <p >(32) 98406-0604</p>
                    </div>
                    <div className="icon icon-contact">

                        <FaLinkedinIn onClick={linkedinIn} />
                        <p className="title-text">Linkedin</p>
                        <p >@yuri-clemente</p>
                    </div>
                    <div className="icon icon-contact">

                        <FaGithub onClick={github} />
                        <p className="title-text">GitHub</p>
                        <p >@yuriclmoreira</p>
                    </div>
                    <div className="icon icon-contact">

                        <AiOutlineMail onClick={mail} />
                        <p className="title-text">E-mail</p>
                        <p >yuriclmoreira</p>
                    </div>


                </div>

            </Container>
        </section>
    )
}
export default Contact;