"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
exports.Student = Student;
function enroll(person) {
    console.log('blah');
}
var enrolledSuperman = enroll(new Student('Super', 'J.', 'Man'));
//# sourceMappingURL=hello-interface.js.map