import Person from './Person.js';
"use strict"

let timeline = gsap.timeline();

let image = document.querySelector('#person-photo');
let name = document.querySelector('.person-name');
let profession = document.querySelector('.profession');
let reviewCont = document.querySelector('.content-review');
let index = 0;


// An array that contains all the website reviews including the photos, names, and profession.
const websiteReviews = [

    {
        person: new Person('Nads', 'Web Developer', 'This app helped me to do a lot of stuff! It makes me more productive and motivated to do programming stuff!'), imageSrc: '\/Images\/Nads2.jpg'
    },
    {
        person: new Person('Alyana', 'Web Designer', 'Designing a website is tough and rough, BUT! this website helped me to organize my time!'), imageSrc: '\/Images\/Alyana.jpg'
    },
    {
        person: new Person('Benzer', 'Web Developer', 'This app helped me to do a lot of stuff! It makes me more productive and motivated to do programming stuff!'), imageSrc: '\/Images\/Benzer.jpg'
    },
    {
        person: new Person('Diana', 'Civil Engineer', 'This app helped me to do a lot of stuff! It makes me more productive and motivated to do programming stuff!'), imageSrc: '\/Images\/Diana May.jpg'
    },
    {
        person: new Person('Dicky', 'Software Engineer', 'This app helped me to do a lot of stuff! It makes me more productive and motivated to do programming stuff!'), imageSrc: '\/Images\/Dicky.jpg'
    },
    {
        person: new Person('Lenard', 'Data Analyst', 'This app helped me to do a lot of stuff! It makes me more productive and motivated to do programming stuff!'), imageSrc: '\/Images\/Lenard.jpg'
    },
    {
        person: new Person('NIKI', 'Singer/Songwriter', 'This app helped me to do a lot of stuff! It makes me more productive and motivated to do programming stuff!'), imageSrc: '\/Images\/Love.jpg'
    },
    {
        person: new Person('Rachel', 'Certified Public Accountant', 'This app helped me to do a lot of stuff! It makes me more productive and motivated to do programming stuff!'), imageSrc: '\/Images\/Rachel.jpg'
    },
    {
        person: new Person('RC', 'System Analyst', 'This app helped me to do a lot of stuff! It makes me more productive and motivated to do programming stuff!'), imageSrc: '\/Images\/RC.jpg'
    },
]

document.querySelector('#forward').addEventListener('click', () => {

    index++;
    // conditions that checks if the index is greather than the (length - 1) of an array.
    index = index > websiteReviews.length - 1 ? 0 : index;

    image.src = websiteReviews[index].imageSrc;
    name.textContent = websiteReviews[index].person.getName();
    profession.textContent = websiteReviews[index].person.getProfession();
    reviewCont.textContent = websiteReviews[index].person.getReview();

    // Check if the animation is not active to avoid double-clicking to the button.
    if (!timeline.isActive()) {
        timeline.from('#person-photo', {x: "100%", opacity: 0, duration: .3, ease: "power1.out"});
        timeline.from('#quot-logo', {x: "100%", opacity: 0, duration: .3, ease: "power1.out"}, "-=.3");
        timeline.from('.person-name', {x: "100%", opacity: 0, duration: .3, ease: "power1.out"});
        timeline.from('.profession', {x: "100%", opacity: 0, duration: .3, ease: "power1.out"}, "-=.3");
        timeline.from('.content-review', {x: "100%", opacity: 0, duration: .3, ease: "power1.out"}, "-=.3");
    }
});

document.querySelector('#backward').addEventListener('click', () => {

    index--;
    // conditions that checks if the index is less than 0
    index = index < 0 ? websiteReviews.length - 1 : index;

    image.src = websiteReviews[index].imageSrc;
    name.textContent = websiteReviews[index].person.getName();
    profession.textContent = websiteReviews[index].person.getProfession();
    reviewCont.textContent = websiteReviews[index].person.getReview();

    // Check if the animation is not active to avoid double-clicking to the button.
    if (!timeline.isActive()) {
        timeline.from('#person-photo', {x: "-100%", opacity: 0, duration: .3, ease: "power1.out"});
        timeline.from('#quot-logo', {x: "-100%", opacity: 0, duration: .3, ease: "power1.out"}, "-=.3");
        timeline.from('.person-name', {x: "-100%", opacity: 0, duration: .3, ease: "power1.out"});
        timeline.from('.profession', {x: "-100%", opacity: 0, duration: .3, ease: "power1.out"}, "-=.3");
        timeline.from('.content-review', {x: "-100%", opacity: 0, duration: .3, ease: "power1.out"}, "-=.3");
    }
});
