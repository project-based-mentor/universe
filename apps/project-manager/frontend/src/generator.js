const createIpsum = require('corporate-ipsum');
const templates = [
    () => `${random(existingProducts)} for ${randomTarget()}`,
    () => `${random(existingProducts)} for ${randomTarget()} in order to ${randomPurpose()}`,
    () => `An app for ${randomTarget()} in order to ${randomPurpose()}`
];

const existingProducts = [
    'Netflix',
    'Uber',
    'Facebook',
    'A messaging app',
    'WhatsApp',
    'Yelp',
    'Food delivery',
    'Search engine'
];

const purpose = [
    'create a startup together',
    'be less loneley',
    'have fun together',
    'get rich',
    'gain more freedom',
    'rent bicycles together',
    'rent cars together',
    'carpool',
    'lose weight',
    'spend the holidays together'
]

const target = [
    'firefigthers',
    'tourists',
    'taxi drivers',
    'golfers',
    'singles',
    'Dutch people',
];

const modifiers = [
    'poor',
    'rich',
    'smart',
    'Dutch',
    'English',
    'German',
    ''
];

const categories = [
    'Android',
    'ios',
    'webapp',
    'server',
    'tools',
    'project management'
]

const randomTarget = () =>
    `${random(modifiers)} ${random(target)}`.trim()

const randomPurpose = () => random(purpose);
const randomCategory = () => random(categories);
const random = (items) =>
    items[Math.floor(Math.random() * items.length)];

let i = 0;
const projects = [];
while (i < 200) {
    projects.push({
        id: i.toString(),
        title: random(templates)(),
        description: createIpsum(),
        likes: Math.floor(Math.random() * 100),
        comments: 0,
        createdAt: "2020-12-04T06:23:26.000+01:00",
        category: randomCategory(),
    });
    i++;
}
process.stdout.write(JSON.stringify(projects));
