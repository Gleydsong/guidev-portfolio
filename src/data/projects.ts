import petshop from "../assets/images/petshop.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import calculadora from "../assets/images/calculadora.png";
import galery from "../assets/images/galery.png";
import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: "helpdesk",
    title: "App de HelpDesk",
    description: "Um sistema de Help-Desk é uma aplicação para registrar, organizar e acompanhar chamados de suporte, conectando clientes a técnicos, com serviços e agendamento de horários — do “pedido” até o “encerramento”.",
    image: project1,
    altText: "Print da aplicação de HelpDesk",
  },
  {
    id: "refund",
    title: "Projeto Refund",
    description: "Aplicativo web para gerenciamento de reembolsos de despesas corporativas.",
    image: project2,
    altText: "Print do aplicativo web Projeto Refund",
  },
  {
    id: "api-refund",
    title: "Api de Reembolso",
    description: "API para gerenciamento de reembolsos de despesas corporativas.",
    image: project3,
    altText: "Print de código ou documentação da API de Reembolso",
  },
  {
    id: "petshop",
    title: "Pet Shop",
    description: "Aplicativo web para gerenciamento de um Pet Shop, incluindo cadastro de clientes, pets, serviços e agendamentos.",
    image: petshop,
    altText: "Print da aplicação web de gerenciamento de Pet Shop",
  },
  {
    id: "calculadora",
    title: "Calculadora",
    description: "Uma calculadora simples desenvolvida em React Via CDN.",
    image: calculadora,
    altText: "Print da Calculadora em React",
    link: "https://gleydsong.github.io/calculadora/",
  },
  {
    id: "galeria",
    title: "Galeria-Plus",
    description: "Um projeto feito em React para exibir uma galeria de imagens com funcionalidades avançadas.",
    image: galery,
    altText: "Print do projeto Galeria-Plus",
  },
];
