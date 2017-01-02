
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};

const Forms = {
    text: 'Forms',
    link: '/forms',
    icon: 'icon-note',
    submenu: [
       
        {
            text: 'Validation',
            link: '/forms/validation'
        }
        
    ]
};
const headingMain = {
    text: 'Main Navigation',
    heading: true
};

const headingComponents = {
    text: 'Components',
    heading: true
};

const headingMore = {
    text: 'More',
    heading: true
};

export default [
    headingMain,
    Home,
    headingComponents,
    Forms,
    headingMore,
    
];
