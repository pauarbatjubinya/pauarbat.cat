import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faYoutube,
  faTiktok,
  faInstagram,
  faLinkedin,

} from "@fortawesome/free-brands-svg-icons";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  gitIcon,
  githubIcon,
  windows_server,
  linux_server,
  apple,
    smart,
  memojiHand,
  memojiHello,
  memojiOk,
  lasalle,
  cahors,
  revisa,
  pauarbat,
  ducky,
  windowsIcon,
  linuxIcon,
  reparacionsIcon,
  copiesSeguretatIcon,
  recuperarDadesIcon,
  ciberseguretatIcon,
  dockerIcon,
  maquinesVirtualsIcon,
  postgresqlIcon,
  bashIcon,
  javaIcon,
  photoshopIcon,
  indesignIcon,
  premiereIcon,
  wordpressIcon, office,
} from "../assets";

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  windows_server,
  linux_server,
  apple,
  ducky,

  windowsIcon,
  linuxIcon,
  reparacionsIcon,
  copiesSeguretatIcon,
  recuperarDadesIcon,
  ciberseguretatIcon,
  dockerIcon,
  maquinesVirtualsIcon,
  postgresqlIcon,
  bashIcon,
  javaIcon,
  photoshopIcon,
  indesignIcon,
  premiereIcon,
  wordpressIcon,
  smart,

  gitIcon,
  githubIcon,
  memojiHand,
  memojiHello,
  memojiOk,
  lasalle,
  revisa,
  cahors,
  pauarbat,
}

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faYoutube,
  faTiktok,
  faInstagram,
  faLinkedin,
};

const introduction = {
  text: [
    "Hola, em complau tenir-te aquí!",

    "Em dic Pau i sóc un professional de la informàtica establert a l'Alt Empordà, concretament a Figueres. La meva dedicació principal consisteix en la reparació de dispositius informàtics i administració de xarxes, oferint un servei d'excel·lència i un tracte exquisit.",

    "A llarg dels últims anys, he establert una extensa xarxa de clients fidels, incloent-hi empreses importants de Figueres vinculades als sectors de l'automoció, les vendes internacionals de productes, la construcció, l'educació i les gestories.",

    "Mitjançant aquesta pàgina web, el meu objectiu és captar nous clients i expandir-me com a empresari en el sector de la informàtica. Aprofiteu els meus serveis de qualitat per a totes les vostres necessitats informàtiques i confieu en la meva experiència i professionalitat.",
  ],
};



const certificates = {
  image: [
    lasalle,
    revisa,
    cahors,
    pauarbat,
  ],
};

