import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    springboot,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    java,
    jwt,
    docker,
    pricewise,
    react,
    redux,
    redis,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    postgresql,
    kubernetes,
    aws,
    kafka,
    sql,
    elasticsearch,
    hibernate,

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: jwt,
        name: "JWT",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Caching",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "DevOps",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "DevOps",
    },
    {
        imageUrl: kafka,
        name: "Kafka",
        type: "DevOps",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: elasticsearch,
        name: "Elasticsearch",
        type: "Database",
    },
    {
        imageUrl: hibernate,
        name: "Hibernate",
        type: "Database",
    }
];

// Academic and Learning Journey
export const experiences = [
    {
        title: "Personal Projects & Learning",
        company_name: "Self-Directed Learning",
        icon: java,
        iconBg: "#accbe1",
        date: "2023 - Present",
        points: [
            "Built 6+ full-stack applications using Java, Spring Boot, React.js, and modern DevOps tools.",
            "Implemented microservices architecture with Docker containerization and CI/CD pipelines.",
            "Developed RESTful APIs with JWT authentication and integrated multiple databases (PostgreSQL, MongoDB).",
            "Created responsive web applications with React.js, Redux for state management, and Tailwind CSS.",
            "Practiced version control with Git/GitHub and collaborated on open-source contributions."
        ]
    },
    {
        title: "Open to Opportunities",
        company_name: "Seeking Internships & Entry-Level Positions",
        icon: github,
        iconBg: "#fbc3bc",
        date: "Looking for 2025",
        points: [
            "Actively seeking Java Developer internships and entry-level full-stack positions.",
            "Ready to contribute to backend development with Spring Boot and microservices architecture.",
            "Eager to work on DevOps automation using Docker, Kubernetes, and cloud technologies.",
            "Passionate about joining agile teams and contributing to real-world software solutions.",
            "Open to learning new technologies and frameworks as per company requirements."
        ]
    }
    
    // When you get experience, add new entries like this:
    /*
    {
        title: "Java Developer Intern",
        company_name: "Company Name",
        icon: java, // or company icon
        iconBg: "#b7e4c7",
        date: "Month YYYY - Month YYYY",
        points: [
            "Your experience point 1",
            "Your experience point 2",
            "Your experience point 3",
            "Your experience point 4"
        ]
    }
    */
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        action: () => alert('Phone: +91 7350165052'), 
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mohmmed-Zaid', 
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mohmmed-zaid/', 
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'TrackX',
        description: 'TrackX is a powerful backend API for expense tracking, designed to help users manage their finances by tracking income, expenses, and generating financial statistics.',
        link: 'https://github.com/Mohmmed-Zaid/TrackX', 
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Jobluu',
        description: 'Jobluu is a modern, full-stack job application platform that connects top talent with employers through a seamless and intuitive hiring experience.',
        link: 'https://jobluuui.onrender.com', 
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Move',
        description: 'Move a Map is an interactive mapping application that lets users explore, navigate, and customize maps effortlessly for better location-based experiences.',
        link: 'https://moveui.onrender.com/',  
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'ChatBox',
        description: 'Chatbox is a real-time messaging application that enables seamless, instant communication between users through an intuitive and responsive interface.',
        link: 'https://github.com/Mohmmed-Zaid/ChatBox',  
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'FileDropX',
        description: 'FileDropX is a sleek and secure web application that enables seamless and fast file sharing between users with a futuristic interface and real-time transfer animations.',
        link: 'https://github.com/Mohmmed-Zaid/FileDropX', 
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Sendora',
        description: 'Sendora is an AI-driven email extension that seamlessly integrates with Gmail to generate smart, context-aware email replies, enhancing productivity with just one click.',
        link: 'https://github.com/Mohmmed-Zaid/Sendora',  
    }
];
