function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
   this.setSubject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if ("marks" in this === false) {return 0;}
    this.marks = marks;
}

Student.prototype.getAverage = function () {
    if ("marks" in this === false || this.marks.length === 0) {return 0;}
    let summ = this.marks.reduce((acum, elem) => acum += elem, 0);
    return summ / this.marks.length;
    }

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.setSubject;
  this.exclude = reason;
}

let student1 =  new Student("Nikita", "male", 16);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);