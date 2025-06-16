import { hasbasoft, zyntric } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    reactnative,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
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
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: reactnative,
        name: "ReactNative",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "FrontEnd Developer - Intern",
        company_name: "Hasbasoft Pvt. Ltd.",
        icon: hasbasoft,
        iconBg: "#118",
        date: "October 2021 - April 2022",
        points: [
            "Building and maintaining user interfaces using HTML, CSS, and JavaScript",
            "Collaborating with design teams to translate UI/UX designs into interactive and visually appealing web pages.",
            "Ensuring optimal performance, responsiveness, and cross-browser compatibility for a seamless user experience."
        ],
    },
    {
        title: "BackEnd Developer - Intern",
        company_name: "Hasbasoft Pvt. Ltd.",
        icon: hasbasoft,
        iconBg: "#118",
        date: "May 2022 - November 2022",
        points: [
            "Designing, developing, and maintaining server-side logic, databases, and APIs to support web applications.",
            "Collaborating with frontend developers to integrate user-facing elements with server-side functionality.",
            "Ensuring the scalability, security, and performance of backend systems while optimizing database queries and data storage."
        ],
    },
    {
        title: "MERN Stack Developer- Intern",
        company_name: "Hasbasoft Pvt. Ltd.",
        icon: hasbasoft,
        iconBg: "#118",
        date: "December 2022 - February 2024",
        points: [
            "Developing and maintaining full-stack applications using MongoDB, Express.js, React.js, and Node.js to deliver end-to-end solutions.",
            "Collaborating with frontend and backend teams to integrate APIs and ensure seamless data flow between client and server.",
            "Optimizing application performance, implementing security best practices, and ensuring responsiveness across various devices and browsers."
        ],
    },
    {
        title: "FrontEnd Developer",
        company_name: "Zyntric Tech",
        icon: zyntric,
        iconBg: "#000000",
        date: "February 2024 - April 2025",
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
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/dev-AAKIF',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://in.linkedin.com/in/dev-aakif',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'MERN Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: "https://github.com/dev-AAKIF/MERN-SocialNetwork-Project",
        githublink: 'https://github.com/linkwillbeupdatedsoon',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: '36 Studios Clone using GSAP',
        description: 'Developed a dynamic and interactive web application that replicates the core features of 36 Studios using GSAP for smooth animations.',
        link: 'https://dev-akif-36studios-clone.vercel.app/',
        githublink: "https://github.com/dev-AAKIF/gsap-animated-36studios-clone",

    },
    {
        iconUrl: car,
        theme: 'btn-back-black',
        name: 'Netflix Clone',
        description: 'Developed a Netflix clone that replicates the core features of the popular streaming platform, allowing users to browse and watch movies and TV shows.',
        link: 'https://dev-akif-netflixclone.vercel.app/',
        githublink: "https://github.com/dev-AAKIF/netflixclone.github.io",
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Typing Speed Test',
        description: 'Built a Typing Speed Test application that allows users to measure their typing speed and accuracy in real-time. The app presents users to calculate their words per minute (WPM) and accuracy rate.',
        link: 'https://dev-akif-typing-test.vercel.app/',
        githublink: "https://github.com/dev-AAKIF/Typing-master-in-js.github-io",

    },
    {
        iconUrl: estate,
        theme: 'btn-back-blue',
        name: 'Chat App using Next.js',
        description: 'Developed a Chat Forum App using Next.js, where multiple users can join a single forum and chat together in real-time.',
        link: 'https://dev-akif-chat-app-using-nextjs.vercel.app/',
        githublink: "https://github.com/dev-AAKIF/chat-app-using-nextjs",
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-black',
        name: 'Glassmorphism Calendar',
        description: 'Developed a Glassmorphism Calendar that combines modern design trends with functional date management. The calendar features a sleek glassmorphism design, where frosted glass effects and soft blur backgrounds create an elegant and visually appealing interface.',
        link: "https://dev-akif-glassmorphism-calendar.vercel.app/",
        githublink: 'https://github.com/dev-AAKIF/Glassmorphism-Calendar',
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'Animated Login Signup Form',
        description: 'Created an Animated Login/Signup Form that provides a seamless and visually engaging user experience. The form uses smooth transitions and animations to switch between the login and signup modes, ensuring users can easily navigate between the two.',
        link: "https://dev-akif-animated-login-signup-form.vercel.app/",
        githublink: 'https://github.com/dev-AAKIF/ANIMATED-LOGIN-SIGNUP-FORM',
    },
    

    
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];