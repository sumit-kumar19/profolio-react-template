// import React from 'react';
// import { TbBrandLeetcode } from "react-icons/tb";
// import { SiCodeforces, SiCodechef, SiCodingninjas, SiGeeksforgeeks } from "react-icons/si";
// import { FaEarlybirds } from "react-icons/fa";

// function About() {
//     const resumeLink = "https://drive.google.com/file/d/1lU36knFkFUhHfL63IsUjCHvctEVdr8xC/view?usp=drive_link";
//     return (
//         <div className='container mx-auto p-5' id='about'>
//             <div className='about-container flex flex-col text-left'>
//                 <h1 className='text-4xl font-bold mb-5'>About</h1>
//                 <div className='about-content text-lg leading-7 text-gray-300'>
//                     <p className='mb-4'>👨‍💻 Hi, I'm <strong>Sumit Kumar</strong>, a Software Engineer with over 3 years of experience in software development and Full-stack development.</p>
//                     <p className='mb-4'>🎓 Currently pursuing my Bachelor of Technology in Computer Science at LIET, I'm all about building reliable, scalable software that makes a difference.</p>
//                     <p className='mb-4'>🛠 From full-stack development to software development, I've led enterprise-level projects that streamline operations and deliver real impact.</p>
//                     <p className='mb-4'>🔧 I enjoy automating workflows, optimizing systems, and turning complex challenges into real results. 📈</p>
//                     <p className='mb-4'>💡 I'm always curious and constantly learning.</p>
//                     <p className='mb-4'>See my resume and coding profiles.</p>

//                     <div className='action-section flex items-center mt-6 flex-wrap'>
//                         <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="resume-button inline-block px-6 py-3 bg-blue-500 text-white text-base font-bold rounded transition duration-300 ease-in-out hover:bg-blue-700 mr-4">
//                             View Resume
//                         </a>
//                         <div className='icon-container flex items-center ml-6 flex-wrap'>
//                             {[
//                                 { href: "https://leetcode.com/u/singhnavneet/", Icon: TbBrandLeetcode, text: "LeetCode" },
//                                 { href: "https://codeforces.com/profile/singhnavneet", Icon: SiCodeforces, text: "Codeforces" },
//                                 { href: "https://www.geeksforgeeks.org/user/singhnavneet/", Icon: SiGeeksforgeeks, text: "GeeksforGeeks" },
//                                 { href: "https://www.codechef.com/users/singhnavneet", Icon: SiCodechef, text: "CodeChef" },
//                                 { href: "https://www.naukri.com/code360/profile/singhnavneet", Icon: SiCodingninjas, text: "CodingNinjas" },
//                                 { href: "https://codolio.com/profile/singhnavneet", Icon: FaEarlybirds, text: "Codolio" },
//                             ].map(({ href, Icon, text }, index) => (
//                                 <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="icon group relative mr-4 text-2xl text-gray-300 transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer">
//                                     <Icon size={50}/>
//                                     <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none whitespace-nowrap group-hover:opacity-100 mb-2">
//                                         {text}
//                                     </span>
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;
import React from 'react';
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodeforces, SiCodechef, SiCodingninjas, SiGeeksforgeeks } from "react-icons/si";
import { FaEarlybirds } from "react-icons/fa";
function About() {
    const resume = "/src/assets/image/Sumit_resume.pdf"; 

    const resumeLink ="https://drive.google.com/file/d/14a_mVjgg0nnseNiiidBFceE8UhUH-vU8/view?usp=sharing";
    return (
        <div className='container mx-auto p-5 bg-background text-gray-800 dark:text-gray-200 transition-colors duration-200' id='about'>
            <div className='about-container flex flex-col text-left'>
                <h1 className='text-4xl font-bold mb-5 text-gray-900 dark:text-white'>About</h1>
                <div className='about-content text-lg leading-7'>
                    <p className='mb-4'>👨‍💻 Hi, I'm <strong>Sumit Kumar</strong>, a Software Engineer with over 3 years of experience in software development and Full-stack development.</p>
                    <p className='mb-4'>🎓 Currently pursuing my Bachelor of Technology in Computer Science at LIET, I'm all about building reliable, scalable software that makes a difference.</p>
                    <p className='mb-4'>🛠 From full-stack development to software development, I've led enterprise-level projects that streamline operations and deliver real impact.</p>
                    <p className='mb-4'>🔧 I enjoy automating workflows, optimizing systems, and turning complex challenges into real results. 📈</p>
                    <p className='mb-4'>💡 I'm always curious and constantly learning.</p>
                    <p className='mb-4'>See my resume and coding profiles.</p>

                    <div className='action-section flex items-center mt-6 flex-wrap'>
                        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="resume-button inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white text-base font-bold rounded transition duration-300 ease-in-out hover:bg-blue-700 dark:hover:bg-blue-600 mr-4">
                            View Resume
                        </a>
                        <div className='icon-container flex items-center ml-6 flex-wrap'>
                            {[
                                { href: "https://leetcode.com/u/sumitkumar-/", Icon: TbBrandLeetcode, text: "LeetCode" },
                                { href: "https://codeforces.com/profile/sumitKumar0", Icon: SiCodeforces, text: "Codeforces" },
                                { href: "https://www.geeksforgeeks.org/user/sumitkumar04/", Icon: SiGeeksforgeeks, text: "GeeksforGeeks" },
                                { href: "https://www.codechef.com/users/sumit_kzx", Icon: SiCodechef, text: "CodeChef" },
                                { href: "https://www.naukri.com/code360/profile/sumitkumar06", Icon: SiCodingninjas, text: "CodingNinjas" },
                                { href: "https://codolio.com/profile/sum_it.", Icon: FaEarlybirds, text: "Codolio" },
                            ].map(({ href, Icon, text }, index) => (
                                <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="icon group relative mr-4 text-2xl text-gray-600 dark:text-gray-400 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                                    <Icon size={50}/>
                                    <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-sm px-2 py-1 rounded opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none whitespace-nowrap group-hover:opacity-100 mb-2">
                                        {text}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

