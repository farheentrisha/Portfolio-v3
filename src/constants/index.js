import { Github, Linkedin, MessageCircle } from "lucide-react"; // or your preferred library
export const myProjects = [
  {
    id: 1,
    title: "IrishBangla – International Student Community Platform",
    description:
      "A web platform designed to support Bangladeshi and international students in Ireland with community resources and guidance.",
    subDescription: [
      "Developed a community-focused platform providing resources and guidance for international students.",
      "Integrated informational sections and student support resource hubs.",
      "Designed a structured content layout to improve information accessibility.",
    ],
    href: "https://tiny-croquembouche-3d783f.netlify.app/",
    logo: "/assets/logos/irishbangla-logo.png", // Update with your logo path
    image: "/assets/projects/irishbangla.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Netlify", path: "/assets/logos/netlify.svg" },
    ],
  },
  {
    id: 2,
    title: "FineAnswer – Immigration & Education Consultancy Platform",
    description:
      "A consultancy website focused on higher education and immigration guidance, specifically tailored for students moving to Ireland.",
    subDescription: [
      "Built a professional service platform for education and immigration consultancy.",
      "Mapped out structured immigration journey guidance for prospective students.",
      "Implemented premium package sections and detailed service information modules.",
    ],
    href: "https://fine-answer-wcij.vercel.app/",
    logo: "/assets/logos/fineanswer-logo.png",
    image: "/assets/projects/fineanswer.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Motion", path: "/assets/logos/motion.svg" },
    ],
  },
  {
    id: 3,
    title: "Bongolouney.AI",
    description:
      "An AI-powered tour guide assistant designed to provide personalized travel recommendations.",
    subDescription: [
      "Developed a full-stack AI assistant using React, Node.js, and Flask.",
      "Integrated machine learning models to provide dynamic tour guidance.",
      "Built a responsive interface for seamless user interaction across devices.",
    ],
    href: "https://www.youtube.com/watch?v=qewAy6irzoY",
    logo: "/assets/logos/ai-logo.png",
    image: "/assets/projects/bongo.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "Flask", path: "/assets/logos/flask.svg" },
      { id: 4, name: "Python", path: "/assets/logos/python.svg" },
    ],
  },
  {
    id: 4,
    title: "CNN-based Image Classification",
    description:
      "A deep learning project focused on accurately classifying images using Convolutional Neural Networks.",
    subDescription: [
      "Built and trained a CNN model using Python, TensorFlow, and Keras.",
      "Implemented image preprocessing and data augmentation techniques to improve model accuracy.",
      "Analyzed classification performance through confusion matrices and loss curves.",
    ],
    href: "https://github.com/farheentrisha/CNN-based-image-classification",
    logo: "/assets/logos/tensorflow.svg",
    image: "/assets/projects/cnn.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "TensorFlow", path: "/assets/logos/tensorflow.svg" },
      { id: 3, name: "Keras", path: "/assets/logos/keras.svg" },
    ],
  },
  {
    id: 5,
    title: "Autonomous Surveillance Robot",
    description:
      "A mobile robotics project featuring fire detection, real-time monitoring, and dual-mode control.",
    subDescription: [
      "Developed fire detection functionality using advanced Image Processing and Machine Learning.",
      "Implemented both autonomous navigation and manual control systems.",
      "Integrated real-time monitoring capabilities for remote surveillance.",
    ],
    href: "",
    logo: "/assets/logos/robotics.svg",
    image: "/assets/projects/auto.jpeg",
    tags: [
      { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "OpenCV", path: "/assets/logos/opencv.svg" },
    ],
  },
  {
    id: 6,
    title: "Mist to Mars",
    description:
      "A 3D animation project narrating the journey of a Mars Rover from MIST to the Red Planet.",
    subDescription: [
      "Created a high-fidelity 3D animation using Blender.",
      "Designed and textured detailed rover models and Martian environments.",
      "Produced a cinematic narrative following the rover's trajectory and landing.",
    ],
    href: "https://youtu.be/QpBbXySYn6Y?si=zIFdgbvOY7mZQ1aQ",
    logo: "/assets/logos/blender.svg",
    image: "/assets/projects/misttomars.png",
    tags: [
      { id: 1, name: "Blender", path: "/assets/logos/blender.svg" },
      { id: 2, name: "3D Animation", path: "/assets/logos/animation.svg" },
    ],
  },
];
export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/farheentrisha",
    icon: "/assets/logos/github-logo.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/farheen-mahjarin-trisha/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mahjarin_tush/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    job: "Dublin 4IR",
    date: "2026 - Present",
    contents: [
      "Leading frontend architecture for enterprise-grade solutions, focusing on scalable React-based user interfaces.",
      "Collaborating with cross-functional teams to bridge the gap between complex network data and intuitive web visualizations.",
      "Optimizing application performance and ensuring high-end UI/UX standards across all platforms.",
    ],
  },
  {
    title: "Frontend Intern",
    job: "Dublin 4IR",
    date: "2025 - 2026",
    contents: [
      "Rotated across Network, Database, and Software engineering teams to gain a holistic understanding of full-stack ecosystems.",
      "Contributed to the development of a robust Document Management System (DMS) utilizing SQL for data integrity.",
      "Streamlined internal operations by implementing custom scripting and workflow automation processes.",
    ],
  },
  {
    title: "IT Intern",
    job: "Trust Bank Ltd.",
    date: "February 2023",
    location: "Dhaka",
    contents: [
      "Collaborated with network and database teams to maintain high-availability financial software systems.",
      "Enhanced a core Document Management System (DMS) through SQL optimization and database management.",
      "Automated repetitive administrative workflows using custom scripting, significantly improving team efficiency.",
    ],
  },
];

