import { student_work_shop, expert_guidance, beat_web_ui, graduates, working_professionals, college_student, school_students, media_01, media_02, media_03, media_04, customer1, customer2 } from "../assets/images";
import { FacebookLogo, XLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from "../assets/icons";

export const products = [
    {
        label: "Student Work Shop",
        imgPath: student_work_shop,
    },
    {
        label: "Expert Guidance",
        imgPath: expert_guidance,
    },
    {
        label: "Best Web UI",
        imgPath: beat_web_ui,
    },
    {
        label: "Best Web UI 02",
        imgPath: beat_web_ui,
    },
    {
        label: "Student Work Shop",
        imgPath: student_work_shop,
    },
];


export const students = [
    {
        content: "School Student",
        imgPath: school_students,
    },
    {
        content: "College Student",
        imgPath: college_student,
    },
    {
        content: "Working Professionals",
        imgPath: working_professionals,
    },
    {
        content: "Graduates",
        imgPath: graduates,
    },
    
];


export const media = [
    {
        category: "News",
        heading: "Lorem ipsum dolor sit amet consectetur",
        content: "Lorem ipsum dolor sit amet consectur. A consequat in purus",
        imgPath: media_01,
    },
    {
        category: "Blogs",
        heading: "Lorem ipsum dolor sit amet consectetur",
        content: "Lorem ipsum dolor sit amet consectur. A consequat in purus",
        imgPath: media_02,
    },
    {
        category: "Podcast",
        heading: "Lorem ipsum dolor sit amet consectetur",
        content: "Lorem ipsum dolor sit amet consectur. A consequat in purus",
        imgPath: media_03,
    },
    {
        category: "Blogs",
        heading: "Lorem ipsum dolor sit amet consectetur",
        content: "Lorem ipsum dolor sit amet consectur. A consequat in purus",
        imgPath: media_04,
    },
    
];

export const faq = [
    {
        question: "What is this platform?",
        answer: "Our platform is a comprehensive solution designed to help students search, compare, and apply to universities and courses worldwide. We provide detailed information about institutions, programs, and admission requirements to make your educational journey easier."
    },
    {
        question: "Is the platform free to use?",
        answer: "Yes, our core features are completely free for all users. This includes university searches, basic comparisons, and access to essential information. Some premium features may require a subscription, but you can accomplish most tasks without any cost."
    },
    {
        question: "How do I create an account?",
        answer: "Creating an account is simple and quick. Click the 'Sign Up' button in the top right corner, enter your email address and create a password. You can also sign up using your Google account for faster access. Once registered, you'll have access to all our features."
    },
    {
        question: "Can I save my favorite universities or courses?",
        answer: "Absolutely! Once you're logged in, you can save any university or course by clicking the bookmark icon. Access your saved items anytime from your personal dashboard. You can also organize them into custom lists and receive updates about your saved institutions."
    },
    {
        question: "How do I search for universities?",
        answer: "Use our advanced search feature to find universities based on various criteria including location, program type, tuition costs, and admission requirements. You can also filter results by ranking, acceptance rate, and other important factors to find the perfect match for your needs."
    },
    
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Robert James',
        position: 'UI/UX Desingner at University',
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Loe Das',
        position: 'Software Developer at Cisco',
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];

export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Loan Assistance", link: "/" },
            { name: "Visa Assistance", link: "/" },
            { name: "Language Prep", link: "/" },
            { name: "Test Prep", link: "/" },
            { name: "Councelling", link: "/" },
            { name: "Scholarship", link: "/" },
        ],
    },
    {
        title: "Quick Links",
        links: [
            { name: "About us", link: "/" },
            { name: "News", link: "/" },
            { name: "Blogs", link: "/" },
            { name: "FAQ's", link: "/" },
            { name: "Contact Us", link: "/" },
        ],
    },
   
];

export const socialMedia = [
    { src: FacebookLogo, alt: "facebook logo" },
    { src: XLogo, alt: "twitter logo" },
    { src: InstagramLogo, alt: "instagram logo" },
    { src: YoutubeLogo, alt: "instagram logo" },
    { src: LinkedinLogo, alt: "instagram logo" },
];