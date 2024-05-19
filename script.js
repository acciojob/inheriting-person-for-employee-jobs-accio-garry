

 class Person {
 	constructor(name, age) {
		this.name=name;
		this.age=age;	
 	}

	 greet(){
		 return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
	 }
 }


class Employee extends Person{

	constructor(name, age, jobTitle){
		super(name, age);
		this.jobTitle = jobTitle;
		
	}

	 jobGreet(){
		 return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
	 }
 }

let person = new Person("Alice", 25);
console.log(person.greet());
let employee = new Employee("Bob", 30, "Manager");
console.log(employee.jobGreet());



// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

const Person = window.Person;
const Employee = window.Employee;
