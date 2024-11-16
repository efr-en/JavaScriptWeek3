// Object prototype chain and prototypal inheritance exercise.
// Create a Person constructor that has three properties: name, job, and age.
// Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
// Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.
// use ES6!


// 1. Create a Person constructor that has three properties: name, job, and age.
class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
exercise() {
    console.log(`${this.name} says "I love doing push ups and getting absolutely ripped!"`);
}
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
fetchJob() {
    console.log(`${this.name} is a ${this.job}.`);
    }
}

// console.log(fetchJob())
// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
class Programmer extends Person {
    constructor(name, job, age, languages = []) {
        super(name, job, age); // super keyword is used to call the constructor of its parent class to access the parent's properties and methods
        this.languages = languages;
        this.busy = true;
    }

// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
completeTask() {
    this.busy = false;
}
acceptNewTask() {
    this.busy = true;
}
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
offerNewTask() {
    if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
        console.log(`${this.name} would love to take on new responsibility.`);
    }
}

// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// Checks current languages to ensure there are no dupes
learnLanguage(newLanguage) {
    if (!this.languages.includes(newLanguage)) {
        this.languages.push(newLanguage);
        console.log(`${this.name} has learned ${newLanguage}.`);
    } else {
        console.log(`${this.name} already knows ${newLanguage}`)
    }
}
listLanguages() {
    console.log(`${this.name} knows the following languages: ${this.languages.join(', ')}.`)
}
};

// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.
const programmer1 = new Programmer('Efren', 'Coding Apprentice', 23, ['JavaScript', 'HTML', 'CSS']);
const programmer2 = new Programmer('Felix', 'Fullstack Developer', 23, ['JavaScript', 'HTML', 'CSS', 'React']);
const programmer3 = new Programmer('Yonjou', 'Frontend Developer', 19, ['HTML', 'CSS']);

programmer1.exercise();
programmer1.fetchJob();
programmer1.offerNewTask();
programmer1.completeTask();
programmer1.learnLanguage('React');
programmer1.listLanguages();

programmer2.exercise();
programmer2.fetchJob();
// programmer2.offerNewTask('Build a website');
programmer2.completeTask();
programmer2.offerNewTask();
programmer2.learnLanguage('SQL');
programmer2.learnLanguage('SQL'); // test - says he already knows SQL
programmer2.listLanguages();

programmer3.exercise();
programmer3.fetchJob();
programmer3.offerNewTask();
programmer3.completeTask();
programmer3.learnLanguage('React', 'SQL', 'C');
programmer3.listLanguages();

//everything works accordingly