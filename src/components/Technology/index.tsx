
import "./styles.css"
import { useState } from 'react';
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaNode, FaReact, FaSass } from 'react-icons/fa'
import { TbBrandJavascript } from "react-icons/tb";
import { SiFirebase, SiMongodb, SiStyledcomponents, SiTailwindcss } from "react-icons/si";

const skillsIcon = [
    {

        logo: FaReact,
        texto: 'React é uma biblioteca JavaScript amplamente utilizada para criar interfaces de usuário interativas e reativas. Desenvolvida pelo Facebook, o React permite a construção de componentes reutilizáveis que gerenciam o estado e a renderização eficientemente. Com o React, os desenvolvedores podem criar aplicativos de página única (SPAs) complexos e escaláveis, além de interfaces de usuário dinâmicas e responsivas. A abordagem baseada em componentes do React facilita a reutilização e a manutenção do código, tornando-o altamente modular',

    }, {

        logo: FaBootstrap,
        texto: 'Bootstrap é um dos frameworks front-end mais populares e amplamente utilizados no desenvolvimento web. Criado pelo Twitter, o Bootstrap oferece uma ampla gama de componentes pré-estilizados e prontos para uso, como botões, formulários, navegação, grades de layout responsivo e muito mais. Ele também fornece um conjunto abrangente de classes CSS e JavaScript para facilitar a criação de interfaces de usuário elegantes e responsivas.',

    },
    {

        logo: TbBrandJavascript,
        texto: 'JavaScript é uma linguagem de programação de alto nível, interpretada e dinâmica, amplamente utilizada no desenvolvimento web. Ela permite adicionar interatividade e funcionalidades avançadas às páginas da web. Com o JavaScript, os desenvolvedores podem manipular elementos do DOM (Modelo de Objeto de Documento), responder a eventos, controlar animações, realizar requisições assíncronas a servidores e criar aplicativos web completos. Além de ser uma linguagem client-side, o JavaScript também é usado no lado do servidor, por meio de plataformas como o Node.js, permitindo a construção de aplicações web em tempo real e APIs RESTful.',

    },
    {

        logo: FaNode,
        texto: 'Node.js é uma plataforma de desenvolvimento JavaScript que permite executar código JavaScript no lado do servidor. Ele utiliza o mecanismo de execução V8 do Google Chrome para oferecer um ambiente de tempo de execução eficiente e de alto desempenho. Com o Node.js, os desenvolvedores podem construir aplicações web escaláveis e de alta velocidade, manipular arquivos, criar servidores e APIs, realizar tarefas de processamento em segundo plano e muito mais.',

    },
    {

        logo: SiMongodb,
        texto: 'MongoDB é um banco de dados NoSQL (Não Relacional) amplamente utilizado para o armazenamento e a recuperação de dados em aplicações web e mobile. Ele se destaca por sua capacidade de lidar com dados semi-estruturados e flexíveis, permitindo uma modelagem ágil dos dados.Além disso, ele oferece recursos poderosos, como consultas avançadas, indexação flexível e replicação automática para garantir a disponibilidade e a durabilidade dos dados.',

    },
    {

        logo: SiTailwindcss,
        texto: 'Tailwind CSS é um framework CSS de utilitários altamente configurável e de baixo nível que permite a criação de interfaces de usuário personalizadas e responsivas de maneira eficiente. Ao contrário de outros frameworks CSS que fornecem estilos pré-definidos, o Tailwind CSS fornece uma ampla gama de classes utilitárias que podem ser aplicadas diretamente nos elementos HTML. Essas classes são projetadas para realizar tarefas específicas, como estilos de posicionamento, cores, tipografia, espaçamento, entre outros. ',

    },
    {

        logo: FaSass,
        texto: 'Sass (Syntactically Awesome Style Sheets) é uma linguagem de extensão CSS que oferece recursos avançados e uma sintaxe mais poderosa para o desenvolvimento de estilos em cascata. Ele introduz recursos como variáveis, aninhamento de seletores, mixins, herança e importação de arquivos, que tornam a escrita de estilos mais eficiente e modular. Com o Sass, os desenvolvedores podem criar estilos reutilizáveis, reduzir a repetição de código e manter uma base de código mais organizada. Além disso, o Sass oferece suporte a funções e operações matemáticas, permitindo cálculos dinâmicos e manipulação de valores CSS. ',

    },
    {

        logo: FaHtml5,
        texto: 'HTML  é uma linguagem de marcação fundamental para a criação e estruturação de páginas da web. Com o HTML, os desenvolvedores podem definir e organizar o conteúdo de um site, utilizando uma variedade de elementos e tags específicas. Esses elementos permitem inserir textos, imagens, links, tabelas, formulários e muitos outros elementos interativos.',

    },
    {

        logo: FaCss3Alt,
        texto: 'CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a apresentação e o layout de elementos em uma página web. Com o CSS, é possível controlar a aparência de textos, imagens, cores, espaçamento e outros elementos visuais de um site. Ele trabalha em conjunto com o HTML, fornecendo uma camada separada de estilo para o conteúdo da página.',

    },
    {

        logo: SiStyledcomponents,
        texto: ' Styled Components é uma biblioteca popular de CSS-in-JS para React que permite escrever estilos de forma declarativa e componentizada. Com o Styled Components, os desenvolvedores podem criar estilos dinâmicos e reutilizáveis diretamente nos componentes React, utilizando uma sintaxe similar ao CSS, mas com recursos avançados, como interpolação de props e herança de estilos',

    },
    {

        logo: SiFirebase,
        texto: 'Firebase é uma plataforma de desenvolvimento de aplicativos móveis e web oferecida pelo Google. Ela fornece uma variedade de serviços e recursos prontos para uso, permitindo que os desenvolvedores criem aplicativos de alta qualidade de forma rápida e eficiente. O Firebase abrange uma ampla gama de funcionalidades, incluindo autenticação de usuários, armazenamento em nuvem, banco de dados em tempo real, hospedagem de sites, mensagens push, análise de dados e muito mais.',

    },
    {

        logo: FaGithub,
        texto: 'O GitHub é uma plataforma de hospedagem de código-fonte e colaboração para desenvolvedores. Ela permite que os desenvolvedores armazenem, compartilhem e colaborem em projetos de software usando o controle de versão Git. No GitHub, os desenvolvedores podem criar repositórios públicos ou privados para armazenar seu código-fonte, histórico de alterações e documentação.',

    },

]
const Technology = () => {

    const [text, setText] = useState("Clique no card para ler mais sobre cada tecnologia!");
    const [activeButton, setActiveButton] = useState(-1);
    const handleButtonClick = (numberOfSkill: number, skillText: string) => {
        setText(skillText)
        setActiveButton(numberOfSkill);
    };
    return (
        <section id="s-skills">
            <div className="grid-layout ">
                <div className="skills">
                    <div className="skills-text">


                        <h1 className="text-title" >Conhecimentos</h1>


                        <p className="description" >{text}</p>
                    </div>

                    <div className="skills-icons">
                        {skillsIcon.map((skill, index) => (
                            <skill.logo className={activeButton === index ? 'active icon-skill' : 'icon-skill'} onClick={(e) => (handleButtonClick(index, skill.texto))} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Technology;