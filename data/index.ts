export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Innovative developer, consistently exceeding expectations.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Living Christ Mission",
    des: "Sleek and responsive website with focus on user experience and accessibility.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://livingchristmission.org",
  },
  {
    id: 2,
    title: "Phis3project",
    des: "Dynamic website with intuitive navigation and visually appealing design.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://www.phis3project.org.ng/",
  },
  /* {
    id: 3,
    title: "Furnishop",
    des: "Modern furniture store landing page combining sleek design with cutting-edge technology.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://funiture-app.netlify.app/",
  }, */
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Simon Ifesinachi Elem on the MacSamuel Foundation website project, and I can confidently say that he is exceptional at his job. Simon demonstrated impressive promptness, a strong work ethic, and consistently met precise delivery times throughout the project. Even after the project was completed, he was always willing to offer support and address any issues that arose. I would be more than happy to work with Simon again, anytime. His professionalism and dedication make him an invaluable asset to any team.",
    name: "Engr Sam",
    title: "CEO MacSamuel Foundation ",
  },
  {
    quote:
      "Collaborating with Simon was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Simon's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Simon is the ideal partner.",
    name: "Chidalu Egonu",
    title: "Software Engineering Lead",
  },
  {
    quote:
      "Collaborating with Simon was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Simon's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Simon is the ideal partner.",
    name: "Ibidapo Adeolu",
    title: "Senior Software Developer",
  },
  
];

export const companies = [
  {
    id: 1,
    name: "MacSamuel Foundation",
    img: "/macsamuel.svg",
    nameImg: "MacSamuel Foundation",
  },
  {
    id: 2,
    name: "Math Academy Tutorials",
    img: "/math.svg",
    nameImg: "Math Academy Tutorials",
  },
  {
    id: 3,
    name: "Webastry",
    img: "/Webastry.svg",
    nameImg: "Webastry Design",
  },
  {
    id: 4,
    name: "utilify",
    img: "/utilify.svg",
    nameImg: "Utilify",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Wordpress Developer - MacSamuel Foundation",
    desc: "Assisted in the development of a web-based platform using WordPress, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Front-end Developer - Webastry Designs",
    desc: "Revamped customers websites, focusing on optimizing search engine performance and visibility.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer - Utilify Networks",
    desc: "I worked diligently on identifying and fixing bugs, which led to a 10% increase in user satisfaction.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Elemsimon",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Ifesinachisimon",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "linkedin.com/in/simon-elem",
  },
];

export type Product = {
  id: string;
  title: string;
  desc1: string;
  desc2: [{
    title: string
    content: string
  }]
  skills: [{
    title: string
    content: string
  }]
  desc3: string;
  thumbnail: string;
  link: string;
};

