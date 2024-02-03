function Person(name, birthdate){
    this.name = name;
    this.birthdate = new Date(birthdate); 
}

function Teacher(name, birthdate, address, phone, students){
    Person.call(this, name, birthdate);
    this.address = address;
    this.phone = phone;
    this.students = students.map(student => new Student(student));
}

function Student(name, birthdate, address, phone, subjects){
    Person.call(this, name, birthdate);
    this.address = address;
    this.phone = phone;
    this.subjects = subjects || [];
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
 
Person.prototype.calculateAge = function(){
    const currentDate = new Date();
    const birthYear = this.birthdate.getUTCFullYear();
    const currentYear = currentDate.getUTCFullYear();
    const age = currentYear - birthYear;

    return age;
};



Person.prototype.introduction = function (){
    return `My name is ${this.name} and I'm ${this.calculateAge()} years old.`;
};

const person1 = new Student('Vitor', '2002-07-26', 'Vereda dos Vigários', 93132132, ['English', 'Programming Language'] );
// console.log(person1);
// console.log(person1.introduction());

const teacher = new Teacher('Adelaide', '1985-05-15', '123 Main St', '555-1234', [
    new Student('José', '2000-07-26', 'Morada', 932132, ['English', 'Programming Language'])
]);
console.log(teacher)
console.log(teacher.introduction());
//console.log(teacher.students)
