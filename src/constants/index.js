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
        type: "Caching", // Corrected typo
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

export const experiences = [
    {
        title: "Java Developer",
        company_name: "______",
        icon: java,
        iconBg: "#accbe1",
        date: "March  XXXX - Present",
        points: [
            "Built and maintained a customer rewards web app to enhance user experience.",
            "Collaborated with designers and product managers to develop new features.",
            "Improved performance, reducing page load time by 20%.",
            "Reviewed code and shared React.js best practices with peers."
         ]
         
    },
    {
        title: "Devops & Full Stack Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2027 - Feb 2028",
        points: [
            "Developed backend services for vehicle control and monitoring in a mobile app.",
            "Integrated third-party APIs for navigation and vehicle diagnostics.",
            "Optimized performance by improving state management and reducing latency.",
            "Collaborated in an agile team, participating in sprint planning and daily stand-ups."
         ],
         
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2028 - Jan 2030",
        points: [
            "Built and maintained e-commerce websites for Shopify merchants using React.js and Liquid.", // More specific
            "Developed custom Shopify themes and apps to meet specific client requirements.",
            "Optimized website performance for speed and scalability, ensuring a smooth shopping experience.",
            "Provided technical support and troubleshooting assistance to Shopify merchants.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2030 - feb 2031",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
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
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: '/', // Replace with your actual project GitHub URL
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: '/',  // Replace with your actual project GitHub URL
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: '/',  // Replace with your actual project GitHub URL
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: '/',  // Replace with your actual project GitHub URL
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: '/',  // Replace with your actual project GitHub URL
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: '/',  // Replace with your actual project GitHub URL
    }
];
