(function () {
    'use strict';

    class Student {
        constructor(firstName, lastName, age, grade) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.grade = grade;
        }
    }

    const student1 = new Student('John', 'Smith', 20, 93);
    const student2 = new Student('Joe', 'Shmoe', 19, 89);
    const student3 = new Student('Ploni', 'Almoni', 92, 18);

    const students = [student1, student2, student3];

    function printStudents(firstThenLast, ...args) { //must pass in 'true' or 'false' for firstThenLast param, true displays firstName first, and false displays lastName first
        if (firstThenLast !== true && firstThenLast !== false) {
            console.error('ERROR: Param "firstThenLast" before student variables requires "true" or "false"');
        } else {
            for (let i = 0; i < args.length; i++) {
                let s = args[i];
                if (firstThenLast) {
                    console.log(`Name: ${s.firstName} ${s.lastName}. Age: ${s.age}. Grade: ${s.grade}`);
                }
                else {
                    console.log(`Name: ${s.lastName}, ${s.firstName}. Age: ${s.age}. Grade: ${s.grade}`);
                }
            }
        }
    }
    console.log('if firstThenLast is true:');
    printStudents(true, ...students);

    console.log('');
    console.log('if firstThenLast is false:');
    printStudents(false, ...students);

    console.log('');
    console.log('if firstThenLast is left out:');
    printStudents(...students);

    let rest, firstName, lastName;
    let sc = {}; //student copy
    function swapFirstAndLastNames(...args) {
        let swappedStudents = [];
        for (let i = 0; i < args.length; i++) {
            ({ firstName, lastName, ...rest } = args[i]);
            sc.firstName = lastName;
            sc.lastName = firstName;
            sc.age = rest.age;
            sc.grade = rest.grade;
            let clone = Object.assign({}, sc); //clone sc object to fix chrome object display bug
            swappedStudents.push(clone);
        }
        return swappedStudents;
    }

    console.log('');
    console.log('when swapFirstAndLastNames is called:');
    const studentClone = swapFirstAndLastNames(...students);
    console.log(studentClone);
}());