export interface Person {
    firstName: string;
    lastName: string;
}

export class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

function enroll(person: Person) {
    console.log('blah');
}

var enrolledSuperman = enroll(new Student('Super', 'J.', 'Man'));