const patterns = [
    // patterns created with https://pattern.monster

    {
        name: 'pattern1',
        image: './assets/patterns/pattern1.png',
        connections: [{name: 'pattern2', anchor:[0.5, 0.5]}]
    },
    {
        name: 'pattern2',
        image: './assets/patterns/pattern2.png',
        connections: [{name: 'pattern3', anchor:[0.5, 0.5]}]
    },
    {
        name: 'pattern3',
        image: './assets/patterns/pattern3.png',
        connections: [{name: 'pattern4', anchor:[0.5, 0.5]}]
    },
    {
        name: 'pattern4',
        image: './assets/patterns/pattern4.png',
        connections: [{name: 'pattern5', anchor:[0.5, 0.5]}]
    },
    {
        name: 'pattern5',
        image: './assets/patterns/pattern5.png',
        connections: [{name: 'pattern6', anchor:[0.5, 0.5]}]
    },
    {
        name: 'pattern6',
        image: './assets/patterns/pattern6.png',
        connections: [{name: 'pattern7', anchor:[0.5, 0.5]}]
    },
    {
        name: 'pattern7',
        image: './assets/patterns/pattern7.png',
        connections: [{name: 'pattern1', anchor:[0.5, 0.5]}]
    },
];

const tarotCards = []

export { patterns, tarotCards };