const memoji = {
  image: [memojiHello, memojiHand, memojiOk],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "Tinc un domini de l'ús d'HTML per estructurar pàgines web i crear contingut semàntic accessible per a tots els usuaris.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "Tinc habilitats en l'ús de CSS per estilitzar pàgines web i crear dissenys visualment atractius que millorin l'experiència de l'usuari.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "Tinc experiència en l'ús de JavaScript per afegir interactivitat i funcionalitat a les pàgines web i crear interfícies d'usuari dinàmiques.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "Tinc un domini de l'ús de Git per gestionar i rastrejar els canvis al meu codi al llarg del temps, col·laborar amb altres en un projecte i gestionar conflictes entre diferents canvis.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "Tinc habilitats en l'ús de GitHub per col·laborar en projectes, compartir codi i gestionar problemes i errors. Amb GitHub, puc crear i gestionar repositoris, contribuir a projectes de codi obert i mostrar la meva feina a possibles empleadors.",
  },
  {
    id: "windows",
    title: "Windows",
    icon: windowsIcon,
    description:
        "Tinc coneixements en l'ús de Windows com a sistema operatiu, incloent la configuració, instal·lació d'aplicacions i solució de problemes.",
  },
  {
    id: "windows-server",
    title: "Windows Server",
    icon: windows_server,
    description:
        "Tinc experiència en l'administració de servidors Windows, incloent la configuració, gestió d'usuaris, implementació de polítiques de seguretat i manteniment del sistema.",
  },
  {
    id: "linux",
    title: "Linux",
    icon: linuxIcon,
    description:
        "Tinc coneixements en l'ús de Linux com a sistema operatiu, incloent la línia de comandes, la gestió de paquets i la configuració de serveis.",
  },
  {
    id: "linux-server",
    title: "Linux Server",
    icon: linux_server,
    description:
        "Tinc experiència en l'administració de servidors Linux, incloent la configuració, gestió d'usuaris, implementació de polítiques de seguretat i manteniment del sistema.",
  },
  {
    id: "macos",
    title: "macOS",
    icon: apple,
    description:
        "Tinc experiència en l'ús i administració del sistema operatiu macOS, incloent la configuració de preferències, instal·lació d'aplicacions, resolució de problemes i optimització del rendiment.",
  },
  {
    id: "reparacions-informàtiques",
    title: "Reparacions informàtiques",
    icon: githubIcon,
    description:
        "Tinc habilitats en la reparació i solució de problemes en equips informàtics, incloent hardware i software.",
  },
  {
    id: "copies-de-seguretat",
    title: "Còpies de seguretat",
    icon: copiesSeguretatIcon,
    description:
        "Tinc coneixements en la realització de còpies de seguretat de dades importants, incloent la selecció de mètodes adequats i la programació de tasques de còpia de seguretat.",
  },
  {
    id: "recuperar-dades",
    title: "Recuperar dades",
    icon: recuperarDadesIcon,
    description:
        "Tinc experiència en la recuperació de dades de dispositius d'emmagatzematge danegats o eliminats accidentalment, utilitzant eines i tècniques adequades.",
  },
  {
    id: "ciberseguretat",
    title: "Ciberseguretat",
    icon: ciberseguretatIcon,
    description:
        "Tinc coneixements en ciberseguretat i puc implementar mesures de protecció per a sistemes informàtics, incloent el control d'accés, l'encriptació i la detecció d'intrusions.",
  },
  {
    id: "docker",
    title: "Docker",
    icon: dockerIcon,
    description:
        "Tinc experiència en l'ús de Docker per crear i gestionar contenidors d'aplicacions, proporcionant un entorn aïllat i escalable per a les aplicacions.",
  },
  {
    id: "maquines-virtuals",
    title: "Màquines virtuals",
    icon: maquinesVirtualsIcon,
    description:
        "Tinc coneixements en la creació i gestió de màquines virtuals, utilitzant tecnologies com VMware o VirtualBox, per a desplegar i executar diferents sistemes operatius en un entorn virtualitzat.",
  },
  {
    id: "sql",
    title: "PostgreSQL / MySQL / SQL ",
    icon: postgresqlIcon,
    description:
        "Domino l'ús de PostgreSQL / SQL / MYSQL, un sistema de gestió de bases de dades relacional, per crear, gestionar i consultar bases de dades eficients.",
  },
  {
    id: "bash",
    title: "Bash",
    icon: bashIcon,
    description:
        "Tinc habilitats en l'ús de Bash, un intèrpret de comandes de Unix, per a l'automatització de tasques i l'escriptura de scripts de shell.",
  },
  {
    id: "java",
    title: "Java",
    icon: javaIcon,
    description:
        "Tinc experiència en el desenvolupament d'aplicacions utilitzant el llenguatge de programació Java i el framework Java EE.",
  },
  {
    id: "adobe-photoshop",
    title: "Adobe Photoshop",
    icon: photoshopIcon,
    description:
        "Domino l'ús d'Adobe Photoshop per a l'edició i retoc d'imatges, així com la creació de gràfics i dissenys visuals.",
  },
  {
    id: "adobe-indesign",
    title: "Adobe InDesign",
    icon: indesignIcon,
    description:
        "Tinc coneixements avançats en l'ús d'Adobe InDesign per a la maquetació i disseny de publicacions impresses i digitals, com ara llibres, revistes, catàlegs i presentacions.",
  },
  {
    id: "adobe-premiere",
    title: "Adobe Premiere",
    icon: premiereIcon,
    description:
        "Tinc experiència en l'ús d'Adobe Premiere per a l'edició de vídeo professional, incloent el muntatge de clips, ajustos d'imatge i so, efectes visuals i exportació final.",
  },
  {
    id: "wordpress",
    title: "WordPress",
    icon: wordpressIcon,
    description:
        "Tinc coneixements avançats en el desenvolupament i personalització de llocs web utilitzant WordPress, incloent la creació de temes, l'administració de contingut i l'optimització per a SEO.",
  },
  {
    id: "office",
    title: "Office +",
    icon: office,
    description:
        "Sóc expert en l'ús d'eines d'Office com Word, Excel i PowerPoint a nivell avançat, amb habilitats en la creació de documents complexos, anàlisi de dades i presentacions professionals..",
  },
  {
    id: "domotica",
    title: "Domòtica i automatització",
    icon: smart,
    description:
        "Tinc coneixements en domòtica i automatització de l'habitatge, incloent la integració de sistemes de control intel·ligent, configuració de dispositius connectats i programació de rutines automatitzades.",
  },
  {
    id: "duckyscript",
    title: "Duckyscript",
    icon: ducky,
    description:
        "Sóc capaç d'utilitzar Duckyscript per a la programació de scripts d'atac i defensa en dispositius Rubber Ducky, permetent l'execució de accions automatitzades en sistemes objectiu.",
  },

];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const N = 1;
const globeData = [...Array(N).keys()].map(() => ({
  lat: 43.2667,
  lng: 1.6667,
  size: 20,
  color: "white",
}));

export {
  media,
  introduction,
  certificates,
  memoji,
  skills,
  markerSvg,
  globeData,
  icons,
};
