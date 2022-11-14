import jobportal from './images/jobportal.png';
// import clientRolodex from './images/client-rolodex.png';
import astronomyWorld from './images/astronomy_world.png';
import spaceTourism from './images/space-tourism.png'

export const projects = [
    {
        title: 'Job Search Engine',
        subtitle: 'Whether you are searching for a job, or looking for potential employees, Job Portal connects both ends of the job search market',
        description: 'A job search engine built with materialio, javascript, css, and html',
        image: jobportal,
        link: 'https://job-search-portal-5.herokuapp.com/',
        github: 'https://github.com/Esun94/Job_Portal'
    },
    {
        title: 'Astronomy World',
        subtitle: 'One stop webpage using Nasa API to display interesting facts and live updates on planets/comets/meteors in our solar system.',
        description: 'Informative landing page using NASA API',
        image: astronomyWorld,
        link: 'https://kjphelps90.github.io/NASA-daily-astronomy/',
        github: 'https://github.com/kjphelps90/NASA-daily-astronomy'
    },
    {
        title: 'Space Tourism',
        subtitle: 'Take a look at some intersting facts about neighboring planets, the ISS Crew, and the technology used to expand our horizons',
        description: 'Built with React and Material UI 5 to be fast, responsive, with a modern feel',
        image: spaceTourism,
        link: 'https://takuyamats.github.io/space-tourism/',
        github: 'https://github.com/TakuyaMats/space-tourism'
    },
    // {
    //     title: 'Client Rolodex',
    //     subtitle: 'Filter through a preset data-set of clients by name',
    //     description: 'A simple rolodex built with React, and CSS styling. User types into search bar desired client by name, and watch as results filter in real time',
    //     image: clientRolodex,
    //     link: '',
    //     github: 'https://github.com/Esun94/Client_Rolodex'
    // }
]

export const skills = [
    'Javascript',
    'Node.js',
    'React',
    'MongoDB',
    'Express',
    'jQuery',
    'SQL',
    'MySQL',
    // 'Python'
];