export const education = [
  {
    title: "BSc in Computer Science and Engineering",
    date: "Apr 2021 - Jul 2025",
    type: "tags",
    contents: ["Military Institute of Science and Technology (MIST), Dhaka - CGPA: 3.54"],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    date: "Jul 2018 - Jul 2020",
    type: "tags",
    contents: ["Holy Cross College, Tejgaon, Dhaka - GPA: 5.00"],
  },
  {
    title: "Secondary School Certificate (SSC)",
    
    date: "Jan 2013 - Mar 2018",
    type: "tags",
    contents: ["Saraju Bala Government Girls' High School, Kishoreganj - GPA: 5.00"],
  },
];

export const publications = [
  {
    title:
      "IoT Integrated Smart Aquarium Management System with Real-Time Water Quality Monitoring",
    authors:
      "Farheen Mahjarin Trisha, Maria Sultana, Ahmad Abdullah, Mohammad Alam, M. Akhtaruzzaman",
    venue: "IEEE QPAIN 2025 Conference, pp. 1-5",
    doi: "10.1109/QPAIN66474.2025.11171621",
  },
];

export const achievements = [
  {
    title: "First Runner-up in Project Showcasing at Inventious 4.1",
    date: "March 2025",
  },
  {
    title: "First Runner-up in BCS ICT Fest 2025 (Project Showcasing)",
    date: "2025",
  },
  {
    title: "First Runner-up in Bangladesh Biology Olympiad Regional",
    date: "March 2020",
  },
  {
    title: 'Awarded in Flash Event "ARTvsARTIST" by Obscure Artists of Bangladesh',
    date: "June 2020",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Bangla", "English"],
  },
  {
    category: "Programming",
    items: ["C", "C++", "Python", "Java", "JavaScript", "PHP", "SQL"],
  },
  {
    category: "AI/ML",
    items: ["Machine Learning", "Deep Learning"],
  },
];

export const certificates = [
  {
    category: "Web",
    items: ["HTML", "CSS", "React", "Node.js", "Flask", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Blender"],
  },
];

export const certifications = [
  {
    name: "IoT Integrated Smart Aquarium",
    username: "IEEE QPAIN 2025",
    body: "Certificate of Presentation for Real-Time Water Quality Monitoring.",
    img: "/assets/certs/qpain2.png",
  },
  {
    name: "BEAR Summit & Semiconductor Symposium",
    username: "National Symposium 2025",
    body: "Certificate of Registration and participation in tech excellence.",
    img: "/assets/certs/bear.png",
  },
  {
    name: "SQA Career Launchpad",
    username: "Ostad",
    body: "Comprehensive training for Software Quality Assurance beginners.",
    img: "/assets/certs/sqa.png",
  },
  {
    name: "CNN Image Classification",
    username: "Udemy",
    body: "Deep Learning Python project focusing on image classification.",
    img: "/assets/certs/cnn.png",
  },
  {
    name: "Introduction to 2D Animation",
    username: "GP Academy",
    body: "Certificate of Excellence in animation fundamentals.",
    img: "/assets/certs/2d.png",
  },
  {
    name: "PHP and Laravel",
    username: "Ostad",
    body: "Full-stack development certification completed September 2023.",
    img: "/assets/certs/php.png",
  },
  {
    name: "Python Fundamentals",
    username: "Kiron",
    body: "Core programming logic and data structures in Python.",
    img: "/assets/certs/kiron.png",
  },
  
];