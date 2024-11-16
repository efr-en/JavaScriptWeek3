// A local gym wants to implement an "exercise of the day" program where there is a
// free class for that day that promotes a certain exercise. The gym needs some backend 
// logic to update its system to reflect which exercise will be promoted that day. 
// Write a function that will take as an input the name of an exercise and console log 
// a message like Today's exercise: running
// Write one function that can dynamically print the value of the exercise for 
// that day, and it must be closure.

function createExerciseOfTheDay() {
    let exercise = '';
    function setExercise(exerciseName) {
        exercise = exerciseName;
    }
    function printExercise() {
        console.log(`Today's exercise is ${exercise}`);
    } 
    return {
        setExercise, printExercise
    }
};

const exerciseOfTheDay = createExerciseOfTheDay();
exerciseOfTheDay.setExercise("running");
exerciseOfTheDay.printExercise();
exerciseOfTheDay.setExercise("push-ups");
exerciseOfTheDay.printExercise();
exerciseOfTheDay.setExercise("getting absolutely jacked");
exerciseOfTheDay.printExercise();