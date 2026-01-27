
# ✅TYPESCRIPT FILE

```ts
/* =========================================
   1. BASIC VARIABLE WITH TYPE
   ========================================= */

// Explicitly defining a string variable
let name: string = "Altaseb";
console.log(name);
```

### 🧠 Explanation

> “TypeScript allows us to explicitly define variable types.
> Here `name` can ONLY store string values.”

---

```ts
/* =========================================
   2. FUNCTION WITH TYPED PARAMETERS & RETURN
   ========================================= */

function add(a: number, b: number): number {
  return a + b;
}

const result: number = add(4, 9);
console.log(result);
```

### 🧠 Explanation

* `a: number, b: number` → inputs must be numbers
* `: number` after function → return type
* Compile-time error if wrong types are passed

---

```ts
/* =========================================
   3. ANY TYPE (NOT RECOMMENDED)
   ========================================= */

let value: any = 10;

// TypeScript allows this but removes type safety
console.log(String(value).toUpperCase());
```


> “`any` disables TypeScript checking.
> We should avoid it and use `unknown` instead.”

---

```ts
/* =========================================
   1. ARRAY WITH TYPE SAFETY
   ========================================= */

let numbers: number[] = [1, 3, 4, 5, 6];

numbers.push(90);     // add at end
numbers.unshift(0);   // add at start
numbers.splice(4, 1); // remove 1 element at index 4

console.log(numbers);
```

### 🧠 Explanation

* `number[]` → only numbers allowed
* Array methods stay the same as JavaScript
* TypeScript prevents invalid data

---

```ts
/* =========================================
   5. FUNCTION WITH OPTIONAL PARAMETER
   ========================================= */

function studentDetails(
  id: number,
  name: string,
  isMale?: boolean
): void {
  console.log(`ID: ${id}, Name: ${name}, isMale: ${isMale}`);
}

studentDetails(1, "Altaseb");
studentDetails(2, "Sara", false);
studentDetails(3, "Ahmed", true);
```

### 🧠 Explanation

* `isMale?: boolean` → optional parameter
* `void` → function does not return anything

---

```ts
/* =========================================
   6. ARROW FUNCTION
   ========================================= */

const multiply = (a: number, b: number): number => a * b;
```

### 🧠 Interview Line

> “Arrow functions in TypeScript work like JavaScript but with full type safety.”

---

```ts
/* =========================================
   7. INTERFACE + CLASS IMPLEMENTATION
   ========================================= */

interface Person {
  id: number;
  name: string;
  age?: number;
}

class Admin implements Person {
  id = 1;
  name = "Altaseb";
}

const admin1 = new Admin();
console.log(admin1);
```

### 🧠 Explanation

* `interface` defines structure
* `implements` forces class to follow interface
* Optional property `age?`

---

```ts
/* =========================================
   8. TYPE ALIAS
   ========================================= */

type ID = number;
let userId: ID = 123;

type User = {
  id: number;
  name: string;
};

const user1: User = {
  id: 1,
  name: "Altaseb",
};
```


> “`type` is used to create custom data types and reuse them.”

---

```ts
/* =========================================
   1. INTERFACE WITH OBJECT
   ========================================= */

interface Vehicle {
  model: string;
  year: number;
}

const car: Vehicle = {
  model: "Toyota",
  year: 2020,
};
```

---

```ts
/* =========================================
   10. CLASS WITH CONSTRUCTOR & METHOD
   ========================================= */

class Human {
  firstName: string;
  age: number;

  constructor(firstName: string, age: number) {
    this.firstName = firstName;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.firstName} and I am ${this.age} years old.`
    );
  }
}

const human1 = new Human("Altaseb", 21);
human1.greet();
```

### 🧠 Explanation

* Constructor initializes values
* Methods have return types
* Strong OOP support

---

```ts
/* =========================================
   11. ENCAPSULATION (PRIVATE + GETTER/SETTER)
   ========================================= */

class Product {
  constructor(private _price: number) {}

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) {
      throw new Error("Price cannot be negative");
    }
    this._price = value;
  }
}

const p = new Product(100);
console.log(p.price);

p.price = 200;
console.log(p.price);
```



> “TypeScript supports encapsulation using access modifiers
> like `private` with getters and setters.”

---

```ts
/* =========================================
   1.  WHY NOT ANY? (REAL EXAMPLE)
   ========================================= */

// function printLength(value: any) {
//   console.log(value.length);
// }

// printLength(42); // Runtime error ❌
```



> “TypeScript warns us before runtime.
> Using `any` removes that protection.”

---



> “TypeScript is a statically typed superset of JavaScript that adds compile-time checking, better tooling, and scalability.
> It supports interfaces, classes, generics, access modifiers, and safer code for large applications.”

---