export const productDetails = [
  {
    id: 1,
    title: "Living Christ Mission",
    desc1: "I had the privilege of spearheading the development of the Living Christ Mission website, taking charge of 80% of the project tasks. The goal was to create a sleek and responsive online presence that not only reflected the mission’s core values but also provided an intuitive and engaging experience for its users.",
    desc2: [{
        title:"User Experience and Accessibility",
        content:"Ensuring that the website was accessible to all users was a top priority. I focused on creating an intuitive navigation structure and responsive design that works seamlessly across all devices. This commitment to user experience ensured that visitors could easily find the information they needed, whether they were on a desktop, tablet, or smartphone.",
      },
      {
        title:"Cutting-edge Design and Functionality",
        content:"I implemented modern design elements and functionalities that effectively showcased the Living Christ Mission’s brand identity and offerings. From dynamic content sections to visually appealing layouts, every detail was crafted to enhance the user’s journey.",
      }, 
      {
        title:"WooCommerce IntegrationWordPress and Elementor Expertise",
        content:"Leveraging my skills in WordPress and Elementor, I developed a highly customizable and easy-to-manage backend. This empowered the mission’s team to update content effortlessly and maintain the website without needing extensive technical knowledge.",
      }, 
    ],
    skills:[
      {
        title:"WooCommerce",
        content:"Integrated and customized WooCommerce to support the mission’s fundraising and merchandise efforts.",
      },
      {
        title:"WordPress",
        content:"Utilized WordPress for its robust content management capabilities and flexibility.",
      },
      {
        title:"Elementor",
        content:"Employed Elementor for its powerful drag-and-drop page building features, enabling a visually rich and dynamic website.",
      },
    ],
    desc3:"The Living Christ Mission website now stands as a testament to the power of thoughtful design and meticulous development. It successfully communicates the mission’s values, engages its audience, and supports its operational goals through a seamless online experience.",
    thumbnail: "/lcm.png",
    link:"https://livingchristmission.org/",
  },

  {
    id: 2,
    title: "CCW Electronics",
    desc1: "The CCW Electronics project was an exciting opportunity to create a state-of-the-art e-commerce platform tailored to the needs of tech enthusiasts and gadget lovers. My role was to engineer a sophisticated website that not only showcased a wide range of products but also provided a seamless and secure shopping experience.",
    desc2: [{
        title:"Seamless Navigation",
        content:"I focused on creating an intuitive and user-friendly navigation system. Customers can easily browse through various product categories, apply filters, and find exactly what they’re looking for without any hassle. This streamlined navigation significantly improved the overall user experience and encouraged prolonged site visits.",
      },
      {
        title:"Secure Transactions",
        content:"Security is paramount in e-commerce. I implemented robust security measures to protect customer data and ensure secure transactions. This included SSL encryption, secure payment gateways, and stringent data protection protocols, building trust with users and enhancing their confidence in the platform.",
      }, 
      {
        title:"Advanced E-commerce Features",
        content:"To optimize conversion rates and customer satisfaction, I integrated advanced features for product browsing, cart management, and checkout processes. Features like dynamic product displays, wish lists, and detailed product descriptions were incorporated to enhance the shopping experience. The cart and checkout process were designed to be smooth and efficient, reducing cart abandonment rates and improving sales.",
      }, 
    ],
    skills:[
      {
        title:"E-commerce SEO:",
        content:"Implemented SEO best practices to improve the website’s visibility on search engines, driving organic traffic and boosting sales.",
      },
      {
        title:"WooCommerce",
        content:"Leveraged WooCommerce for its powerful e-commerce capabilities, customizing it to fit the specific needs of CCW Electronics.",
      },
      {
        title:"WordPress",
        content:"Utilized WordPress for its flexibility and ease of content management, enabling the CCW team to manage products, promotions, and updates effortlessly.",
      },
    ],
    desc3:"The ccwelectronics website now stands as a robust e-commerce platform that seamlessly combines sophisticated design with powerful functionality. Enhanced user experience, secure transactions, and optimized conversion rates have driven customer satisfaction and sales growth. This project showcases my ability to deliver high-quality, user-centric e-commerce solutions that meet and exceed client expectations.",
    thumbnail: "/ccw.png",
    link:"https://ccwelectronics.com/",
  },

  {
    id: 3,
    title: "Phis3project",
    desc1: "The Phis3project website was an exciting endeavor where creativity and functionality met to create a vibrant online presence. My mission was to craft a dynamic website that not only looked visually stunning but also offered an intuitive and engaging user experience.",
    desc2: [{
        title:"Intuitive Navigation",
        content:"Navigation is the backbone of any website. For Phis3project, I designed an intuitive navigation system that allows users to effortlessly explore the site. Whether they are looking for information about the project, updates, or resources, users can find what they need quickly and easily.",
      },
      {
        title:"Visually Appealing Design",
        content:"Visual appeal was a key focus for this project. I employed modern design principles to create a website that is not only aesthetically pleasing but also reflective of the Phis3project’s ethos. Vibrant colors, engaging imagery, and thoughtful layouts work together to capture the visitor's attention and keep them engaged.",
      }, 
      {
        title:"Robust Functionalities",
        content:"Beyond looks, the Phis3project website needed to function seamlessly. I integrated robust functionalities such as interactive content, multimedia elements, and user-friendly forms. These features enhance user engagement, making the website a dynamic space for visitors.",
      }, 
    ],
    skills:[
      {
        title:"Search Engine Optimization (SEO)",
        content:"mplemented strategic SEO practices to increase the website’s visibility on search engines, driving organic traffic and boosting the project’s reach.",
      },
      {
        title:"WordPress",
        content:"Utilized WordPress for its versatility and powerful content management capabilities, ensuring the Phis3project team can easily update and manage the website.",
      },
    ],
    desc3:"The Phis3project website is now a dynamic and engaging platform that effectively showcases the project's vision and achievements. Its intuitive navigation and visually appealing design draw visitors in, while the robust functionalities ensure they stay engaged and find value in their visit. This project highlights my ability to blend creativity with technical expertise to deliver compelling web experiences that drive user engagement and conversion.",
    thumbnail: "/phis3project.png",
    link:"https://www.phis3project.org.ng/",
  },

  {
    id: 4,
    title: "Furnishop",
    desc1: "The Furnishop project was an exciting venture where I had the opportunity to merge modern design with cutting-edge technology to create a stunning online presence for a contemporary furniture store. The goal was to design and develop a website that not only showcased the beautiful furniture pieces but also provided a seamless and enjoyable user experience.",
    desc2: [{
        title:"Sleek Aesthetics",
        content:"For Furnishop, aesthetics were paramount. I designed the website with a clean and modern look, using a minimalist approach to highlight the beauty of the furniture. Every element, from the typography to the color scheme, was carefully chosen to create a visually pleasing experience that aligns with the brand's high-end image.",
      },
      {
        title:"Pleasing Design",
        content:"The design wasn't just about looks; it was about creating an atmosphere that reflects the brand's identity. I incorporated large, high-quality images, smooth animations, and a cohesive layout to make browsing the website a delight. The result is a digital space that feels as luxurious and stylish as the furniture it features.",
      }, 
      {
        title:"User-Centric Development",
        content:"Using React.js, I developed a website that is not only visually appealing but also highly functional. The site features dynamic content loading, ensuring fast and responsive interactions. This approach enhances the user experience, making navigation smooth and intuitive.",
      }, 
      {
        title:"Tailwind CSS",
        content:"To ensure the design was both beautiful and efficient, I utilized Tailwind CSS. This utility-first CSS framework allowed me to quickly build custom designs without writing extensive custom CSS, maintaining a clean and scalable codebase.",
      }, 
    ],
    skills:[
      {
        title:"Tailwind CSS",
        content:"Leveraged Tailwind CSS to create a highly customizable and responsive design that is both sleek and efficient.",
      },
      {
        title:"React.js",
        content:"Used React.js to develop a dynamic and interactive website, ensuring a smooth user experience with fast loading times and responsive interactions.",
      },
    ],
    desc3:"TThe Furnishop website now stands as a testament to the perfect blend of form and function. Its sleek aesthetics and pleasing design make it a joy to browse, while the user-centric development ensures a seamless and enjoyable shopping experience. This project showcases my ability to deliver high-quality, visually stunning websites that not only look good but also perform exceptionally well.",
    thumbnail: "/funishop.png",
    link:"https://funiture-app.netlify.app/",
  },

];

