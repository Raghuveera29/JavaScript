export {};
let message = "World";
console.log(message);

let isbeginner: boolean = true;
let total: number = 0;
let name: string = "Raghu";
let sentence: string = `My name is ${name}`;
console.log(sentence);

let isNew: boolean | null = null;
let isName: string | undefined = undefined;

//Declaring Array type
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//mixed contains both number 7 string - typescript provide tupil

let person1: [string, number] = ["raghu", 22];

//enum type - Giving friendly name to set of numeric values
// enum we use the enum keyword and that is followed by a name for the enum which is in turn followed by the values in a pair of curly braces

enum Color {
  red = 10,
  green,
  yellow,
}

let c: Color = Color.green;
console.log(c);

//any
let randomValue: any = 10;
randomValue = true;
randomValue = "Vishwas";

//unknown
let myVariable: unknown = 10;

if (typeof myVariable === "string") {
  myVariable.toUpperCase();
}
//(myVariable as string).toUpperCase();
//(myVariable as number).toFixed();

//Type inference
let a;
a = 10;
a = true;

let b = 10;
//b=true; //type inference takes place when initializing variables and not all the time as we see in the right now type inference does not work on variable a where there is no initialization types are also necessary in other situations

//ability to specify union of types for the same variable
let multiType: number | boolean;
multiType = 20;
multiType = true;

//Functions***

function add(num1: number, num2: number) {
  return num1 + num2;
}
add(5, 10);

//optional parameters & default parameters
//TypeScript expects parameter to be passed to function, meanwhile javascript allows, so we have to use ? for

//treats num21 as undefined, but we have to declare first which has value[required] then which is undefined[optional] if we want
function addOne(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}
addOne(5, 10);
addOne(5);

//default parameter - it has value instead of undefined
function addTwo(num1: number, num2: number = 10): number {
  if (num2) return num1 + num2;
  else return num1;
}
addTwo(5, 10); //15
addTwo(5); //15 - it takes by default

//Interfaces***
//To Specify an object as a type in typescript

function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "bruce",
  lastName: "wayne",
};

fullName(p);
// if there are multiple requirements like string, number boolean etc & everywhere same object is used, code will start looking clumpsy & difficult in maintenance, so for this we have solution

//***Interfaces in Typescript***
interface Person {
  firstName: string;
  lastName: string;
}

function fullNames(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
//Optional properties ? used in interface are useful in forms, if the specific field is not mandatory.

//***Class***
class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`good Morning ${this.employeeName}`);
  }
}
let emp1 = new Employee("Raghu");
console.log(emp1.employeeName);
emp1.greet();
//manager is just a employee with extra privilages
//instead od simply writing again when wanted, simply inherit them

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName); //to call baseclass constructor
  }
  delegateWork() {
    console.log(`manager delegating task`);
  }
}

let m1 = new Manager("raghus");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//***Check for trick***
// class = blueprint
// new = build house
// constructor = house setup

//**Access modifiers */
// They are keywords which sets the accessibility of properties & methods in a class - Public, Privae, protected
//private - Accessed only within the class, not in derived class also
//protected - Can be accessed only within base class & derived class. not outside
