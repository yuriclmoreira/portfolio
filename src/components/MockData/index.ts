//ICON
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa";

import {
  SiFirebase,
  SiMongodb,
  SiStyledcomponents,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

// IMAGE
import imagiflix from "../../assets/cover-projects/imagiflix.jpg";
import goodGame from "../../assets/cover-projects/good-game.jpg";
import magbank from "../../assets/cover-projects/magbank.jpg";
import studion from "../../assets/cover-projects/studion.jpg";
import imagineshop from "../../assets/cover-projects/imagineshop.jpg";
import pousadaNeneza from "../../assets/cover-projects/pousada-neneza.jpg";

export const mokProjects = [
  {
    image: imagiflix,
    link: "https://imagiflix-delta.vercel.app",
    describe:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo error, natus eaque dicta tempora et atque maiores impedit expedita nostrum vitae harum officiis quis temporibus esse quaerat. Voluptates, modi.",
    icons: [FaReact, SiTailwindcss, SiTypescript, FaCss3Alt],
  },
  {
    image: goodGame,
    link: "https://good-game-4xt6pex8s-yuriclmoreira.vercel.app",
    describe:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo error, natus eaque dicta tempora et atque maiores impedit expedita nostrum vitae harum officiis quis temporibus esse quaerat. Voluptates, modi.",
    icons: [FaReact, SiTypescript],
  },
  {
    image: magbank,
    link: "https://magbank-three.vercel.app",
    describe:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo error, natus eaque dicta tempora et atque maiores impedit expedita nostrum vitae harum officiis quis temporibus esse quaerat. Voluptates, modi.",
    icons: [FaReact, SiJavascript, FaSass, FaCss3Alt, FaBootstrap],
  },
  {
    image: studion,
    link: "https://studion-kappa.vercel.app",
    describe:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo error, natus eaque dicta tempora et atque maiores impedit expedita nostrum vitae harum officiis quis temporibus esse quaerat. Voluptates, modi.",
    icons: [FaHtml5, FaCss3Alt, SiTypescript],
  },
  {
    image: imagineshop,
    link: "https://github.com/yuriclmoreira/imagineshop-api",
    describe:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo error, natus eaque dicta tempora et atque maiores impedit expedita nostrum vitae harum officiis quis temporibus esse quaerat. Voluptates, modi.",
    icons: [SiNextdotjs, SiTypescript, SiMongodb, FaNode, SiStyledcomponents],
  },
  {
    image: pousadaNeneza,
    link: "https://pousada-neneza-d3ycc2376-yuriclmoreira.vercel.app",
    describe:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo error, natus eaque dicta tempora et atque maiores impedit expedita nostrum vitae harum officiis quis temporibus esse quaerat. Voluptates, modi.",
    icons: [FaReact, SiTypescript, FaBootstrap],
  },
];

export const skillsIcon = [
  {
    logo: FaReact,
    texto:
      "React é uma biblioteca JavaScript amplamente utilizada para criar interfaces de usuário interativas e reativas. Desenvolvida pelo Facebook, o React permite a construção de componentes reutilizáveis que gerenciam o estado e a renderização eficientemente. Com o React, os desenvolvedores podem criar aplicativos de página única (SPAs) complexos e escaláveis, além de interfaces de usuário dinâmicas e responsivas. A abordagem baseada em componentes do React facilita a reutilização e a manutenção do código, tornando-o altamente modular",
  },
  {
    logo: FaBootstrap,
    texto:
      "Bootstrap é um dos frameworks front-end mais populares e amplamente utilizados no desenvolvimento web. Criado pelo Twitter, o Bootstrap oferece uma ampla gama de componentes pré-estilizados e prontos para uso, como botões, formulários, navegação, grades de layout responsivo e muito mais. Ele também fornece um conjunto abrangente de classes CSS e JavaScript para facilitar a criação de interfaces de usuário elegantes e responsivas.",
  },
  {
    logo: SiTypescript,
    texto:
      "O TypeScript é uma linguagem de programação que estende o JavaScript, adicionando tipagem estática opcional e recursos avançados ao ecossistema JavaScript. Ele foi desenvolvido para melhorar a produtividade, a escalabilidade e a confiabilidade do desenvolvimento de software.Outro ponto forte doTypeScript é a sua integração com o ecossistema JavaScript existente. Ele é compatível com bibliotecas e frameworks populares do JavaScript, como React, Angular e Vue.js, bem como com as várias ferramentas e pacotes disponíveis. Isso significa que você pode aproveitar todo o ecossistema JavaScript, ao mesmo tempo em que adiciona recursos avançados de tipagem e segurança oferecidos pelo TypeScript.",
  },
  {
    logo: FaNode,
    texto:
      "Node.js é uma plataforma de desenvolvimento JavaScript que permite executar código JavaScript no lado do servidor. Ele utiliza o mecanismo de execução V8 do Google Chrome para oferecer um ambiente de tempo de execução eficiente e de alto desempenho. Com o Node.js, os desenvolvedores podem construir aplicações web escaláveis e de alta velocidade, manipular arquivos, criar servidores e APIs, realizar tarefas de processamento em segundo plano e muito mais.",
  },
  {
    logo: SiMongodb,
    texto:
      "MongoDB é um banco de dados NoSQL (Não Relacional) amplamente utilizado para o armazenamento e a recuperação de dados em aplicações web e mobile. Ele se destaca por sua capacidade de lidar com dados semi-estruturados e flexíveis, permitindo uma modelagem ágil dos dados.Além disso, ele oferece recursos poderosos, como consultas avançadas, indexação flexível e replicação automática para garantir a disponibilidade e a durabilidade dos dados.",
  },
  {
    logo: SiTailwindcss,
    texto:
      "Tailwind CSS é um framework CSS de utilitários altamente configurável e de baixo nível que permite a criação de interfaces de usuário personalizadas e responsivas de maneira eficiente. Ao contrário de outros frameworks CSS que fornecem estilos pré-definidos, o Tailwind CSS fornece uma ampla gama de classes utilitárias que podem ser aplicadas diretamente nos elementos HTML. Essas classes são projetadas para realizar tarefas específicas, como estilos de posicionamento, cores, tipografia, espaçamento, entre outros. ",
  },
  {
    logo: FaSass,
    texto:
      "Sass (Syntactically Awesome Style Sheets) é uma linguagem de extensão CSS que oferece recursos avançados e uma sintaxe mais poderosa para o desenvolvimento de estilos em cascata. Ele introduz recursos como variáveis, aninhamento de seletores, mixins, herança e importação de arquivos, que tornam a escrita de estilos mais eficiente e modular. Com o Sass, os desenvolvedores podem criar estilos reutilizáveis, reduzir a repetição de código e manter uma base de código mais organizada. Além disso, o Sass oferece suporte a funções e operações matemáticas, permitindo cálculos dinâmicos e manipulação de valores CSS. ",
  },
  {
    logo: FaHtml5,
    texto:
      "HTML  é uma linguagem de marcação fundamental para a criação e estruturação de páginas da web. Com o HTML, os desenvolvedores podem definir e organizar o conteúdo de um site, utilizando uma variedade de elementos e tags específicas. Esses elementos permitem inserir textos, imagens, links, tabelas, formulários e muitos outros elementos interativos.",
  },
  {
    logo: FaCss3Alt,
    texto:
      "CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a apresentação e o layout de elementos em uma página web. Com o CSS, é possível controlar a aparência de textos, imagens, cores, espaçamento e outros elementos visuais de um site. Ele trabalha em conjunto com o HTML, fornecendo uma camada separada de estilo para o conteúdo da página.",
  },
  {
    logo: SiStyledcomponents,
    texto:
      " Styled Components é uma biblioteca popular de CSS-in-JS para React que permite escrever estilos de forma declarativa e componentizada. Com o Styled Components, os desenvolvedores podem criar estilos dinâmicos e reutilizáveis diretamente nos componentes React, utilizando uma sintaxe similar ao CSS, mas com recursos avançados, como interpolação de props e herança de estilos",
  },
  {
    logo: SiFirebase,
    texto:
      "Firebase é uma plataforma de desenvolvimento de aplicativos móveis e web oferecida pelo Google. Ela fornece uma variedade de serviços e recursos prontos para uso, permitindo que os desenvolvedores criem aplicativos de alta qualidade de forma rápida e eficiente. O Firebase abrange uma ampla gama de funcionalidades, incluindo autenticação de usuários, armazenamento em nuvem, banco de dados em tempo real, hospedagem de sites, mensagens push, análise de dados e muito mais.",
  },
  {
    logo: SiNextdotjs,
    texto:
      "O Next.js é um framework de desenvolvimento web em React que oferece recursos avançados para a construção de aplicativos web modernos. Ele combina a simplicidade e a facilidade de uso do React com uma série de benefícios adicionais, tornando-o uma escolha popular para o desenvolvimento de aplicações web de alto desempenho.",
  },
];
