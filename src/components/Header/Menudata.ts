//exports data to be used in the menu
//data is an array of objects
//each object has a title and an array of link objects
//each link object has a title and a path
//examples:
//{
//  title: 'Home',
//  links: [
//    {
//      title: 'Home',
//      path: '/'
//    },
//    {
//      title: 'About',
//      path: '/about'
//    }]

export const data = [
    {
        title: 'Watches',
        links: [
            { title: 'All Watches', path: '/watches' },
            { title: 'New Arrivals', path: '/watches/new-arrivals' },
            { title: 'Best Sellers', path: '/watches/best-sellers' },
            { title: 'Sale', path: '/watches/sale' },
            { title: 'Smart watches', path: '/watches/smart' },
            { title: 'Digital watches', path: '/watches/digital' },
            { title: 'Analog watches', path: '/watches/analog' }
            
        ]
    },
    {
        // Collections are Aaren, ancher, grenen, holst, skagen, and limited edition
        title: 'Collections',
        links: [
            { title: 'All Collections', path: '/collections' },
            { title: 'Aaren', path: '/collections/aaren' },
            { title: 'Ancher', path: '/collections/ancher' },
            { title: 'Grenen', path: '/collections/grenen' },
            { title: 'Holst', path: '/collections/holst' },
            { title: 'Skagen', path: '/collections/skagen' },
            { title: 'Limited Edition', path: '/collections/limited-edition' }
        ]
    },
            
];