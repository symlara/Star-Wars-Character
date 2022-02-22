import React from 'react';
import Project from '../Project';



function Portfolio() {

    const projects = [
        {
            name: 'About Allen Stone',
            description:"This app is a quick source to all things Allen Stone, who is a Pop/Soul Musician. It's a source for Al's music, and links to his social media accounts!",
            image: 'allenstone.jpg',
            technologies: [
                'Instagram API',
                'Deezer API',
                'Tachyons CSS',
                'JQuery',
                'JavaScript',
                'HTML/CSS',
                'LocalStorage',
                'Modals'
            ],
            github: 'https://github.com/symlara/about-allen-project',
            deployedLink: 'https://symlara.github.io/about-allen-project/',
        },
        {
            name: "H.E.R FanPage",
            description: "Fan Site created for multi-grammy winner H.E.R. This site will stand as a source for all things H.E.R, including Shows, interviews, Tour, and Miscellaneous things.",
            image: 'Back_Of_My_Mind_By_H.E.R.png',
            technologies: [
                'Deezer API',
                'HTML/CSS',
                'JavaScript',
                'Express',
                'Node.js'
            ],
            github: 'https://github.com/symlara/HERFan',
            deployedLink: 'https://symlara.github.io/HERFan/'
        },
        {
            name: "FutureVU",
            description:  "This project is an ongoing initiative being completed by Vanderbilt University. There are multiple stakeholders involved in the building/look, and feel of this project one of them primarily being the Digital Stragies team I am a part of. I along with my teammates have built out almost all of the pages you see on the sites currently made public in the new look and feel of the Vanderbilt web presense. This project has allowed me to grow in the field of web content management, as well as get stronger in understanding the strategical side of content and where it fits on a page/site.",
            image: "vanderbilt-homepage.png",
            technologies: [
                'HTML/CSS',
                'JavaScript'
            ],
            github: 'https://github.com/symlara/Portfolio',
            deployedLink: 'https://symlara.github.io/Portfolio/'

        },
        {
            name: 'Alien Generator',
            description: "This app was created to help to inspire game masters, artists, and players in the endeavor of character creation and design. Each lifeform will be generated with a random backstory, physical description, and list of abilities!",
            image: 'lifeform_background.jpg',
            technologies:
            ['HTML/CSS', 'mySQL', 'Sequalize', 'random-js', 'express', 'ejs'],
            github: 'https://github.com/symlara/alien-generator',
            deployedLink: 'http://alien-generator.herokuapp.com/',
        },
        {
            name: 'Blog Site',
            description: "This is a personal blog site created with MySQl, Sequalize, Express, Express Session, and Handlebars.",
            image: '112373497-053d4900-8caf-11eb-9127-f38ffec41fe1.png',
            technologies: ['mySQL', 'Sequalize', 'Express', 'Express Seesion', 'Handlebars', 'Jest', 'Connect Session Sequalize'
        ],
        github: 'https://github.com/symlara/blog-site/', 
        deployedLink: 'https://damp-reef-76694.herokuapp.com/'
        },
        {
            name: 'Note Taker',
            description: "This application is used to generate notes.",
            image: 'note-taker.png',
            technologies: ['Express.js', 'npm uuid package', 'Node.js'],
            github: 'https://github.com/symlara/Note-Taker',
            deployedLink: 'https://note-creater.herokuapp.com/notes'
        },
        {
            name: 'Password Generator',
            description: "This application is used to generate a random password using JavaScript",
            image: 'password-generator.png',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/symlara/password-assistant',
            deployedLink: 'https://symlara.github.io/password-assistant/'
        }
	];

    
    return (
        <section>

            <div>
                <ul className="flex-row">
                 <li>
                     <Project projects={projects[0]}></Project>
                   </li>
               </ul>
            </div> 
         </section>
    );
}

export default Portfolio;