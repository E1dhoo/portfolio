import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import threejsLogo from './assets/tech_logo/threejs.png';
import canvaLogo from './assets/tech_logo/canva.png';
import unrealLogo from './assets/tech_logo/unreal.jpg';
import unityLogo from './assets/tech_logo/unity.png';
import blender from './assets/tech_logo/blender.png';

import ebenezerLogo from './assets/school_logo/Ebenezer.jpg';
import fjmhssLogo from './assets/school_logo/Fjmhss2.png';
import vjcetLogo from './assets/school_logo/vjcet.jpg';

import camerinLogo from './assets/experience/camerin.png';

import roomForge from './assets/project_pics/RoomForge.png';
import vrExpo from './assets/project_pics/VrExpo.png';

import carSimulator from './assets/project_pics/CarSim.png';


export const SkillsInfo = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'React JS', logo: reactjsLogo },
        { name: 'Tailwind CSS', logo: tailwindcssLogo },
        { name: 'Bootstrap', logo: bootstrapLogo },
        { name: 'Threejs', logo: threejsLogo }
      ],
    },
    {
        title: 'Backend',
        skills: [
          { name: 'Node JS', logo: nodejsLogo },
          { name: 'Express JS', logo: expressjsLogo },
          { name: 'MongoDB', logo: mongodbLogo },

        ],
      },
      {
        title: 'Languages',
        skills: [
          { name: 'C', logo: cLogo },
          { name: 'C++', logo: cppLogo },
          { name: 'Java', logo: javaLogo },
          { name: 'Python', logo: pythonLogo },
          { name: 'C-Sharp', logo: csharpLogo },
          { name: 'JavaScript', logo: javascriptLogo },
         
        ],
      },
      {
        title: 'Tools',
        skills: [
          { name: 'Git', logo: gitLogo },
          { name: 'GitHub', logo: githubLogo },
          { name: 'VS Code', logo: vscodeLogo },
          { name: 'Postman', logo: postmanLogo },
          { name: 'Canva', logo: canvaLogo},
          { name: 'Unity', logo: unityLogo },
          { name: 'Unreal', logo: unrealLogo },
          { name: 'Blender', logo: blender },
         
        ],
      },
];


//********Education*********

export const education = [
    {
        id: 0,
        img: vjcetLogo,
        school: "Viswajyothi College of Engineering and Technology, Vazhakulam",
        date: "Nov 2021 - May 2025",
        grade: "8.37 CGPA",
        desc: "I am pursuing my Bachelor's degree (BTech) in Computer Science and Design from Viswajyothi College of Engineering and Technology, Vazhakulam. During my academic journey, I have built a strong foundation in computer science principles, software development, and design thinking.I have also actively participated in workshops and technical events, which have helped enhance my practical skills and knowledge.",
        degree: "Bachelor of Technology - BTech (Computer Science and Design)"
        
    },
   
    {
      id: 1,
      img: fjmhssLogo,
      school: "Fr. Joseph Memorial H.S.S, Puthupady",
      date: "June 2019 - March 2021",
      grade: "96%",
      desc: "I completed my class 12 education from Fr. Joseph Memorial Higher Secondary School, Puthupady, under the State board of Kerala, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "State (XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: ebenezerLogo,
      school: "Ebenezer Higher Secondary School, Veettoor",
      date: "June 2015 - March 2019",
      grade: "95%",
      desc: "I completed my class 10 education from Ebenezer Higher Secondary School, Veettoor, under the State board of Kerala",
      degree: "State(X)",
    },
  ];


  export const projects = [
    {
      id: 0,
      title: "RoomForge: VR interior Decorator",
      description:
        "Developed a VR interior design application using Unreal Engine, enabling real-time customization of wall and floor textures. Implemented interactive features for selecting, placing, and arranging furniture within prebuilt 3D house models.",
      image: roomForge,
      tags: ["Unreal Engine", "Blender", "C++"],

    },
    {
      id: 1,
      title: "VR Expo",
      description:
        "Built a beginner-friendly VR application using Unity3D, featuring three immersive modules: a mini-game,a 360° experience, and a 3D model display. Designed intuitive scene transitions and user navigation to enhance accessibility and engagement across multiple VR experiences.",
      image: vrExpo,
      tags: ["Unity", "C#", "Blender"],
      github:"https://github.com/E1dhoo/VR-Expo",
    },
    {
      id: 2,
      title: "Car Simulator Game",
      description:
        "A web-based car simulation game built using Three.js and Cannon.js libraries. Integrated WebXR to enable immersive virtual reality gameplay. Implemented collision detection and physics using Cannon.js for realistic car dynamics.",
      image:carSimulator,
      tags: ["HTML", "Javascript", "CSS", "Threejs"],
      github:"https://github.com/E1dhoo/Threejs-Car-Game",
    },

  ];


  export  const experiences =[
    {
      id: 0,
      img: camerinLogo,
      role: "Python Intern",
      company: "Camerin Folks",
      date: "May -2023",
      desc: "Utilized fundamental Python programming concepts for learning and exploration.",
      skills: [
        "Python",
        "NumPy",
        "OpenCV"
      ],
    }
  ]