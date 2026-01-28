// =======================================
// TYPESCRIPT ZERO → HERO (SINGLE FILE)
// Code ONLY with inline comments
// =======================================

// ---------- VARIABLES & BASIC TYPES ----------
let firstName: string = "Altaseb";          // string type
let age: number = 21;                       // number type
let isStudent: boolean = true;              // boolean type
let score: null = null;                     // null type
let notAssigned: undefined = undefined;     // undefined type

// ---------- TYPE INFERENCE ----------
let city = "Debre Berhan";                  // inferred as string
let year = 2026;                            // inferred as number

// ---------- ANY & UNKNOWN ----------
let dataAny: any = 10;                      // any disables type checking
dataAny = "text";

let dataUnknown: unknown = "Hello";         // unknown is safer than any
if (typeof dataUnknown === "string") {
  dataUnknown.toUpperCase();                // type guard required
}

// ---------- ARRAYS ----------
let numbers: number[] = [1, 2, 3];           // number array
let names: Array<string> = ["A", "B"];       // generic array

numbers.push(4);                            // add element
numbers.splice(1, 1);                       // remove element

// ---------- TUPLE ----------
let userTuple: [number, string] = [1, "Altaseb"]; // fixed order & length

// ---------- ENUM ----------
enum Role {
  Admin,
  User,
  Guest
}
let userRole: Role = Role.Admin;             // enum usage

// ---------- OBJECT TYPE ----------
let userObject: { id: number; name: string } = {
  id: 1,
  name: "Altaseb",
};

// ---------- TYPE ALIAS ----------
type ID = number | string;                   // union type alias
let userId: ID = 123;

// ---------- INTERFACE ----------
interface Person {
  id: number;
  name: string;
  age?: number;                              // optional property
}

// ---------- FUNCTIONS ----------
function add(a: number, b: number): number {
  return a + b;                              // return type number
}

function logMessage(message: string): void {
  console.log(message);                      // void return
}

// ---------- OPTIONAL & DEFAULT PARAMETERS ----------
function greet(name: string, title: string = "Mr"): string {
  return `${title} ${name}`;
}

// ---------- ARROW FUNCTION ----------
const multiply = (a: number, b: number): number => a * b;

// ---------- UNION TYPES ----------
function printId(id: number | string): void {
  console.log(id);
}

// ---------- TYPE NARROWING ----------
function printLength(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.length);
  } else {
    console.log(value);
  }
}

// ---------- INTERSECTION TYPES ----------
type Employee = { empId: number };
type AdminUser = Employee & { role: string };

let adminUser: AdminUser = {
  empId: 1,
  role: "Admin",
};

// ---------- CONDITIONAL STATEMENTS ----------
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// ---------- SWITCH ----------
switch (userRole as Role) {
  case Role.Admin:
    console.log("Admin User");
    break;
  case Role.User:
    console.log("Normal User");
    break;
  default:
    console.log("Guest");
}

// ---------- LOOPS ----------
for (let i = 0; i < 3; i++) {
  console.log(i);
}

let count = 0;
while (count < 2) {
  count++;
}

numbers.forEach((num) => console.log(num));

// ---------- CLASS (OOP) ----------
class Human implements Person {
  constructor(
    public id: number,
    public name: string,
    public age: number
  ) {}

  greet(): void {
    console.log(`Hello, I am ${this.name}`);
  }
}

// ---------- INHERITANCE ----------
class Student extends Human {
  constructor(id: number, name: string, age: number, public course: string) {
    super(id, name, age);                    // call parent constructor
  }
}

// ---------- ENCAPSULATION ----------
class Product {
  constructor(private _price: number) {}

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) throw new Error("Invalid price");
    this._price = value;
  }
}

// ---------- ABSTRACT CLASS ----------
abstract class Shape {
  abstract area(): number;                   // must be implemented
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}

// ---------- GENERICS ----------
function identity<T>(value: T): T {
  return value;                              // generic function
}

let numIdentity = identity<number>(10);
let strIdentity = identity<string>("TS");

// ---------- GENERIC INTERFACE ----------
interface ApiResponse<T> {
  data: T;
  status: number;
}

let response: ApiResponse<string> = {
  data: "Success",
  status: 200,
};

// ---------- NEVER ----------
function throwError(message: string): never {
  throw new Error(message);
}

// ---------- TYPE ASSERTION ----------
let someValue: unknown = "TypeScript";
let strLength: number = (someValue as string).length;


// =======================================
// END OF TYPESCRIPT MASTER FILE
// =======================================