export const experienceDetails = [
  {
    id: 1,
    title: "MacSamuel Foundation",
    title2:"WordPress Developer",
    desc1: "During my tenure at MacSamuel Foundation as a WordPress Developer, I had the opportunity to leverage my skills in web development to drive significant improvements in efficiency and user engagement. My contributions streamlined the foundation's digital presence and enhanced the overall user experience, leading to measurable growth and success.",
    desc2: [{
        title:"Designed and Developed a Website Application",
        content:"One of my primary responsibilities was to design and develop a sophisticated website application for MacSamuel Foundation. This project was pivotal in transforming the foundation's online presence, resulting in a remarkable 20% increase in operational efficiency. By integrating intuitive navigation, responsive design, and robust functionalities, I ensured that the website catered seamlessly to the organisation's and its users' needs.",
      },
      {
        title:"Contributed to the Development of New Features",
        content:"Innovation and user engagement were at the forefront of my efforts. I actively contributed to developing new features that significantly enhanced the website's interactivity and user experience. These features were instrumental in increasing customer engagement by 15%, as they provided users with a more immersive and satisfying interaction with the foundation's content and services.",
      }, 
      {
        title:"Collaboration with International Teams",
        content:"Working collaboratively with teams based in London, I played a crucial role in refining and improving the foundation's digital strategies. This collaboration was instrumental in achieving a 25% increase in user engagement. By combining diverse perspectives and expertise, we were able to implement best practices and innovative solutions that resonated with a global audience.",
      }, 
    ],
    desc3:"My work at MacSamuel Foundation allowed me to harness my technical skills in WordPress development, including theme and plugin customization, and performance optimization. I utilized my proficiency in HTML, CSS, JavaScript, and PHP to create a seamless and efficient website that met the highest standards of functionality and design.",

    desc4:"The enhancements I brought to MacSamuel Foundation's digital platform not only improved internal workflows but also strengthened the foundation's connection with its community. The significant increases in efficiency and engagement reflect the positive impact of my contributions, and I am proud to have been a part of such meaningful progress.",
    
    desc5:"My experience at MacSamuel Foundation as a WordPress Developer was both challenging and rewarding. It allowed me to apply my technical skills to real-world problems, collaborate with talented professionals, and make a tangible difference in the foundation's success. I look forward to continuing to create impactful digital solutions and driving growth through innovative web development practices.",
  },

  {
    id: 3,
    title: "Webastry Designs",
    title2:"Front-end Developer",
    desc1: "As a Front-end Developer at Webastry Designs, I played a crucial role in enhancing the usability, visibility, and overall quality of our clients' websites. My responsibilities included collaborating with the UI/UX team, overseeing critical stages of the software development life cycle, and ensuring the seamless performance of each project.",
    desc2: [{
        title:"Collaborated with the UI/UX Team to Enhance Usability:",
        content:"One of my primary contributions at Webastry Designs was working closely with the UI/UX team to improve the usability of our clients' websites. Through iterative design reviews and user testing, we identified and implemented enhancements that led to a 20% increase in user experience. My feedback and testing ensured that each interface was intuitive, visually appealing, and user-friendly.",
      },
      {
        title:"Spearheaded Website Revamps for Better SEO and Visibility",
        content:"I took the lead in revamping customers' websites, focusing on optimizing their search engine performance and visibility. By applying best practices in front-end development and collaborating with SEO specialists, we achieved a 10% increase in the website's visibility. This not only enhanced the online presence of our clients but also contributed to higher engagement and traffic.",
      }, 
      {
        title:"Oversaw Key Phases of the Software Development Life Cycle",
        content:"At Webastry Designs, I was responsible for overseeing 20% of the software development life cycle, which included design reviews, testing, and deployment. My role was pivotal in ensuring that each project was delivered on time and met the highest standards of quality. By conducting thorough testing and providing critical feedback, I ensured that the final product was robust, efficient, and met client expectations.",
      }, 
    ],
    desc3:"My tenure at Webastry Designs allowed me to hone my skills in front-end development, with a particular focus on HTML, CSS, JavaScript, and modern frameworks. My ability to collaborate effectively with design teams and understand user needs played a significant role in the success of our projects. Additionally, my attention to detail in testing and optimization contributed to the delivery of high-quality software solutions.",

    desc4:"The improvements I facilitated in usability and SEO had a tangible impact on our clients' satisfaction and success. The increased user experience and visibility not only strengthened client relationships but also showcased Webastry Designs' commitment to excellence. My contributions in overseeing the development process ensured that each project was meticulously reviewed and flawlessly executed.",
    
    desc5:"Working as a Front-end Developer at Webastry Designs was a highly rewarding experience that underscored the importance of collaboration, attention to detail, and user-centric design. My efforts in enhancing usability, visibility, and quality have left a lasting positive impact on our clients' digital presence. I am excited to continue leveraging my front-end development skills to create exceptional web experiences and drive success in future endeavors.",
  },

  {
    id: 4,
    title: "Utilify Networks",
    title2:"Software Engineer",
    desc1: "During my tenure as a Software Engineer at Utilify Networks, I played an integral role in the development, testing, and optimization of a utility buying application. My contributions were pivotal in reducing bug fix time, enhancing system performance, and keeping the platform aligned with evolving technology trends.",
    desc2: [{
        title:"Collaborated on Utility Buying Application Development",
        content:"At Utilify Networks, I was deeply involved in the development of a utility buying application, a platform that allowed users to conveniently purchase utilities such as electricity, DSTV subscriptions, and data. My role was primarily focused on providing critical feedback, thorough testing, and ensuring the application's seamless functionality. These efforts resulted in a 15% reduction in bug fix time, making the application more reliable and efficient for users.",
      },
      {
        title:"Improved System Performance and User Satisfaction",
        content:"In addition to my development responsibilities, I worked diligently on identifying and fixing bugs, which led to a 10% increase in user satisfaction. By addressing performance issues and ensuring the smooth operation of the application, I helped create a more enjoyable and dependable user experience. My proactive approach to problem-solving and optimization was instrumental in maintaining high standards of performance.",
      }, 
      {
        title:"Staying Ahead with Technology Trends",
        content:"One of the key aspects of my role was to stay updated with the latest technology trends and incorporate them into our development process. By keeping up with 100% of evolving trends, I was able to identify new technologies that significantly enhanced the quality and performance of our website. This forward-thinking approach ensured that Utilify Networks remained competitive and innovative in a rapidly changing technological landscape.",
      }, 
    ],
    desc3:"My position at Utilify Networks allowed me to apply and expand my technical skills in software engineering, with a strong emphasis on testing, optimization, and performance enhancement. I leveraged my knowledge of modern development practices and technologies to contribute effectively to the project's success. My keen eye for detail and commitment to quality were crucial in delivering a robust and high-performing application.",

    desc4:"The improvements I brought to the utility buying application had a substantial impact on Utilify Networks' operational efficiency and customer satisfaction. The reduced bug fix time and increased system performance not only enhanced the user experience but also demonstrated the company's commitment to excellence. My efforts in staying abreast of technology trends ensured that the platform remained at the forefront of innovation.",
    
    desc5:"Working as a Software Engineer at Utilify Networks was a highly fulfilling experience that highlighted the importance of collaboration, continuous learning, and meticulous testing. My contributions to the development and optimization of the utility buying application have left a lasting positive impact on the company's service quality and user satisfaction. I am excited to continue leveraging my software engineering skills to drive innovation and excellence in future projects.",
  },
];

export const imageSlider = [
  {
    id:1,
    image:'/lcm.png',
  },
  {
    id:2,
    image:'/ccw.png',
  },
  {
    id:3,
    image:'/phis3project.png',
  },
  {
    id:4,
    image:'/funishop.png',
  }
  
];

export const iconSlider = [
  {
    id:1,
    image:'/macsamuel.svg',
  },
  {
    id:2,
    image:'/math.svg',
  },
  {
    id:3,
    image:'/Webastry.svg',
  },
  {
    id:4,
    image:'/utilify.svg',
  }
  
]

export type Post = {
  id: string;
  title: string;
  content: string;
  date: string;
};

export const posts: Post[] = [
{
  id: '1',
  title: 'First Blog Post',
  content: 'This is the content of the first blog post.',
  date: '2024-01-01',
},
{
  id: '2',
  title: 'Second Blog Post',
  content: 'This is the content of the second blog post.',
  date: '2024-02-01',
},
// Add more posts as needed
];