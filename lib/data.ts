import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAstro } from "react-icons/si";

export const links = [
  {
    name: "inicio",
    hash: "#home"
  },
  {
    name: "Acerca",
    hash: "#about"
  },
  {
    name: "Proyectos",
    hash: "#projects"
  },
  {
    name: "Habilidades",
    hash: "#skills"
  },
  {
    name: "Experiencia",
    hash: "#experience"
  },
  {
    name: "Contacto",
    hash: "#contact"
  }
] as const;

export const experiencesData = [
  {
    title: "HTML",
    location: "El Bolsón",
    description:
      "Uno de los aspectos más interesantes de mi estudio de HTML fue la creación de formularios. Aprendí cómo diseñar formularios que permiten a los usuarios enviar información, como comentarios o datos de registro, y cómo procesar esos datos en el lado del servidor.",
    icon: React.createElement(FaHtml5),
    date: "2020 - al presente"
  },
  {
    title: "CSS",
    location: "El Bolsón",
    description:
      "La idea de CASCADA en CSS me intrigó. Aprendí cómo los estilos pueden heredarse de un elemento a otro, y cómo puedo controlar este flujo de estilos para lograr el aspecto deseado. También descubrí la importancia de las clases y los identificadores para seleccionar elementos específicos y aplicarles estilos únicos.",
    icon: React.createElement(FaCss3Alt),
    date: "2020 - al presente"
  },
  {
    title: "JavaScript",
    location: "El Bolsón",
    description:
      "Una de las partes más emocionantes y transformadoras de mi viaje en el desarrollo web fue el estudio de JavaScript. Descubrí cómo este lenguaje de programación dinámico puede dar vida a las páginas web, añadiendo interactividad y funcionalidad.",
    icon: React.createElement(FaJsSquare),
    date: "2020 - al presente"
  },
  {
    title: "React",
    location: "El Bolsón",
    description:
      "La característica más distintivas de React es su enfoque en la construcción de componentes reutilizables. Aprendí a crear componentes independientes que encapsulan la lógica y la interfaz de usuario, lo que facilita la organización y el mantenimiento del código. Esta modularidad me ha permitido construir aplicaciones web más grandes y complejas de manera más eficiente.",
    icon: React.createElement(FaReact),
    date: "2020 - al presente"
  },
  {
    title: "Next.js",
    location: "El Bolsón",
    description:
      "Al trabajar con Next.js noté su enfoque en la optimización de rendimiento. La capacidad de elegir entre renderización en el lado del servidor y en el lado del cliente me hizo comprender la importancia de la velocidad de carga y la indexación en motores de búsqueda. Esto me ha convertido en un desarrollador más consciente del rendimiento, lo que ha sido esencial para mejorar la experiencia del usuario en mis proyectos y crear aplicaciones más eficientes.",
    icon: React.createElement(TbBrandNextjs),
    date: "2020 - al presente"
  },
  {
    title: "Astro",
    location: "El Bolsón",
    description:
      "Astro ha elevado mi juego en el desarrollo web al ofrecer un rendimiento excepcional, modularidad y una experiencia de desarrollo fluida. Esta tecnología me ha permitido crear sitios web más rápidos y eficientes, lo que ha mejorado la satisfacción de los usuarios y mi propio disfrute como desarrollador. Astro es, sin duda, una herramienta valiosa en mi caja de herramientas de desarrollo web.",
    icon: React.createElement(SiAstro),
    date: "2020 - al presente"
  }
] as const;

export const projectsData = [
  {
    title: "Gramaphenia Blog",
    description:
      "Como primer entrega de proyecto, incorporare algunas sencillas practicas. Mas adeleante veremos de a poco como mejorarlo. Hasta entonces.",
    tags: [ "Astro", "React" ],
    imageUrl: "/image-4.png",
    urlLink: "https://cuatrocientoscuatro.netlify.app/"
  },
  {
    title: "Concepto Hexágono",
    description: "Diseño y programación de página web para concepto Hexágono. Sitio de venta de páginas y alojamiento Web",
    tags: [
      "JavaScript",
      "React",
      "Tailwind",
    ],
    imageUrl: "/image-1.png",
    urlLink: "https://www.conceptohexagono.com"
  }
  // {
  //   title: "Gramaphenia-Blog",
  //   description: "Aprendisaje desde cero...",
  //   tags: [
  //     "React",
  //     "Next.js",
  //     "JavaScript",
  //     "TypeScript",
  //     "Tailwind",
  //     "MongoDB"
  //   ],
  //   imageUrl: "/image-3.png"
  // }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Git",
  "React",
  "Next.js",
  "Astro",
  "Tailwind",
  "Prisma",
  "Framer Motion",
  "Figma",
  "Blender",
  "Godot",
  "Unity",
  "UE5",
] as const;

export const languagesData = [
  {
    name: "Spanish",
    level: 10,
    flagImage: "/flags/spain-flag.png"
  },
  {
    name: "English",
    level: 5,
    flagImage: "/flags/uk-flag.png"
  }
  // {
  //   name: "German",
  //   level: 8,
  //   flagImage: "/flags/germany-flag.png"
  // },
  // {
  //   name: "Italian",
  //   level: 4,
  //   flagImage: "/flags/italy-flag.png"
  // },
  // {
  //   name: "French",
  //   level: 3,
  //   flagImage: "/flags/france-flag.png"
  // }
] as const;
