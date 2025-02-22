export const Data = [
  {
    id: 1,
    question: "What’s the output?",
    image: "question-1.svg",
    options: [
      "<code>Lydia</code> and <code>undefined</code>",
      "<code>Lydia</code> and <code>ReferenceError</code>",
      "<code>ReferenceError</code> and <code>21</code>",
      "<code>undefined</code> and <code>ReferenceError</code>",
    ],
    answer: 4,
    explanation:
      '<p>function sayHi() {  console.log(name);  console.log(age);  var name = "Lydia";  let age = 21;}sayHi();</p><p></p><p>\n    Within the function, we first declare the <code>name</code> variable with the <code>var</code> keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of <code>undefined</code>, until we actually get to the line where we define the variable. We haven’t defined the variable yet on the line where we try to log the <code>name</code> variable, so it still holds the value of <code>undefined</code>.</p><p>    Variables with the <code>let</code> keyword (and <code>const</code>) are hoisted, but unlike <code>var</code>, don’t get *initialized*. They are not accessible before the line we declare (initialize) them. This is called the “temporal dead zone”. When we try to access the variables before they are declared, JavaScript throws a <code>ReferenceError</code>.</p>',
  },
  {
    id: 2,
    question: "What’s the output?",
    image: "question-2.svg",
    options: [
      "<code>0 1 2</code> and <code>0 1 2</code>",
      "<code>0 1 2</code> and <code>3 3 3</code>",
      "<code>3 3 3</code> and <code>0 1 2</code>",
    ],
    answer: 3,
    explanation:
      "<p>for (var i = 0; i < 3; i++) {  setTimeout(() => console.log(i), 1);}for (let i = 0; i < 3; i++) {  setTimeout(() => console.log(i), 1);}</p><p></p><p>\n    Because of the event queue in JavaScript, the <code>setTimeout</code> callback function is called *after* the loop has been executed. Since the variable <code>i</code> in the first loop was declared using the <code>var</code> keyword, this value was global. During the loop, we incremented the value of <code>i</code> by <code>1</code> each time, using the unary operator <code>++</code>. By the time the <code>setTimeout</code> callback function was invoked, <code>i</code> was equal to <code>3</code> in the first example.</p><p>    In the second loop, the variable <code>i</code> was declared using the <code>let</code> keyword: variables declared with the <code>let</code> (and <code>const</code>) keyword are block-scoped (a block is anything between <code>{ }</code>). During each iteration, <code>i</code> will have a new value, and each value is scoped inside the loop.</p>",
  },
  {
    id: 3,
    question: "What’s the output?",
    image: "question-3.svg",
    options: [
      "<code>20</code> and <code>62.83185307179586</code>",
      "<code>20</code> and <code>NaN</code>",
      "<code>20</code> and <code>63</code>",
      "<code>NaN</code> and <code>63</code>",
    ],
    answer: 2,
    explanation:
      "<p>const shape = {  radius: 10,  diameter() {    return this.radius * 2;  },  perimeter: () => 2 * Math.PI * this.radius,};console.log(shape.diameter());console.log(shape.perimeter());</p><p></p><p>\n    Note that the value of <code>diameter</code> is a regular function, whereas the value of <code>perimeter</code> is an arrow function.</p><p>    With arrow functions, the <code>this</code> keyword refers to its current surrounding scope, unlike regular functions! This means that when we call <code>perimeter</code>, it doesn’t refer to the shape object, but to its surrounding scope (window for example).</p><p>    There is no value <code>radius</code> on that object, which returns <code>NaN</code>.</p>",
  },
  {
    id: 4,
    question: "What’s the output?",
    image: "question-4.svg",
    options: [
      "<code>1</code> and <code>false</code>",
      "<code>false</code> and <code>NaN</code>",
      "<code>false</code> and <code>false</code>",
    ],
    answer: 1,
    explanation:
      "<p>+true;!\"Lydia\";</p><p></p><p>\n    The unary plus tries to convert an operand to a number. <code>true</code> is <code>1</code>, and <code>false</code> is <code>0</code>.</p><p>    The string <code>'Lydia'</code> is a truthy value. What we’re actually asking, is “is this truthy value falsy?”. This returns <code>false</code>.</p>",
  },
  {
    id: 5,
    question: "Which one is true?",
    image: "question-5.svg",
    options: [
      "<code>mouse.bird.size</code> is not valid",
      "<code>mouse[bird.size]</code> is not valid",
      '<code>mouse[bird["size"]]</code> is not valid',
      "All of them are valid",
    ],
    answer: 1,
    explanation:
      '<p>const bird = {  size: "small",};const mouse = {  name: "Mickey",  small: true,};</p><p></p><p>\n    In JavaScript, all object keys are strings (unless it’s a Symbol). Even though we might not *type* them as strings, they are always converted into strings under the hood.</p><p>    JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket <code>[</code> and keeps going until it finds the closing bracket <code>]</code>. Only then, it will evaluate the statement.</p><p>    <code>mouse[bird.size]</code>: First it evaluates <code>bird.size</code>, which is <code>"small"</code>. <code>mouse["small"]</code> returns <code>true</code></p><p>    However, with dot notation, this doesn’t happen. <code>mouse</code> does not have a key called <code>bird</code>, which means that <code>mouse.bird</code> is <code>undefined</code>. Then, we ask for the <code>size</code> using dot notation: <code>mouse.bird.size</code>. Since <code>mouse.bird</code> is <code>undefined</code>, we’re actually asking <code>undefined.size</code>. This isn’t valid, and will throw an error similar to <code>Cannot read property "size" of undefined</code>.</p>',
  },
  {
    id: 6,
    question: "What’s the output?",
    image: "question-6.svg",
    options: [
      "<code>Hello</code>",
      "<code>Hey!</code>",
      "<code>undefined</code>",
      "<code>ReferenceError</code>",
      "E: <code>TypeError</code>",
    ],
    answer: 1,
    explanation:
      '<p>let c = { greeting: "Hey!" };let d;d = c;c.greeting = "Hello";console.log(d.greeting);</p><p></p><p>\n    In JavaScript, all objects interact by *reference* when setting them equal to each other.</p><p>    First, variable <code>c</code> holds a value to an object. Later, we assign <code>d</code> with the same reference that <code>c</code> has to the object.</p><p>    ![https://i.imgur.com/ko5k0fs.png](https://i.imgur.com/ko5k0fs.png)</p><p>    When you change one object, you change all of them.</p>',
  },
  {
    id: 7,
    question: "What’s the output?",
    image: "question-7.svg",
    options: [
      "<code>true</code> <code>false</code> <code>true</code>",
      "<code>false</code> <code>false</code> <code>true</code>",
      "<code>true</code> <code>false</code> <code>false</code>",
      "<code>false</code> <code>true</code> <code>true</code>",
    ],
    answer: 3,
    explanation:
      "<p>let a = 3;let b = new Number(3);let c = 3;console.log(a == b);console.log(a === b);console.log(b === c);</p><p></p><p>\n    <code>new Number()</code> is a built-in function constructor. Although it looks like a number, it’s not really a number: it has a bunch of extra features and is an object.</p><p>    When we use the <code>==</code> operator, it only checks whether it has the same *value*. They both have the value of <code>3</code>, so it returns <code>true</code>.</p><p>    However, when we use the <code>===</code> operator, both value *and* type should be the same. It’s not: <code>new Number()</code> is not a number, it’s an **object**. Both return <code>false.</code></p>",
  },
  {
    id: 8,
    question: "What’s the output?",
    image: "question-8.svg",
    options: [
      "<code>orange</code>",
      "<code>purple</code>",
      "<code>green</code>",
      "<code>TypeError</code>",
    ],
    answer: 4,
    explanation:
      '<p>class Chameleon {  static colorChange(newColor) {    this.newColor = newColor;    return this.newColor;  }  constructor({ newColor = "green" } = {}) {    this.newColor = newColor;  }}const freddie = new Chameleon({ newColor: "purple" });console.log(freddie.colorChange("orange"));</p><p></p><p>\n    The <code>colorChange</code> function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since <code>freddie</code> is an instance of class Chameleon, the function cannot be called upon it. A <code>TypeError</code> is thrown.</p>',
  },
  {
    id: 9,
    question: "What’s the output?",
    image: "question-9.svg",
    options: [
      "<code>{}</code>",
      "<code>ReferenceError: greetign is not defined</code>",
      "<code>undefined</code>",
    ],
    answer: 1,
    explanation:
      '<p>let greeting;greetign = {}; // Typo!console.log(greetign);</p><p></p><p>\n    It logs the object, because we just created an empty object on the global object! When we mistyped <code>greeting</code> as <code>greetign</code>, the JS interpreter actually saw this as <code>global.greetign = {}</code> (or <code>window.greetign = {}</code> in a browser).</p><p>    In order to avoid this, we can use <code>"use strict"</code>. This makes sure that you have declared a variable before setting it equal to anything.</p>',
  },
  {
    id: 10,
    question: "What happens when we do this?",
    image: "question-10.svg",
    options: [
      "Nothing, this is totally fine!",
      "<code>SyntaxError</code>. You cannot add properties to a function this way.",
      '<code>"Woof"</code> gets logged.',
      "<code>ReferenceError</code>",
    ],
    answer: 1,
    explanation:
      '<p>function bark() {  console.log("Woof!");}bark.animal = "dog";</p><p></p><p>\n    This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)</p><p>    A function is a special type of object. The code you write yourself isn’t the actual function. The function is an object with properties. This property is invocable.</p>',
  },
  {
    id: 11,
    question: "What’s the output?",
    image: "question-11.svg",
    options: [
      "<code>TypeError</code>",
      "<code>SyntaxError</code>",
      "<code>Lydia Hallie</code>",
      "<code>undefined</code> <code>undefined</code>",
    ],
    answer: 1,
    explanation:
      '<p>function Person(firstName, lastName) {  this.firstName = firstName;  this.lastName = lastName;}const member = new Person("Lydia", "Hallie");Person.getFullName = function () {  return <code>${this.firstName} ${this.lastName}</code>;};console.log(member.getFullName());</p><p></p><p>\n    In JavaScript, functions are objects, and therefore, the method <code>getFullName</code> gets added to the constructor function object itself. For that reason, we can call <code>Person.getFullName()</code>, but <code>member.getFullName</code> throws a <code>TypeError</code>.</p><p>    If you want a method to be available to all object instances, you have to add it to the prototype property:</p><p>    ```\n    Person.prototype.getFullName = function () {  return <code>${this.firstName} ${this.lastName}</code>;};\n    ```</p>',
  },
  {
    id: 12,
    question: "What’s the output?",
    image: "question-12.svg",
    options: [
      '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code> and <code>undefined</code>',
      '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code> and <code>Person {firstName: "Sarah", lastName: "Smith"}</code>',
      '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code> and <code>{}</code>',
      '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code> and <code>ReferenceError</code>',
    ],
    answer: 1,
    explanation:
      '<p>function Person(firstName, lastName) {  this.firstName = firstName;  this.lastName = lastName;}const lydia = new Person("Lydia", "Hallie");const sarah = Person("Sarah", "Smith");console.log(lydia);console.log(sarah);</p><p></p><p>\n    For <code>sarah</code>, we didn’t use the <code>new</code> keyword. When using <code>new</code>, <code>this</code> refers to the new empty object we create. However, if you don’t add <code>new</code>, <code>this</code> refers to the **global object**!</p><p>    We said that <code>this.firstName</code> equals <code>"Sarah"</code> and <code>this.lastName</code> equals <code>"Smith"</code>. What we actually did, is defining <code>global.firstName = \'Sarah\'</code> and <code>global.lastName = \'Smith\'</code>. <code>sarah</code> itself is left <code>undefined</code>, since we don’t return a value from the <code>Person</code> function.</p>',
  },
  {
    id: 13,
    question: "What are the three phases of event propagation?",
    image: "",
    options: [
      "Target > Capturing > Bubbling",
      "Bubbling > Target > Capturing",
      "Target > Bubbling > Capturing",
      "Capturing > Target > Bubbling",
    ],
    answer: 4,
    explanation:
      "<p>During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.</p><p>    ![https://i.imgur.com/N18oRgd.png](https://i.imgur.com/N18oRgd.png)</p>",
  },
  {
    id: 14,
    question: "All object have prototypes.",
    image: "",
    options: ["true", "false"],
    answer: 2,
    explanation:
      "<p>All objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the <code>new</code> keyword. The base object has access to some methods and properties, such as <code>.toString</code>. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can’t find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.</p>",
  },
  {
    id: 15,
    question: "What’s the output?",
    image: "question-15.svg",
    options: [
      "<code>NaN</code>",
      "<code>TypeError</code>",
      '<code>"12"</code>',
      "<code>3</code>",
    ],
    answer: 3,
    explanation:
      '<p>function sum(a, b) {  return a + b;}sum(1, "2");</p><p></p><p>\n    JavaScript is a **dynamically typed language**: we don’t specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called *implicit type coercion*. **Coercion** is converting from one type into another.</p><p>    In this example, JavaScript converts the number <code>1</code> into a string, in order for the function to make sense and return a value. During the addition of a numeric type (<code>1</code>) and a string type (<code>\'2\'</code>), the number is treated as a string. We can concatenate strings like <code>"Hello" + "World"</code>, so what’s happening here is <code>"1" + "2"</code> which returns <code>"12"</code>.</p>',
  },
  {
    id: 16,
    question: "What’s the output?",
    image: "question-16.svg",
    options: [
      "<code>1</code> <code>1</code> <code>2</code>",
      "<code>1</code> <code>2</code> <code>2</code>",
      "<code>0</code> <code>2</code> <code>2</code>",
      "<code>0</code> <code>1</code> <code>2</code>",
    ],
    answer: 3,
    explanation:
      "<p>let number = 0;console.log(number++);console.log(++number);console.log(number);</p><p></p><p>\n    The **postfix** unary operator <code>++</code>:</p><p>    1. Returns the value (this returns <code>0</code>)\n    2. Increments the value (number is now <code>1</code>)</p><p>    The **prefix** unary operator <code>++</code>:</p><p>    1. Increments the value (number is now <code>2</code>)\n    2. Returns the value (this returns <code>2</code>)</p><p>    This returns <code>0 2 2</code>.</p>",
  },
  {
    id: 17,
    question: "What’s the output?",
    image: "question-17.svg",
    options: [
      '<code>"Lydia"</code> <code>21</code> <code>["", " is ", " years old"]</code>',
      '<code>["", " is ", " years old"]</code> <code>"Lydia"</code> <code>21</code>',
      '<code>"Lydia"</code> <code>["", " is ", " years old"]</code> <code>21</code>',
    ],
    answer: 2,
    explanation:
      '<p>function getPersonInfo(one, two, three) {  console.log(one);  console.log(two);  console.log(three);}const person = "Lydia";const age = 21;getPersonInfo<code>${person} is ${age} years old</code>;</p><p></p><p>\n    If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!</p>',
  },
  {
    id: 18,
    question: "What’s the output?",
    image: "question-18.svg",
    options: [
      "<code>You are an adult!</code>",
      "<code>You are still an adult.</code>",
      "<code>Hmm.. You don't have an age I guess</code>",
    ],
    answer: 3,
    explanation:
      '<p>function checkAge(data) {  if (data === { age: 18 }) {    console.log("You are an adult!");  } else if (data == { age: 18 }) {    console.log("You are still an adult.");  } else {    console.log(<code>Hmm.. You don\'t have an age I guess</code>);  }}checkAge({ age: 18 });</p><p></p><p>\n    When testing equality, primitives are compared by their *value*, while objects are compared by their *reference*. JavaScript checks if the objects have a reference to the same location in memory.</p><p>    The two objects that we are comparing don’t have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.</p><p>    This is why both <code>{ age: 18 } === { age: 18 }</code> and <code>{ age: 18 } == { age: 18 }</code> return <code>false</code>.</p>',
  },
  {
    id: 19,
    question: "What’s the output?",
    image: "question-19.svg",
    options: [
      '<code>"number"</code>',
      '<code>"array"</code>',
      '<code>"object"</code>',
      '<code>"NaN"</code>',
    ],
    answer: 3,
    explanation:
      '<p>function getAge(...args) {  console.log(typeof args);}getAge(21);</p><p></p><p>\n    The rest parameter (<code>...args</code>) lets us “collect” all remaining arguments into an array. An array is an object, so <code>typeof args</code> returns <code>"object"</code></p>',
  },
  {
    id: 20,
    question: "What’s the output?",
    image: "question-20.svg",
    options: [
      "<code>21</code>",
      "<code>undefined</code>",
      "<code>ReferenceError</code>",
      "<code>TypeError</code>",
    ],
    answer: 3,
    explanation:
      '<p>function getAge() {  "use strict";  age = 21;  console.log(age);}getAge();</p><p></p><p>\n    With <code>"use strict"</code>, you can make sure that you don’t accidentally declare global variables. We never declared the variable <code>age</code>, and since we use <code>"use strict"</code>, it will throw a reference error. If we didn’t use <code>"use strict"</code>, it would have worked, since the property <code>age</code> would have gotten added to the global object.</p>',
  },
  {
    id: 21,
    question: "What’s the value of `sum`?",
    image: "question-21.svg",
    options: [
      "<code>105</code>",
      '<code>"105"</code>',
      "<code>TypeError</code>",
      '<code>"10*10+5"</code>',
    ],
    answer: 1,
    explanation:
      '<p>const sum = eval("10*10+5");</p><p></p><p>\n    <code>eval</code> evaluates codes that’s passed as a string. If it’s an expression, like in this case, it evaluates the expression. The expression is <code>10 * 10 + 5</code>. This returns the number <code>105</code>.</p>',
  },
  {
    id: 22,
    question: "How long is cool_secret accessible?",
    image: "question-22.svg",
    options: [
      "Forever, the data doesn’t get lost.",
      "When the user closes the tab.",
      "When the user closes the entire browser, not only the tab.",
      "When the user shuts off their computer.",
    ],
    answer: 2,
    explanation:
      '<p>sessionStorage.setItem("cool_secret", 123);</p><p></p><p>\n    The data stored in <code>sessionStorage</code> is removed after closing the *tab*.</p><p>    If you used <code>localStorage</code>, the data would’ve been there forever, unless for example <code>localStorage.clear()</code> is invoked.</p>',
  },
  {
    id: 23,
    question: "What’s the output?",
    image: "question-23.svg",
    options: [
      "<code>8</code>",
      "<code>10</code>",
      "<code>SyntaxError</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 2,
    explanation:
      "<p>var num = 8;var num = 10;console.log(num);</p><p></p><p>\n    With the <code>var</code> keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.</p><p>    You cannot do this with <code>let</code> or <code>const</code> since they’re block-scoped.</p>",
  },
  {
    id: 24,
    question: "What’s the output?",
    image: "question-24.svg",
    options: [
      "<code>false</code> <code>true</code> <code>false</code> <code>true</code>",
      "<code>false</code> <code>true</code> <code>true</code> <code>true</code>",
      "<code>true</code> <code>true</code> <code>false</code> <code>true</code>",
      "<code>true</code> <code>true</code> <code>true</code> <code>true</code>",
    ],
    answer: 3,
    explanation:
      '<p>const obj = { 1: "a", 2: "b", 3: "c" };const set = new Set([1, 2, 3, 4, 5]);obj.hasOwnProperty("1");obj.hasOwnProperty(1);set.has("1");set.has(1);</p><p></p><p>\n    All object keys (excluding Symbols) are strings under the hood, even if you don’t type it yourself as a string. This is why <code>obj.hasOwnProperty(\'1\')</code> also returns true.</p><p>    It doesn’t work that way for a set. There is no <code>\'1\'</code> in our set: <code>set.has(\'1\')</code> returns <code>false</code>. It has the numeric type <code>1</code>, <code>set.has(1)</code> returns <code>true</code>.</p>',
  },
  {
    id: 25,
    question: "What’s the output?",
    image: "question-25.svg",
    options: [
      '<code>{ a: "one", b: "two" }</code>',
      '<code>{ b: "two", a: "three" }</code>',
      '<code>{ a: "three", b: "two" }</code>',
      "<code>SyntaxError</code>",
    ],
    answer: 3,
    explanation:
      '<p>const obj = { a: "one", b: "two", a: "three" };console.log(obj);</p><p></p><p>\n    If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.</p>',
  },
  {
    id: 26,
    question:
      "The JavaScript global execution context creates two things for you: the global object, and the “this” keyword.",
    image: "",
    options: ["true", "false", "it depends"],
    answer: 1,
    explanation:
      "<p>The base execution context is the global execution context: it’s what’s accessible everywhere in your code.</p>",
  },
  {
    id: 27,
    question: "What’s the output?",
    image: "question-27.svg",
    options: [
      "<code>1</code> <code>2</code>",
      "<code>1</code> <code>2</code> <code>3</code>",
      "<code>1</code> <code>2</code> <code>4</code>",
      "<code>1</code> <code>3</code> <code>4</code>",
    ],
    answer: 3,
    explanation:
      "<p>for (let i = 1; i < 5; i++) {  if (i === 3) continue;  console.log(i);}</p><p></p><p>\n    The <code>continue</code> statement skips an iteration if a certain condition returns <code>true</code>.</p>",
  },
  {
    id: 28,
    question: "What’s the output?",
    image: "question-28.svg",
    options: [
      '<code>"Just give Lydia pizza already!"</code>',
      "<code>TypeError: not a function</code>",
      "<code>SyntaxError</code>",
      "<code>undefined</code>",
    ],
    answer: 1,
    explanation:
      '<p>String.prototype.giveLydiaPizza = () => {  return "Just give Lydia pizza already!";};const name = "Lydia";name.giveLydiaPizza();</p><p></p><p>\n    <code>String</code> is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!</p>',
  },
  {
    id: 29,
    question: "What’s the output?",
    image: "question-29.svg",
    options: [
      "<code>123</code>",
      "<code>456</code>",
      "<code>undefined</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 2,
    explanation:
      '<p>const a = {};const b = { key: "b" };const c = { key: "c" };a[b] = 123;a[c] = 456;console.log(a[b]);</p><p></p><p>\n    Object keys are automatically converted into strings. We are trying to set an object as a key to object <code>a</code>, with the value of <code>123</code>.</p><p>    However, when we stringify an object, it becomes <code>"[object Object]"</code>. So what we are saying here, is that <code>a["[object Object]"] = 123</code>. Then, we can try to do the same again. <code>c</code> is another object that we are implicitly stringifying. So then, <code>a["[object Object]"] = 456</code>.</p><p>    Then, we log <code>a[b]</code>, which is actually <code>a["[object Object]"]</code>. We just set that to <code>456</code>, so it returns <code>456</code>.</p>',
  },
  {
    id: 30,
    question: "What’s the output?",
    image: "question-30.svg",
    options: [
      "<code>First</code> <code>Second</code> <code>Third</code>",
      "<code>First</code> <code>Third</code> <code>Second</code>",
      "<code>Second</code> <code>First</code> <code>Third</code>",
      "<code>Second</code> <code>Third</code> <code>First</code>",
    ],
    answer: 2,
    explanation:
      '<p>const foo = () => console.log("First");const bar = () => setTimeout(() => console.log("Second"));const baz = () => console.log("Third");bar();foo();baz();</p><p></p><p>\n    We have a <code>setTimeout</code> function and invoked it first. Yet, it was logged last.</p><p>    This is because in browsers, we don’t just have the runtime engine, we also have something called a <code>WebAPI</code>. The <code>WebAPI</code> gives us the <code>setTimeout</code> function to start with, and for example the DOM.</p><p>    After the *callback* is pushed to the WebAPI, the <code>setTimeout</code> function itself (but not the callback!) is popped off the stack.</p><p>    ![https://i.imgur.com/X5wsHOg.png](https://i.imgur.com/X5wsHOg.png)</p><p>    Now, <code>foo</code> gets invoked, and <code>"First"</code> is being logged.</p><p>    ![https://i.imgur.com/Pvc0dGq.png](https://i.imgur.com/Pvc0dGq.png)</p><p>    <code>foo</code> is popped off the stack, and <code>baz</code> gets invoked. <code>"Third"</code> gets logged.</p><p>    ![https://i.imgur.com/WhA2bCP.png](https://i.imgur.com/WhA2bCP.png)</p><p>    The WebAPI can’t just add stuff to the stack whenever it’s ready. Instead, it pushes the callback function to something called the *queue*.</p><p>    ![https://i.imgur.com/NSnDZmU.png](https://i.imgur.com/NSnDZmU.png)</p><p>    This is where an event loop starts to work. An **event loop** looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.</p><p>    ![https://i.imgur.com/uyiScAI.png](https://i.imgur.com/uyiScAI.png)</p><p>    <code>bar</code> gets invoked, <code>"Second"</code> gets logged, and it’s popped off the stack.</p>',
  },
  {
    id: 31,
    question: "What is the event.target when clicking the button?",
    image: "question-31.svg",
    options: [
      "Outer <code>div</code>",
      "Inner <code>div</code>",
      "<code>button</code>",
      "An array of all nested elements.",
    ],
    answer: 3,
    explanation:
      "<p><div onclick=\"console.log('first div')\">  <div onclick=\"console.log('second div')\">    <button onclick=\"console.log('button')\">Click!</button>  </div></div></p><p></p><p>\n    The deepest nested element that caused the event is the target of the event. You can stop bubbling by <code>event.stopPropagation</code></p>",
  },
  {
    id: 32,
    question: "When you click the paragraph, what’s the logged output?",
    image: "question-32.svg",
    options: [
      "<code>p</code> <code>div</code>",
      "<code>div</code> <code>p</code>",
      "<code>p</code>",
      "<code>div</code>",
    ],
    answer: 1,
    explanation:
      "<p><div onclick=\"console.log('div')\">  <p onclick=\"console.log('p')\">Click here!</p></div></p><p></p><p>\n    If we click <code>p</code>, we see two logs: <code>p</code> and <code>div</code>. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set <code>useCapture</code> to <code>true</code>). It goes from the deepest nested element outwards.</p>",
  },
  {
    id: 33,
    question: "What’s the output?",
    image: "question-33.svg",
    options: [
      "<code>undefined is 21</code> <code>Lydia is 21</code>",
      "<code>function</code> <code>function</code>",
      "<code>Lydia is 21</code> <code>Lydia is 21</code>",
      "<code>Lydia is 21</code> <code>function</code>",
    ],
    answer: 4,
    explanation:
      '<p>const person = { name: "Lydia" };function sayHi(age) {  return <code>${this.name} is ${age}</code>;}console.log(sayHi.call(person, 21));console.log(sayHi.bind(person, 21));</p><p></p><p>\n    With both, we can pass the object to which we want the <code>this</code> keyword to refer to. However, <code>.call</code> is also *executed immediately*!</p><p>    <code>.bind.</code> returns a *copy* of the function, but with a bound context! It is not executed immediately.</p>',
  },
  {
    id: 34,
    question: "What’s the output?",
    image: "question-34.svg",
    options: [
      '<code>"object"</code>',
      '<code>"number"</code>',
      '<code>"function"</code>',
      '<code>"undefined"</code>',
    ],
    answer: 2,
    explanation:
      '<p>function sayHi() {  return (() => 0)();}console.log(typeof sayHi());</p><p></p><p>\n    The <code>sayHi</code> function returns the returned value of the immediately invoked function expression (IIFE). This function returned <code>0</code>, which is type <code>"number"</code>.</p><p>    FYI: there are only 7 built-in types: <code>null</code>, <code>undefined</code>, <code>boolean</code>, <code>number</code>, <code>string</code>, <code>object</code>, and <code>symbol</code>. <code>"function"</code> is not a type, since functions are objects, it’s of type <code>"object"</code>.</p>',
  },
  {
    id: 35,
    question: "Which of these values are falsy?",
    image: "question-35.svg",
    options: [
      "<code>0</code>, <code>''</code>, <code>undefined</code>",
      "<code>0</code>, <code>new Number(0)</code>, <code>''</code>, <code>new Boolean(false)</code>, <code>undefined</code>",
      "<code>0</code>, <code>''</code>, <code>new Boolean(false)</code>, <code>undefined</code>",
      "All of them are falsy",
    ],
    answer: 1,
    explanation:
      '<p>0;new Number(0);("");(" ");new Boolean(false);undefined;</p><p></p><p>\n    There are 8 falsy values:</p><p>    - <code>undefined</code>\n    - <code>null</code>\n    - <code>NaN</code>\n    - <code>false</code>\n    - <code>\'\'</code> (empty string)\n    - <code>0</code>\n    - <code>0</code>\n    - <code>0n</code> (BigInt(0))</p><p>    Function constructors, like <code>new Number</code> and <code>new Boolean</code> are truthy.</p>',
  },
  {
    id: 36,
    question: "What’s the output?",
    image: "question-36.svg",
    options: [
      '<code>"number"</code>',
      '<code>"string"</code>',
      '<code>"object"</code>',
      '<code>"undefined"</code>',
    ],
    answer: 2,
    explanation:
      '<p>console.log(typeof typeof 1);</p><p></p><p>\n    <code>typeof 1</code> returns <code>"number"</code>. <code>typeof "number"</code> returns <code>"string"</code></p>',
  },
  {
    id: 37,
    question: "What’s the output?",
    image: "question-37.svg",
    options: [
      "<code>[1, 2, 3, 7 x null, 11]</code>",
      "<code>[1, 2, 3, 11]</code>",
      "<code>[1, 2, 3, 7 x empty, 11]</code>",
      "<code>SyntaxError</code>",
    ],
    answer: 3,
    explanation:
      "<p>const numbers = [1, 2, 3];numbers[10] = 11;console.log(numbers);</p><p></p><p>\n    When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called “empty slots”. These actually have the value of <code>undefined</code>, but you will see something like:</p><p>    <code>[1, 2, 3, 7 x empty, 11]</code></p><p>    depending on where you run it (it’s different for every browser, node, etc.)</p>",
  },
  {
    id: 38,
    question: "What’s the output?",
    image: "question-38.svg",
    options: [
      "<code>1</code> <code>undefined</code> <code>2</code>",
      "<code>undefined</code> <code>undefined</code> <code>undefined</code>",
      "<code>1</code> <code>1</code> <code>2</code>",
      "<code>1</code> <code>undefined</code> <code>undefined</code>",
    ],
    answer: 1,
    explanation:
      "<p>(() => {  let x, y;  try {    throw new Error();  } catch (x) {    (x = 1), (y = 2);    console.log(x);  }  console.log(x);  console.log(y);})();</p><p></p><p>\n    The <code>catch</code> block receives the argument <code>x</code>. This is not the same <code>x</code> as the variable when we pass arguments. This variable <code>x</code> is block-scoped.</p><p>    Later, we set this block-scoped variable equal to <code>1</code>, and set the value of the variable <code>y</code>. Now, we log the block-scoped variable <code>x</code>, which is equal to <code>1</code>.</p><p>    Outside of the <code>catch</code> block, <code>x</code> is still <code>undefined</code>, and <code>y</code> is <code>2</code>. When we want to <code>console.log(x)</code> outside of the <code>catch</code> block, it returns <code>undefined</code>, and <code>y</code> returns <code>2</code>.</p>",
  },
  {
    id: 39,
    question: "Everything in JavaScript is either a…",
    image: "",
    options: [
      "primitive or object",
      "function or object",
      "trick question! only objects",
      "number or object",
    ],
    answer: 1,
    explanation:
      "<p>JavaScript only has primitive types and objects.</p><p>    Primitive types are <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>bigint</code>, <code>number</code>, <code>string</code>, and <code>symbol</code>.</p><p>    What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you’ll note that <code>'foo'.toUpperCase()</code> evaluates to <code>'FOO'</code> and does not result in a <code>TypeError</code>. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. <code>String</code>, and then immediately discard the wrapper after the expression evaluates. All primitives except for <code>null</code> and <code>undefined</code> exhibit this behaviour.</p>",
  },
  {
    id: 40,
    question: "What’s the output?",
    image: "question-40.svg",
    options: [
      "<code>[0, 1, 2, 3, 1, 2]</code>",
      "<code>[6, 1, 2]</code>",
      "<code>[1, 2, 0, 1, 2, 3]</code>",
      "<code>[1, 2, 6]</code>",
    ],
    answer: 3,
    explanation:
      "<p>[  [0, 1],  [2, 3],].reduce(  (acc, cur) => {    return acc.concat(cur);  },  [1, 2]);</p><p></p><p>\n    <code>[1, 2]</code> is our initial value. This is the value we start with, and the value of the very first <code>acc</code>. During the first round, <code>acc</code> is <code>[1,2]</code>, and <code>cur</code> is <code>[0, 1]</code>. We concatenate them, which results in <code>[1, 2, 0, 1]</code>.</p><p>    Then, <code>[1, 2, 0, 1]</code> is <code>acc</code> and <code>[2, 3]</code> is <code>cur</code>. We concatenate them, and get <code>[1, 2, 0, 1, 2, 3]</code></p>",
  },
  {
    id: 41,
    question: "What’s the output?",
    image: "question-41.svg",
    options: [
      "<code>false</code> <code>true</code> <code>false</code>",
      "<code>false</code> <code>false</code> <code>true</code>",
      "<code>false</code> <code>true</code> <code>true</code>",
      "<code>true</code> <code>true</code> <code>false</code>",
    ],
    answer: 2,
    explanation:
      '<p>!!null;!!"";!!1;</p><p></p><p>\n    <code>null</code> is falsy. <code>!null</code> returns <code>true</code>. <code>!true</code> returns <code>false</code>.</p><p>    <code>""</code> is falsy. <code>!""</code> returns <code>true</code>. <code>!true</code> returns <code>false</code>.</p><p>    <code>1</code> is truthy. <code>!1</code> returns <code>false</code>. <code>!false</code> returns <code>true</code>.</p>',
  },
  {
    id: 42,
    question: "What does the `setInterval` method return in the browser?",
    image: "question-42.svg",
    options: [
      "a unique id",
      "the amount of milliseconds specified",
      "the passed function",
      "<code>undefined</code>",
    ],
    answer: 1,
    explanation:
      '<p>setInterval(() => console.log("Hi"), 1000);</p><p></p><p>\n    It returns a unique id. This id can be used to clear that interval with the <code>clearInterval()</code> function.</p>',
  },
  {
    id: 43,
    question: "What does this return?",
    image: "question-43.svg",
    options: [
      '<code>["L", "y", "d", "i", "a"]</code>',
      '<code>["Lydia"]</code>',
      '<code>[[], "Lydia"]</code>',
      '<code>[["L", "y", "d", "i", "a"]]</code>',
    ],
    answer: 1,
    explanation:
      '<p>[..."Lydia"];</p><p></p><p>\n    A string is an iterable. The spread operator maps every character of an iterable to one element.</p>',
  },
  {
    id: 44,
    question: "What’s the output?",
    image: "question-44.svg",
    options: [
      "<code>[0, 10], [10, 20]</code>",
      "<code>20, 20</code>",
      "<code>10, 20</code>",
      "<code>0, 10 and 10, 20</code>",
    ],
    answer: 3,
    explanation:
      "<p>function* generator(i) {  yield i;  yield i * 2;}const gen = generator(10);console.log(gen.next().value);console.log(gen.next().value);</p><p></p><p>\n    Regular functions cannot be stopped mid-way after invocation. However, a generator function can be “stopped” midway, and later continue from where it stopped. Every time a generator function encounters a <code>yield</code> keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t *return* the value, it *yields* the value.</p><p>    First, we initialize the generator function with <code>i</code> equal to <code>10</code>. We invoke the generator function using the <code>next()</code> method. The first time we invoke the generator function, <code>i</code> is equal to <code>10</code>. It encounters the first <code>yield</code> keyword: it yields the value of <code>i</code>. The generator is now “paused”, and <code>10</code> gets logged.</p><p>    Then, we invoke the function again with the <code>next()</code> method. It starts to continue where it stopped previously, still with <code>i</code> equal to <code>10</code>. Now, it encounters the next <code>yield</code> keyword, and yields <code>i * 2</code>. <code>i</code> is equal to <code>10</code>, so it returns <code>10 * 2</code>, which is <code>20</code>. This results in <code>10, 20</code>.</p>",
  },
  {
    id: 45,
    question: "What does this return?",
    image: "question-45.svg",
    options: [
      '<code>"one"</code>',
      '<code>"two"</code>',
      '<code>"two" "one"</code>',
      '<code>"one" "two"</code>',
    ],
    answer: 2,
    explanation:
      "<p>const firstPromise = new Promise((res, rej) => {  setTimeout(res, 500, \"one\");});const secondPromise = new Promise((res, rej) => {  setTimeout(res, 100, \"two\");});Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));</p><p></p><p>\n    When we pass multiple promises to the <code>Promise.race</code> method, it resolves/rejects the *first* promise that resolves/rejects. To the <code>setTimeout</code> method, we pass a timer: 500ms for the first promise (<code>firstPromise</code>), and 100ms for the second promise (<code>secondPromise</code>). This means that the <code>secondPromise</code> resolves first with the value of <code>'two'</code>. <code>res</code> now holds the value of <code>'two'</code>, which gets logged.</p>",
  },
  {
    id: 46,
    question: "What’s the output?",
    image: "question-46.svg",
    options: [
      "<code>null</code>",
      "<code>[null]</code>",
      "<code>[{}]</code>",
      '<code>[{ name: "Lydia" }]</code>',
    ],
    answer: 4,
    explanation:
      '<p>let person = { name: "Lydia" };const members = [person];person = null;console.log(members);</p><p></p><p>\n    First, we declare a variable <code>person</code> with the value of an object that has a <code>name</code> property.</p><p>    ![https://i.imgur.com/TML1MbS.png](https://i.imgur.com/TML1MbS.png)</p><p>    Then, we declare a variable called <code>members</code>. We set the first element of that array equal to the value of the <code>person</code> variable. Objects interact by *reference* when setting them equal to each other. When you assign a reference from one variable to another, you make a *copy* of that reference. (note that they don’t have the *same* reference!)</p><p>    ![https://i.imgur.com/FSG5K3F.png](https://i.imgur.com/FSG5K3F.png)</p><p>    Then, we set the variable <code>person</code> equal to <code>null</code>.</p><p>    ![https://i.imgur.com/sYjcsMT.png](https://i.imgur.com/sYjcsMT.png)</p><p>    We are only modifying the value of the <code>person</code> variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in <code>members</code> still holds its reference to the original object. When we log the <code>members</code> array, the first element still holds the value of the object, which gets logged.</p>',
  },
  {
    id: 47,
    question: "What’s the output?",
    image: "question-47.svg",
    options: [
      '<code>{ name: "Lydia" }, { age: 21 }</code>',
      '<code>"name", "age"</code>',
      '<code>"Lydia", 21</code>',
      '<code>["name", "Lydia"], ["age", 21]</code>',
    ],
    answer: 2,
    explanation:
      '<p>const person = {  name: "Lydia",  age: 21,};for (const item in person) {  console.log(item);}</p><p></p><p>\n    With a <code>for-in</code> loop, we can iterate through object keys, in this case <code>name</code> and <code>age</code>. Under the hood, object keys are strings (if they’re not a Symbol). On every loop, we set the value of <code>item</code> equal to the current key it’s iterating over. First, <code>item</code> is equal to <code>name</code>, and gets logged. Then, <code>item</code> is equal to <code>age</code>, which gets logged.</p>',
  },
  {
    id: 48,
    question: "What’s the output?",
    image: "question-48.svg",
    options: [
      '<code>"345"</code>',
      '<code>"75"</code>',
      "<code>12</code>",
      '<code>"12"</code>',
    ],
    answer: 2,
    explanation:
      '<p>console.log(3 + 4 + "5");</p><p></p><p>\n    Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the *same* precedence. We only have one type of operator: <code>+</code>. For addition, the associativity is left-to-right.</p><p>    <code>3 + 4</code> gets evaluated first. This results in the number <code>7</code>.</p><p>    <code>7 + \'5\'</code> results in <code>"75"</code> because of coercion. JavaScript converts the number <code>7</code> into a string, see question 15. We can concatenate two strings using the <code>+</code>operator. <code>"7" + "5"</code> results in <code>"75"</code>.</p>',
  },
  {
    id: 49,
    question: "What’s the value of `num`?",
    image: "question-49.svg",
    options: [
      "<code>42</code>",
      '<code>"42"</code>',
      "<code>7</code>",
      "<code>NaN</code>",
    ],
    answer: 3,
    explanation:
      '<p>const num = parseInt("7*6", 10);</p><p></p><p>\n    Only the first numbers in the string is returned. Based on the *radix* (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the <code>parseInt</code> checks whether the characters in the string are valid. Once it encounters a character that isn’t a valid number in the radix, it stops parsing and ignores the following characters.</p><p>    - `<code> is not a valid number. It only parses </code>"7"<code> into the decimal </code>7<code>. </code>num<code> now holds the value of </code>7`.</p>',
  },
  {
    id: 50,
    question: "What’s the output?",
    image: "question-50.svg",
    options: [
      "<code>[]</code>",
      "<code>[null, null, null]</code>",
      "<code>[undefined, undefined, undefined]</code>",
      "<code>[ 3 x empty ]</code>",
    ],
    answer: 3,
    explanation:
      '<p>[1, 2, 3].map((num) => {  if (typeof num === "number") return;  return num * 2;});</p><p></p><p>\n    When mapping over the array, the value of <code>num</code> is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement <code>typeof num === "number"</code> returns <code>true</code>. The map function creates a new array and inserts the values returned from the function.</p><p>    However, we don’t return a value. When we don’t return a value from the function, the function returns <code>undefined</code>. For every element in the array, the function block gets called, so for each element we return <code>undefined</code>.</p>',
  },
  {
    id: 51,
    question: "What’s the output?",
    image: "question-51.svg",
    options: [
      '<code>{ name: "Lydia" }, "1997"</code>',
      '<code>{ name: "Sarah" }, "1998"</code>',
      '<code>{ name: "Lydia" }, "1998"</code>',
      '<code>{ name: "Sarah" }, "1997"</code>',
    ],
    answer: 1,
    explanation:
      '<p>function getInfo(member, year) {  member.name = "Lydia";  year = "1998";}const person = { name: "Sarah" };const birthYear = "1997";getInfo(person, birthYear);console.log(person, birthYear);</p><p></p><p>\n    Arguments are passed by *value*, unless their value is an object, then they’re passed by *reference*. <code>birthYear</code> is passed by value, since it’s a string, not an object. When we pass arguments by value, a *copy* of that value is created (see question 46).</p><p>    The variable <code>birthYear</code> has a reference to the value <code>"1997"</code>. The argument <code>year</code> also has a reference to the value <code>"1997"</code>, but it’s not the same value as <code>birthYear</code> has a reference to. When we update the value of <code>year</code> by setting <code>year</code> equal to <code>"1998"</code>, we are only updating the value of <code>year</code>. <code>birthYear</code> is still equal to <code>"1997"</code>.</p><p>    The value of <code>person</code> is an object. The argument <code>member</code> has a (copied) reference to the *same* object. When we modify a property of the object <code>member</code> has a reference to, the value of <code>person</code> will also be modified, since they both have a reference to the same object. <code>person</code>’s <code>name</code> property is now equal to the value <code>"Lydia"</code></p>',
  },
  {
    id: 52,
    question: "What’s the output?",
    image: "question-52.svg",
    options: [
      "<code>It worked! Hello world!</code>",
      "<code>Oh no an error: undefined</code>",
      "<code>SyntaxError: can only throw Error objects</code>",
      "<code>Oh no an error: Hello world!</code>",
    ],
    answer: 4,
    explanation:
      "<p>function greeting() {  throw \"Hello world!\";}function sayHi() {  try {    const data = greeting();    console.log(\"It worked!\", data);  } catch (e) {    console.log(\"Oh no an error:\", e);  }}sayHi();</p><p></p><p>\n    With the <code>throw</code> statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a **string**, a **number**, a **boolean** or an **object**. In this case, our exception is the string <code>'Hello world!'</code>.</p><p>    With the <code>catch</code> statement, we can specify what to do if an exception is thrown in the <code>try</code> block. An exception is thrown: the string <code>'Hello world!'</code>. <code>e</code> is now equal to that string, which we log. This results in <code>'Oh an error: Hello world!'</code>.</p>",
  },
  {
    id: 53,
    question: "What’s the output?",
    image: "question-53.svg",
    options: [
      '<code>"Lamborghini"</code>',
      '<code>"Maserati"</code>',
      "<code>ReferenceError</code>",
      "<code>TypeError</code>",
    ],
    answer: 2,
    explanation:
      '<p>function Car() {  this.make = "Lamborghini";  return { make: "Maserati" };}const myCar = new Car();console.log(myCar.make);</p><p></p><p>\n    When you return a property, the value of the property is equal to the *returned* value, not the value set in the constructor function. We return the string <code>"Maserati"</code>, so <code>myCar.make</code> is equal to <code>"Maserati"</code>.</p>',
  },
  {
    id: 54,
    question: "What’s the output?",
    image: "question-54.svg",
    options: [
      '<code>"undefined", "number"</code>',
      '<code>"number", "number"</code>',
      '<code>"object", "number"</code>',
      '<code>"number", "undefined"</code>',
    ],
    answer: 1,
    explanation:
      '<p>(() => {  let x = (y = 10);})();console.log(typeof x);console.log(typeof y);</p><p></p><p>\n    <code>let x = (y = 10);</code> is actually shorthand for:</p><p>    ```\n    y = 10;let x = y;\n    ```</p><p>    When we set <code>y</code> equal to <code>10</code>, we actually add a property <code>y</code> to the global object (<code>window</code> in browser, <code>global</code> in Node). In a browser, <code>window.y</code> is now equal to <code>10</code>.</p><p>    Then, we declare a variable <code>x</code> with the value of <code>y</code>, which is <code>10</code>. Variables declared with the <code>let</code> keyword are *block scoped*, they are only defined within the block they’re declared in; the immediately invoked function expression (IIFE) in this case. When we use the <code>typeof</code> operator, the operand <code>x</code> is not defined: we are trying to access <code>x</code> outside of the block it’s declared in. This means that <code>x</code> is not defined. Values who haven’t been assigned a value or declared are of type <code>"undefined"</code>. <code>console.log(typeof x)</code> returns <code>"undefined"</code>.</p><p>    However, we created a global variable <code>y</code> when setting <code>y</code> equal to <code>10</code>. This value is accessible anywhere in our code. <code>y</code> is defined, and holds a value of type <code>"number"</code>. <code>console.log(typeof y)</code> returns <code>"number"</code>.</p>',
  },
  {
    id: 55,
    question: "What’s the output?",
    image: "question-55.svg",
    options: [
      '<code>"Woof I am Mara"</code>, <code>TypeError</code>',
      '<code>"Woof I am Mara"</code>, <code>"Woof I am Mara"</code>',
      '<code>"Woof I am Mara"</code>, <code>undefined</code>',
      "<code>TypeError</code>, <code>TypeError</code>",
    ],
    answer: 1,
    explanation:
      '<p>class Dog {  constructor(name) {    this.name = name;  }}Dog.prototype.bark = function () {  console.log(<code>Woof I am ${this.name}</code>);};const pet = new Dog("Mara");pet.bark();delete Dog.prototype.bark;pet.bark();</p><p></p><p>\n    We can delete properties from objects using the <code>delete</code> keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the <code>bark</code> function is not available anymore on the prototype after <code>delete Dog.prototype.bark</code>, yet we still try to access it.</p><p>    When we try to invoke something that is not a function, a <code>TypeError</code> is thrown. In this case <code>TypeError: pet.bark is not a function</code>, since <code>pet.bark</code> is <code>undefined</code>.</p>',
  },
  {
    id: 56,
    question: "What’s the output?",
    image: "question-56.svg",
    options: [
      "<code>[1, 1, 2, 3, 4]</code>",
      "<code>[1, 2, 3, 4]</code>",
      "<code>{1, 1, 2, 3, 4}</code>",
      "<code>{1, 2, 3, 4}</code>",
    ],
    answer: 4,
    explanation:
      "<p>const set = new Set([1, 1, 2, 3, 4]);console.log(set);</p><p></p><p>\n    The <code>Set</code> object is a collection of *unique* values: a value can only occur once in a set.</p><p>    We passed the iterable <code>[1, 1, 2, 3, 4]</code> with a duplicate value <code>1</code>. Since we cannot have two of the same values in a set, one of them is removed. This results in <code>{1, 2, 3, 4}</code>.</p>",
  },
  {
    id: 57,
    question: "What’s the output?",
    image: "question-57.svg",
    options: [
      "<code>10</code>",
      "<code>11</code>",
      "<code>Error</code>",
      "<code>NaN</code>",
    ],
    answer: 3,
    explanation:
      '<p>// counter.jslet counter = 10;export default counter;</p><p>// index.jsimport myCounter from "./counter";myCounter += 1;console.log(myCounter);</p><p></p><p>\n    An imported module is *read-only*: you cannot modify the imported module. Only the module that exports them can change its value.</p><p>    When we try to increment the value of <code>myCounter</code>, it throws an error: <code>myCounter</code> is read-only and cannot be modified.</p>',
  },
  {
    id: 58,
    question: "What’s the output?",
    image: "question-58.svg",
    options: [
      "<code>false</code>, <code>true</code>",
      '<code>"Lydia"</code>, <code>21</code>',
      "<code>true</code>, <code>true</code>",
      "<code>undefined</code>, <code>undefined</code>",
    ],
    answer: 1,
    explanation:
      '<p>const name = "Lydia";age = 21;console.log(delete name);console.log(delete age);</p><p></p><p>\n    The <code>delete</code> operator returns a boolean value: <code>true</code> on a successful deletion, else it’ll return <code>false</code>. However, variables declared with the <code>var</code>, <code>const</code> or <code>let</code> keyword cannot be deleted using the <code>delete</code> operator.</p><p>    The <code>name</code> variable was declared with a <code>const</code> keyword, so its deletion is not successful: <code>false</code> is returned. When we set <code>age</code> equal to <code>21</code>, we actually added a property called <code>age</code> to the global object. You can successfully delete properties from objects this way, also the global object, so <code>delete age</code> returns <code>true</code>.</p>',
  },
  {
    id: 59,
    question: "What’s the output?",
    image: "question-59.svg",
    options: [
      "<code>[[1, 2, 3, 4, 5]]</code>",
      "<code>[1, 2, 3, 4, 5]</code>",
      "<code>1</code>",
      "<code>[1]</code>",
    ],
    answer: 3,
    explanation:
      "<p>const numbers = [1, 2, 3, 4, 5];const [y] = numbers;console.log(y);</p><p></p><p>\n    We can unpack values from arrays or properties from objects through destructuring. For example:</p><p>    ```\n    [a, b] = [1, 2];\n    ```</p><p>    ![https://i.imgur.com/ADFpVop.png](https://i.imgur.com/ADFpVop.png)</p><p>    The value of <code>a</code> is now <code>1</code>, and the value of <code>b</code> is now <code>2</code>. What we actually did in the question, is:</p><p>    ```\n    [y] = [1, 2, 3, 4, 5];\n    ```</p><p>    ![https://i.imgur.com/NzGkMNk.png](https://i.imgur.com/NzGkMNk.png)</p><p>    This means that the value of <code>y</code> is equal to the first value in the array, which is the number <code>1</code>. When we log <code>y</code>, <code>1</code> is returned.</p>",
  },
  {
    id: 60,
    question: "What’s the output?",
    image: "question-60.svg",
    options: [
      '<code>{ admin: true, user: { name: "Lydia", age: 21 } }</code>',
      '<code>{ admin: true, name: "Lydia", age: 21 }</code>',
      '<code>{ admin: true, user: ["Lydia", 21] }</code>',
      "<code>{ admin: true }</code>",
    ],
    answer: 2,
    explanation:
      '<p>const user = { name: "Lydia", age: 21 };const admin = { admin: true, ...user };console.log(admin);</p><p></p><p>\n    It’s possible to combine objects using the spread operator <code>...</code>. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the <code>user</code> object, and add them to the <code>admin</code> object. The <code>admin</code> object now contains the copied key/value pairs, which results in <code>{ admin: true, name: "Lydia", age: 21 }</code>.</p>',
  },
  {
    id: 61,
    question: "What’s the output?",
    image: "question-61.svg",
    options: [
      '<code>{ name: "Lydia", age: 21 }</code>, <code>["name", "age"]</code>',
      '<code>{ name: "Lydia", age: 21 }</code>, <code>["name"]</code>',
      '<code>{ name: "Lydia"}</code>, <code>["name", "age"]</code>',
      '<code>{ name: "Lydia"}</code>, <code>["age"]</code>',
    ],
    answer: 2,
    explanation:
      '<p>const person = { name: "Lydia" };Object.defineProperty(person, "age", { value: 21 });console.log(person);console.log(Object.keys(person));</p><p></p><p>\n    With the <code>defineProperty</code> method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the <code>defineProperty</code> method, they are by default *not enumerable*. The <code>Object.keys</code> method returns all *enumerable* property names from an object, in this case only <code>"name"</code>.</p><p>    Properties added using the <code>defineProperty</code> method are immutable by default. You can override this behavior using the <code>writable</code>, <code>configurable</code> and <code>enumerable</code> properties. This way, the <code>defineProperty</code> method gives you a lot more control over the properties you’re adding to an object.</p>',
  },
  {
    id: 62,
    question: "What’s the output?",
    image: "question-62.svg",
    options: [
      '<code>"{"level":19, "health":90}"</code>',
      '<code>"{"username": "lydiahallie"}"</code>',
      '<code>"["level", "health"]"</code>',
      '<code>"{"username": "lydiahallie", "level":19, "health":90}"</code>',
    ],
    answer: 1,
    explanation:
      '<p>const settings = {  username: "lydiahallie",  level: 19,  health: 90,};const data = JSON.stringify(settings, ["level", "health"]);console.log(data);</p><p></p><p>\n    The second argument of <code>JSON.stringify</code> is the *replacer*. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.</p><p>    If the replacer is an *array*, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names <code>"level"</code> and <code>"health"</code> are included, <code>"username"</code> is excluded. <code>data</code> is now equal to <code>"{"level":19, "health":90}"</code>.</p><p>    If the replacer is a *function*, this function gets called on every property in the object you’re stringifying. The value returned from this function will be the value of the property when it’s added to the JSON string. If the value is <code>undefined</code>, this property is excluded from the JSON string.</p>',
  },
  {
    id: 63,
    question: "What’s the output?",
    image: "question-63.svg",
    options: [
      "<code>10</code>, <code>10</code>",
      "<code>10</code>, <code>11</code>",
      "<code>11</code>, <code>11</code>",
      "<code>11</code>, <code>12</code>",
    ],
    answer: 1,
    explanation:
      "<p>let num = 10;const increaseNumber = () => num++;const increasePassedNumber = (number) => number++;const num1 = increaseNumber();const num2 = increasePassedNumber(num1);console.log(num1);console.log(num2);</p><p></p><p>\n    The unary operator <code>++</code> *first returns* the value of the operand, *then increments* the value of the operand. The value of <code>num1</code> is <code>10</code>, since the <code>increaseNumber</code> function first returns the value of <code>num</code>, which is <code>10</code>, and only increments the value of <code>num</code> afterwards.</p><p>    <code>num2</code> is <code>10</code>, since we passed <code>num1</code> to the <code>increasePassedNumber</code>. <code>number</code> is equal to <code>10</code>(the value of <code>num1</code>. Again, the unary operator <code>++</code> *first returns* the value of the operand, *then increments* the value of the operand. The value of <code>number</code> is <code>10</code>, so <code>num2</code> is equal to <code>10</code>.</p>",
  },
  {
    id: 64,
    question: "What’s the output?",
    image: "question-64.svg",
    options: [
      "<code>20</code>, <code>40</code>, <code>80</code>, <code>160</code>",
      "<code>20</code>, <code>40</code>, <code>20</code>, <code>40</code>",
      "<code>20</code>, <code>20</code>, <code>20</code>, <code>40</code>",
      "<code>NaN</code>, <code>NaN</code>, <code>20</code>, <code>40</code>",
    ],
    answer: 3,
    explanation:
      '<p>const value = { number: 10 };const multiply = (x = { ...value }) => {  console.log((x.number *= 2));};multiply();multiply();multiply(value);multiply(value);</p><p></p><p>\n    In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is <code>"undefined"</code>. In this case, we spread the properties of the <code>value</code> object into a new object, so <code>x</code> has the default value of <code>{ number: 10 }</code>.</p><p>    The default argument is evaluated at *call time*! Every time we call the function, a *new* object is created. We invoke the <code>multiply</code> function the first two times without passing a value: <code>x</code> has the default value of <code>{ number: 10 }</code>. We then log the multiplied value of that number, which is <code>20</code>.</p><p>    The third time we invoke multiply, we do pass an argument: the object called <code>value</code>. The <code>*=</code> operator is actually shorthand for <code>x.number = x.number * 2</code>: we modify the value of <code>x.number</code>, and log the multiplied value <code>20</code>.</p><p>    The fourth time, we pass the <code>value</code> object again. <code>x.number</code> was previously modified to <code>20</code>, so <code>x.number *= 2</code> logs <code>40</code>.</p>',
  },
  {
    id: 65,
    question: "What’s the output?",
    image: "question-65.svg",
    options: [
      "<code>1</code> <code>2</code> and <code>3</code> <code>3</code> and <code>6</code> <code>4</code>",
      "<code>1</code> <code>2</code> and <code>2</code> <code>3</code> and <code>3</code> <code>4</code>",
      "<code>1</code> <code>undefined</code> and <code>2</code> <code>undefined</code> and <code>3</code> <code>undefined</code> and <code>4</code> <code>undefined</code>",
      "<code>1</code> <code>2</code> and <code>undefined</code> <code>3</code> and <code>undefined</code> <code>4</code>",
    ],
    answer: 4,
    explanation:
      "<p>[1, 2, 3, 4].reduce((x, y) => console.log(x, y));</p><p></p><p>\n    The first argument that the <code>reduce</code> method receives is the *accumulator*, <code>x</code> in this case. The second argument is the *current value*, <code>y</code>. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.</p><p>    In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.</p><p>    The value of the accumulator is equal to the previously returned value of the callback function. If you don’t pass the optional <code>initialValue</code> argument to the <code>reduce</code> method, the accumulator is equal to the first element on the first call.</p><p>    On the first call, the accumulator (<code>x</code>) is <code>1</code>, and the current value (<code>y</code>) is <code>2</code>. We don’t return from the callback function, we log the accumulator and current value: <code>1</code> and <code>2</code> get logged.</p><p>    If you don’t return a value from a function, it returns <code>undefined</code>. On the next call, the accumulator is <code>undefined</code>, and the current value is <code>3</code>. <code>undefined</code> and <code>3</code> get logged.</p><p>    On the fourth call, we again don’t return from the callback function. The accumulator is again <code>undefined</code>, and the current value is <code>4</code>. <code>undefined</code> and <code>4</code> get logged.</p>",
  },
  {
    id: 66,
    question:
      "With which constructor can we successfully extend the `Dog` class?",
    image: "question-66.svg",
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation:
      "<p>class Dog {  constructor(name) {    this.name = name;  }};class Labrador extends Dog {  // 1  constructor(name, size) {    this.size = size;  }  // 2  constructor(name, size) {    super(name);    this.size = size;  }  // 3  constructor(size) {    super(name);    this.size = size;  }  // 4  constructor(name, size) {    this.name = name;    this.size = size;  }};</p><p></p><p>\n    In a derived class, you cannot access the <code>this</code> keyword before calling <code>super</code>. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.</p><p>    With the <code>super</code> keyword, we call that parent class’s constructor with the given arguments. The parent’s constructor receives the <code>name</code> argument, so we need to pass <code>name</code> to <code>super</code>.</p><p>    The <code>Labrador</code> class receives two arguments, <code>name</code> since it extends <code>Dog</code>, and <code>size</code> as an extra property on the <code>Labrador</code> class. They both need to be passed to the constructor function on <code>Labrador</code>, which is done correctly using constructor 2.</p>",
  },
  {
    id: 67,
    question: "What’s the output?",
    image: "question-67.svg",
    options: [
      "<code>running index.js</code>, <code>running sum.js</code>, <code>3</code>",
      "<code>running sum.js</code>, <code>running index.js</code>, <code>3</code>",
      "<code>running sum.js</code>, <code>3</code>, <code>running index.js</code>",
      "<code>running index.js</code>, <code>undefined</code>, <code>running sum.js</code>",
    ],
    answer: 2,
    explanation:
      '<p>// index.jsconsole.log("running index.js");import { sum } from "./sum.js";console.log(sum(1, 2));// sum.jsconsole.log("running sum.js");export const sum = (a, b) => a + b;</p><p></p><p>\n    With the <code>import</code> keyword, all imported modules are *pre-parsed*. This means that the imported modules get run *first*, the code in the file which imports the module gets executed *after*.</p><p>    This is a difference between <code>require()</code> in CommonJS and <code>import</code>! With <code>require()</code>, you can load dependencies on demand while the code is being run. If we would have used <code>require</code> instead of <code>import</code>, <code>running index.js</code>, <code>running sum.js</code>, <code>3</code> would have been logged to the console.</p>',
  },
  {
    id: 68,
    question: "What’s the output?",
    image: "question-68.svg",
    options: [
      "<code>true</code>, <code>true</code>, <code>false</code>",
      "<code>false</code>, <code>true</code>, <code>false</code>",
      "<code>true</code>, <code>false</code>, <code>true</code>",
      "<code>true</code>, <code>true</code>, <code>true</code>",
    ],
    answer: 1,
    explanation:
      "<p>console.log(Number(2) === Number(2));console.log(Boolean(false) === Boolean(false));console.log(Symbol(\"foo\") === Symbol(\"foo\"));</p><p></p><p>\n    Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first <code>Symbol('foo')</code>, and the second <code>Symbol('foo')</code>. These two values are unique and not equal to each other, <code>Symbol('foo') === Symbol('foo')</code> returns <code>false</code>.</p>",
  },
  {
    id: 69,
    question: "What’s the output?",
    image: "question-69.svg",
    options: [
      '<code>"Lydia Hallie"</code>, <code>"Lydia Hallie"</code>',
      '<code>" Lydia Hallie"</code>, <code>" Lydia Hallie"</code> (<code>"[13x whitespace]Lydia Hallie"</code>, <code>"[2x whitespace]Lydia Hallie"</code>)',
      '<code>" Lydia Hallie"</code>, <code>"Lydia Hallie"</code> (<code>"[1x whitespace]Lydia Hallie"</code>, <code>"Lydia Hallie"</code>)',
      '<code>"Lydia Hallie"</code>, <code>"Lyd"</code>,',
    ],
    answer: 3,
    explanation:
      '<p>const name = "Lydia Hallie";console.log(name.padStart(13));console.log(name.padStart(2));</p><p></p><p>\n    With the <code>padStart</code> method, we can add padding to the beginning of a string. The value passed to this method is the *total* length of the string together with the padding. The string <code>"Lydia Hallie"</code> has a length of <code>12</code>. <code>name.padStart(13)</code> inserts 1 space at the start of the string, because 12 + 1 is 13.</p><p>    If the argument passed to the <code>padStart</code> method is smaller than the length of the array, no padding will be added.</p>',
  },
  {
    id: 70,
    question: "What’s the output?",
    image: "question-70.svg",
    options: [
      '<code>"🥑💻"</code>',
      "<code>257548</code>",
      "A string containing their code points",
      "Error",
    ],
    answer: 1,
    explanation:
      '<p>console.log("🥑" + "💻");</p><p></p><p>\n    With the <code>+</code> operator, you can concatenate strings. In this case, we are concatenating the string <code>"🥑"</code> with the string <code>"💻"</code>, resulting in <code>"🥑💻"</code>.</p>',
  },
  {
    id: 71,
    question:
      "How can we log the values that are commented out after the console.log statement?",
    image: "question-71.svg",
    options: [
      '<code>game.next("Yes").value</code> and <code>game.next().value</code>',
      '<code>game.next.value("Yes")</code> and <code>game.next.value()</code>',
      '<code>game.next().value</code> and <code>game.next("Yes").value</code>',
      '<code>game.next.value()</code> and <code>game.next.value("Yes")</code>',
    ],
    answer: 3,
    explanation:
      '<p>function* startGame() {  const answer = yield "Do you love JavaScript?";  if (answer !== "Yes") {    return "Oh wow... Guess we\'re gone here";  }  return "JavaScript loves you back ❤️";}const game = startGame();console.log(/* 1 */); // Do you love JavaScript?console.log(/* 2 */); // JavaScript loves you back ❤️</p><p></p><p>\n    A generator function “pauses” its execution when it sees the <code>yield</code> keyword. First, we have to let the function yield the string “Do you love JavaScript?”, which can be done by calling <code>game.next().value</code>.</p><p>    Every line is executed, until it finds the first <code>yield</code> keyword. There is a <code>yield</code> keyword on the first line within the function: the execution stops with the first yield! *This means that the variable <code>answer</code> is not defined yet!*</p><p>    When we call <code>game.next("Yes").value</code>, the previous <code>yield</code> is replaced with the value of the parameters passed to the <code>next()</code> function, <code>"Yes"</code> in this case. The value of the variable <code>answer</code> is now equal to <code>"Yes"</code>. The condition of the if-statement returns <code>false</code>, and <code>JavaScript loves you back ❤️</code> gets logged.</p>',
  },
  {
    id: 72,
    question: "What’s the output?",
    image: "question-72.svg",
    options: [
      "<code>Hello world!</code>",
      "<code>Hello</code>  <code>world</code>",
      "<code>Hello\\nworld</code>",
      "<code>Hello\\n</code>  <code>world</code>",
    ],
    answer: 3,
    explanation:
      '<p>console.log(String.raw<code>Hello\\nworld</code>);</p><p></p><p>\n    <code>String.raw</code> returns a string where the escapes (<code>\\n</code>, <code>\\v</code>, <code>\\t</code> etc.) are ignored! Backslashes can be an issue since you could end up with something like:</p><p>    <code>const path = </code>C:\\Documents\\Projects\\table.html``</p><p>    Which would result in:</p><p>    <code>"C:DocumentsProjects able.html"</code></p><p>    With <code>String.raw</code>, it would simply ignore the escape and print:</p><p>    <code>C:\\Documents\\Projects\\table.html</code></p><p>    In this case, the string is <code>Hello\\nworld</code>, which gets logged.</p>',
  },
  {
    id: 73,
    question: "What’s the output?",
    image: "question-73.svg",
    options: [
      '<code>"I made it!"</code>',
      '<code>Promise {<resolved>: "I made it!"}</code>',
      "<code>Promise {<pending>}</code>",
      "<code>undefined</code>",
    ],
    answer: 3,
    explanation:
      '<p>async function getData() {  return await Promise.resolve("I made it!");}const data = getData();console.log(data);</p><p></p><p>\n    An async function always returns a promise. The <code>await</code> still has to wait for the promise to resolve: a pending promise gets returned when we call <code>getData()</code> in order to set <code>data</code> equal to it.</p><p>    If we wanted to get access to the resolved value <code>"I made it"</code>, we could have used the <code>.then()</code> method on <code>data</code>:</p><p>    <code>data.then(res => console.log(res))</code></p><p>    This would’ve logged <code>"I made it!"</code></p>',
  },
  {
    id: 74,
    question: "What’s the output?",
    image: "question-74.svg",
    options: [
      "<code>['apple', 'banana']</code>",
      "<code>2</code>",
      "<code>true</code>",
      "<code>undefined</code>",
    ],
    answer: 2,
    explanation:
      '<p>function addToList(item, list) {  return list.push(item);}const result = addToList("apple", ["banana"]);console.log(result);</p><p></p><p>\n    The <code>.push()</code> method returns the *length* of the new array! Previously, the array contained one element (the string <code>"banana"</code>) and had a length of <code>1</code>. After adding the string <code>"apple"</code> to the array, the array contains two elements, and has a length of <code>2</code>. This gets returned from the <code>addToList</code> function.</p><p>    The <code>push</code> method modifies the original array. If you wanted to return the *array* from the function rather than the *length of the array*, you should have returned <code>list</code> after pushing <code>item</code> to it.</p>',
  },
  {
    id: 75,
    question: "What’s the output?",
    image: "question-75.svg",
    options: [
      "<code>{ x: 100, y: 20 }</code>",
      "<code>{ x: 10, y: 20 }</code>",
      "<code>{ x: 100 }</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 2,
    explanation:
      "<p>const box = { x: 10, y: 20 };Object.freeze(box);const shape = box;shape.x = 100;console.log(shape);</p><p></p><p>\n    <code>Object.freeze</code> makes it impossible to add, remove, or modify properties of an object (unless the property’s value is another object).</p><p>    When we create the variable <code>shape</code> and set it equal to the frozen object <code>box</code>, <code>shape</code> also refers to a frozen object. You can check whether an object is frozen by using <code>Object.isFrozen</code>. In this case, <code>Object.isFrozen(shape)</code> returns true, since the variable <code>shape</code> has a reference to a frozen object.</p><p>    Since <code>shape</code> is frozen, and since the value of <code>x</code> is not an object, we cannot modify the property <code>x</code>. <code>x</code> is still equal to <code>10</code>, and <code>{ x: 10, y: 20 }</code> gets logged.</p>",
  },
  {
    id: 76,
    question: "What’s the output?",
    image: "question-76.svg",
    options: [
      '<code>"Lydia"</code>',
      '<code>"myName"</code>',
      "<code>undefined</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 3,
    explanation:
      '<p>const { name: myName } = { name: "Lydia" };console.log(name);</p><p></p><p>\n    When we unpack the property <code>name</code> from the object on the right-hand side, we assign its value <code>"Lydia"</code> to a variable with the name <code>myName</code>.</p><p>    With <code>{ name: myName }</code>, we tell JavaScript that we want to create a new variable called <code>myName</code> with the value of the <code>name</code> property on the right-hand side.</p><p>    Since we try to log <code>name</code>, a variable that is not defined, <code>undefined</code> is returned on the left side assignment. Later, the value of <code>Lydia</code> is stored through the destructuring assignment.</p>',
  },
  {
    id: 77,
    question: "Is this a pure function?",
    image: "question-77.svg",
    options: ["Yes", "No"],
    answer: 1,
    explanation:
      "<p>function sum(a, b) {  return a + b;}</p><p></p><p>\n    A pure function is a function that *always* returns the same result, if the same arguments are passed.</p><p>    The <code>sum</code> function always returns the same result. If we pass <code>1</code> and <code>2</code>, it will *always* return <code>3</code> without side effects. If we pass <code>5</code> and <code>10</code>, it will *always* return <code>15</code>, and so on. This is the definition of a pure function.</p>",
  },
  {
    id: 78,
    question: "What is the output?",
    image: "question-78.svg",
    options: [
      "<code>Calculated! 20</code> <code>Calculated! 20</code> <code>Calculated! 20</code>",
      "<code>Calculated! 20</code> <code>From cache! 20</code> <code>Calculated! 20</code>",
      "<code>Calculated! 20</code> <code>From cache! 20</code> <code>From cache! 20</code>",
      "<code>Calculated! 20</code> <code>From cache! 20</code> <code>Error</code>",
    ],
    answer: 3,
    explanation:
      "<p>const add = () => {  const cache = {};  return (num) => {    if (num in cache) {      return <code>From cache! ${cache[num]}</code>;    } else {      const result = num + 10;      cache[num] = result;      return <code>Calculated! ${result}</code>;    }  };};const addFunction = add();console.log(addFunction(10));console.log(addFunction(10));console.log(addFunction(5 * 2));</p><p></p><p>\n    The <code>add</code> function is a *memoized* function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a <code>cache</code> object that stores the previously returned values.</p><p>    If we call the <code>addFunction</code> function again with the same argument, it first checks whether it has already gotten that value in its cache. If that’s the case, the caches value will be returned, which saves on execution time. Else, if it’s not cached, it will calculate the value and store it afterwards.</p><p>    We call the <code>addFunction</code> function three times with the same value: on the first invocation, the value of the function when <code>num</code> is equal to <code>10</code> isn’t cached yet. The condition of the if-statement <code>num in cache</code> returns <code>false</code>, and the else block gets executed: <code>Calculated! 20</code> gets logged, and the value of the result gets added to the cache object. <code>cache</code> now looks like <code>{ 10: 20 }</code>.</p><p>    The second time, the <code>cache</code> object contains the value that gets returned for <code>10</code>. The condition of the if-statement <code>num in cache</code> returns <code>true</code>, and <code>'From cache! 20'</code> gets logged.</p><p>    The third time, we pass <code>5 * 2</code> to the function which gets evaluated to <code>10</code>. The <code>cache</code> object contains the value that gets returned for <code>10</code>. The condition of the if-statement <code>num in cache</code> returns <code>true</code>, and <code>'From cache! 20'</code> gets logged.</p>",
  },
  {
    id: 79,
    question: "What is the output?",
    image: "question-79.svg",
    options: [
      '<code>0</code> <code>1</code> <code>2</code> <code>3</code> and <code>"☕"</code> <code>"💻"</code> <code>"🍷"</code> <code>"🍫"</code>',
      '<code>"☕"</code> <code>"💻"</code> <code>"🍷"</code> <code>"🍫"</code> and <code>"☕"</code> <code>"💻"</code> <code>"🍷"</code> <code>"🍫"</code>',
      '<code>"☕"</code> <code>"💻"</code> <code>"🍷"</code> <code>"🍫"</code> and <code>0</code> <code>1</code> <code>2</code> <code>3</code>',
      '<code>0</code> <code>1</code> <code>2</code> <code>3</code> and <code>{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}</code>',
    ],
    answer: 1,
    explanation:
      '<p>const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];for (let item in myLifeSummedUp) {  console.log(item);}for (let item of myLifeSummedUp) {  console.log(item);}</p><p></p><p>\n    With a *for-in* loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the “keys” of array elements, which are actually their indexes. You could see an array as:</p><p>    <code>{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}</code></p><p>    Where the keys are the enumerable properties. <code>0</code> <code>1</code> <code>2</code> <code>3</code> get logged.</p><p>    With a *for-of* loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the variable “item” is equal to the element it’s currently iterating over, <code>"☕"</code> <code>"💻"</code> <code>"🍷"</code> <code>"🍫"</code> get logged.</p>',
  },
  {
    id: 80,
    question: "What is the output?",
    image: "question-80.svg",
    options: [
      '<code>["1 + 2", "1 * 2", "1 / 2"]</code>',
      '<code>["12", 2, 0.5]</code>',
      "<code>[3, 2, 0.5]</code>",
      "<code>[1, 1, 1]</code>",
    ],
    answer: 3,
    explanation:
      "<p>const list = [1 + 2, 1 * 2, 1 / 2];console.log(list);</p><p></p><p>\n    Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.</p><p>    The element will be equal to the returned value. <code>1 + 2</code> returns <code>3</code>, <code>1 * 2</code> returns <code>2</code>, and <code>1 / 2</code> returns <code>0.5</code>.</p>",
  },
  {
    id: 81,
    question: "What is the output?",
    image: "question-81.svg",
    options: [
      "<code>Hi there,</code>",
      "<code>Hi there, undefined</code>",
      "<code>Hi there, null</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 2,
    explanation:
      '<p>function sayHi(name) {  return <code>Hi there, ${name}</code>;}console.log(sayHi());</p><p></p><p>\n    By default, arguments have the value of <code>undefined</code>, unless a value has been passed to the function. In this case, we didn’t pass a value for the <code>name</code> argument. <code>name</code> is equal to <code>undefined</code> which gets logged.</p><p>    In ES6, we can overwrite this default <code>undefined</code> value with default parameters. For example:</p><p>    <code>function sayHi(name = "Lydia") { ... }</code></p><p>    In this case, if we didn’t pass a value or if we passed <code>undefined</code>, <code>name</code> would always be equal to the string <code>Lydia</code></p>',
  },
  {
    id: 82,
    question: "What is the output?",
    image: "question-82.svg",
    options: [
      '<code>"🥑"</code> and <code>"😍"</code>',
      '<code>"🥑"</code> and <code>"😎"</code>',
      '<code>"😍"</code> and <code>"😎"</code>',
      '<code>"😎"</code> and <code>"😎"</code>',
    ],
    answer: 2,
    explanation:
      '<p>var status = "😎";setTimeout(() => {  const status = "😍";  const data = {    status: "🥑",    getStatus() {      return this.status;    },  };  console.log(data.getStatus());  console.log(data.getStatus.call(this));}, 0);</p><p></p><p>\n    The value of the <code>this</code> keyword is dependent on where you use it. In a **method**, like the <code>getStatus</code> method, the <code>this</code> keyword refers to *the object that the method belongs to*. The method belongs to the <code>data</code> object, so <code>this</code> refers to the <code>data</code> object. When we log <code>this.status</code>, the <code>status</code> property on the <code>data</code> object gets logged, which is <code>"🥑"</code>.</p><p>    With the <code>call</code> method, we can change the object to which the <code>this</code> keyword refers. In **functions**, the <code>this</code> keyword refers to the *the object that the function belongs to*. We declared the <code>setTimeout</code> function on the *global object*, so within the <code>setTimeout</code> function, the <code>this</code> keyword refers to the *global object*. On the global object, there is a variable called *status* with the value of <code>"😎"</code>. When logging <code>this.status</code>, <code>"😎"</code> gets logged.</p>',
  },
  {
    id: 83,
    question: "What is the output?",
    image: "question-83.svg",
    options: [
      '<code>{ name: "Lydia", age: 21 }</code>',
      '<code>{ name: "Lydia", age: 21, city: "Amsterdam" }</code>',
      '<code>{ name: "Lydia", age: 21, city: undefined }</code>',
      '<code>"Amsterdam"</code>',
    ],
    answer: 1,
    explanation:
      '<p>const person = {  name: "Lydia",  age: 21,};let city = person.city;city = "Amsterdam";console.log(person);</p><p></p><p>\n    We set the variable <code>city</code> equal to the value of the property called <code>city</code> on the <code>person</code> object. There is no property on this object called <code>city</code>, so the variable <code>city</code> has the value of <code>undefined</code>.</p><p>    Note that we are *not* referencing the <code>person</code> object itself! We simply set the variable <code>city</code> equal to the current value of the <code>city</code> property on the <code>person</code> object.</p><p>    Then, we set <code>city</code> equal to the string <code>"Amsterdam"</code>. This doesn’t change the person object: there is no reference to that object.</p><p>    When logging the <code>person</code> object, the unmodified object gets returned.</p>',
  },
  {
    id: 84,
    question: "What is the output?",
    image: "question-84.svg",
    options: [
      '<code>"Sorry, you\'re too young."</code>',
      '<code>"Yay! You\'re old enough!"</code>',
      "<code>ReferenceError</code>",
      "<code>undefined</code>",
    ],
    answer: 3,
    explanation:
      '<p>function checkAge(age) {  if (age < 18) {    const message = "Sorry, you\'re too young.";  } else {    const message = "Yay! You\'re old enough!";  }  return message;}console.log(checkAge(21));</p><p></p><p>\n    Variables with the <code>const</code> and <code>let</code> keyword are *block-scoped*. A block is anything between curly brackets (<code>{ }</code>). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it’s declared in, a ReferenceError gets thrown.</p>',
  },
  {
    id: 85,
    question: "What kind of information would get logged?",
    image: "question-85.svg",
    options: [
      "The result of the <code>fetch</code> method.",
      "The result of the second invocation of the <code>fetch</code> method.",
      "The result of the callback in the previous <code>.then()</code>.",
      "It would always be undefined.",
    ],
    answer: 3,
    explanation:
      '<p>fetch("https://www.website.com/api/user/1")  .then((res) => res.json())  .then((res) => console.log(res));</p><p></p><p>\n    The value of <code>res</code> in the second <code>.then</code> is equal to the returned value of the previous <code>.then</code>. You can keep chaining <code>.then</code>s like this, where the value is passed to the next handler.</p>',
  },
  {
    id: 86,
    question:
      "Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?",
    image: "question-86.svg",
    options: [
      "<code>!!name</code>",
      "<code>name</code>",
      "<code>new Boolean(name)</code>",
      "<code>name.length</code>",
    ],
    answer: 1,
    explanation:
      "<p>function getName(name) {  const hasName = //}</p><p></p><p>\n    With <code>!!name</code>, we determine whether the value of <code>name</code> is truthy or falsy. If name is truthy, which we want to test for, <code>!name</code> returns <code>false</code>. <code>!false</code> (which is what <code>!!name</code> practically is) returns <code>true</code>.</p><p>    By setting <code>hasName</code> equal to <code>name</code>, you set <code>hasName</code> equal to whatever value you passed to the <code>getName</code> function, not the boolean value <code>true</code>.</p><p>    <code>new Boolean(true)</code> returns an object wrapper, not the boolean value itself.</p><p>    <code>name.length</code> returns the length of the passed argument, not whether it’s <code>true</code>.</p>",
  },
  {
    id: 87,
    question: "What’s the output?",
    image: "question-87.svg",
    options: [
      '<code>"""</code>',
      '<code>"I"</code>',
      "<code>SyntaxError</code>",
      "<code>undefined</code>",
    ],
    answer: 2,
    explanation:
      '<p>console.log("I want pizza"[0]);</p><p></p><p>\n    In order to get a character at a specific index of a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case, we want to get the element with index 0, the character <code>"I\'</code>, which gets logged.</p><p>    Note that this method is not supported in IE7 and below. In that case, use <code>.charAt()</code>.</p>',
  },
  {
    id: 88,
    question: "What’s the output?",
    image: "question-88.svg",
    options: [
      "<code>NaN</code>",
      "<code>20</code>",
      "<code>ReferenceError</code>",
      "<code>undefined</code>",
    ],
    answer: 2,
    explanation:
      "<p>function sum(num1, num2 = num1) {  console.log(num1 + num2);}sum(10);</p><p></p><p>\n    You can set a default parameter’s value equal to another parameter of the function, as long as they’ve been defined *before* the default parameter. We pass the value <code>10</code> to the <code>sum</code> function. If the <code>sum</code> function only receives 1 argument, it means that the value for <code>num2</code> is not passed, and the value of <code>num1</code> is equal to the passed value <code>10</code> in this case. The default value of <code>num2</code> is the value of <code>num1</code>, which is <code>10</code>. <code>num1 + num2</code> returns <code>20</code>.</p><p>    If you’re trying to set a default parameter’s value equal to a parameter which is defined *after* (to the right), the parameter’s value hasn’t been initialized yet, which will throw an error.</p>",
  },
  {
    id: 89,
    question: "What’s the output?",
    image: "question-89.svg",
    options: [
      '<code>{ default: function default(), name: "Lydia" }</code>',
      "<code>{ default: function default() }</code>",
      '<code>{ default: "Hello world", name: "Lydia" }</code>',
      "Global object of <code>module.js</code>",
    ],
    answer: 1,
    explanation:
      '<p>// module.jsexport default () => "Hello world";export const name = "Lydia";// index.jsimport * as data from "./module";console.log(data);</p><p></p><p>\n    With the <code>import * as name</code> syntax, we import *all exports* from the <code>module.js</code> file into the <code>index.js</code> file as a new object called <code>data</code> is created. In the <code>module.js</code> file, there are two exports: the default export, and a named export. The default export is a function which returns the string <code>"Hello World"</code>, and the named export is a variable called <code>name</code> which has the value of the string <code>"Lydia"</code>.</p><p>    The <code>data</code> object has a <code>default</code> property for the default export, other properties have the names of the named exports and their corresponding values.</p>',
  },
  {
    id: 90,
    question: "What’s the output?",
    image: "question-90.svg",
    options: [
      '<code>"class"</code>',
      '<code>"function"</code>',
      '<code>"object"</code>',
      '<code>"string"</code>',
    ],
    answer: 3,
    explanation:
      '<p>class Person {  constructor(name) {    this.name = name;  }}const member = new Person("John");console.log(typeof member);</p><p></p><p>\n    Classes are syntactical sugar for function constructors. The equivalent of the <code>Person</code> class as a function constructor would be:</p><p>    ```\n    function Person() {  this.name = name;}\n    ```</p><p>    Calling a function constructor with <code>new</code> results in the creation of an instance of <code>Person</code>, <code>typeof</code> keyword returns <code>"object"</code> for an instance. <code>typeof member</code> returns <code>"object"</code>.</p>',
  },
  {
    id: 91,
    question: "What’s the output?",
    image: "question-91.svg",
    options: [
      "<code>[1, 2, 3, 4, 5]</code>",
      "<code>[1, 2, 3, 5]</code>",
      "<code>[1, 2, 3, 4]</code>",
      "<code>Error</code>",
    ],
    answer: 4,
    explanation:
      "<p>let newList = [1, 2, 3].push(4);console.log(newList.push(5));</p><p></p><p>\n    The <code>.push</code> method returns the *new length* of the array, not the array itself! By setting <code>newList</code> equal to <code>[1, 2, 3].push(4)</code>, we set <code>newList</code> equal to the new length of the array: <code>4</code>.</p><p>    Then, we try to use the <code>.push</code> method on <code>newList</code>. Since <code>newList</code> is the numerical value <code>4</code>, we cannot use the <code>.push</code> method: a TypeError is thrown.</p>",
  },
  {
    id: 92,
    question: "What’s the output?",
    image: "question-92.svg",
    options: [
      "<code>{ constructor: ...}</code> <code>{ constructor: ...}</code>",
      "<code>{}</code> <code>{ constructor: ...}</code>",
      "<code>{ constructor: ...}</code> <code>{}</code>",
      "<code>{ constructor: ...}</code> <code>undefined</code>",
    ],
    answer: 4,
    explanation:
      '<p>function giveLydiaPizza() {  return "Here is pizza!";}const giveLydiaChocolate = () =>  "Here\'s chocolate... now go hit the gym already.";console.log(giveLydiaPizza.prototype);console.log(giveLydiaChocolate.prototype);</p><p></p><p>\n    Regular functions, such as the <code>giveLydiaPizza</code> function, have a <code>prototype</code> property, which is an object (prototype object) with a <code>constructor</code> property. Arrow functions however, such as the <code>giveLydiaChocolate</code> function, do not have this <code>prototype</code> property. <code>undefined</code> gets returned when trying to access the <code>prototype</code> property using <code>giveLydiaChocolate.prototype</code>.</p>',
  },
  {
    id: 93,
    question: "What’s the output?",
    image: "question-93.svg",
    options: [
      "<code>name</code> <code>Lydia</code> and <code>age</code> <code>21</code>",
      '<code>["name", "Lydia"]</code> and <code>["age", 21]</code>',
      '<code>["name", "age"]</code> and <code>undefined</code>',
      "<code>Error</code>",
    ],
    answer: 1,
    explanation:
      '<p>const person = {  name: "Lydia",  age: 21,};for (const [x, y] of Object.entries(person)) {  console.log(x, y);}</p><p></p><p>\n    <code>Object.entries(person)</code> returns an array of nested arrays, containing the keys and objects:</p><p>    <code>[ [ \'name\', \'Lydia\' ], [ \'age\', 21 ] ]</code></p><p>    Using the <code>for-of</code> loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using <code>const [x, y]</code>. <code>x</code> is equal to the first element in the subarray, <code>y</code> is equal to the second element in the subarray.</p><p>    The first subarray is <code>[ "name", "Lydia" ]</code>, with <code>x</code> equal to <code>"name"</code>, and <code>y</code> equal to <code>"Lydia"</code>, which get logged. The second subarray is <code>[ "age", 21 ]</code>, with <code>x</code> equal to <code>"age"</code>, and <code>y</code> equal to <code>21</code>, which get logged.</p>',
  },
  {
    id: 94,
    question: "What’s the output?",
    image: "question-94.svg",
    options: [
      '<code>["banana", "apple", "pear", "orange"]</code>',
      '<code>[["banana", "apple"], "pear", "orange"]</code>',
      '<code>["banana", "apple", ["pear"], "orange"]</code>',
      "<code>SyntaxError</code>",
    ],
    answer: 4,
    explanation:
      '<p>function getItems(fruitList, ...args, favoriteFruit) {  return [...fruitList, ...args, favoriteFruit]}getItems(["banana", "apple"], "pear", "orange")</p><p></p><p>\n    <code>...args</code> is a rest parameter. The rest parameter’s value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.</p><p>    ```\n    function getItems(fruitList, favoriteFruit, ...args) {  return [...fruitList, ...args, favoriteFruit];}getItems(["banana", "apple"], "pear", "orange");\n    ```</p><p>    The above example works. This returns the array <code>[ \'banana\', \'apple\', \'orange\', \'pear\' ]</code></p>',
  },
  {
    id: 95,
    question: "What’s the output?",
    image: "question-95.svg",
    options: [
      "<code>a is bigger</code>, <code>6</code> and <code>b is bigger</code>, <code>3</code>",
      "<code>a is bigger</code>, <code>undefined</code> and <code>b is bigger</code>, <code>undefined</code>",
      "<code>undefined</code> and <code>undefined</code>",
      "<code>SyntaxError</code>",
    ],
    answer: 2,
    explanation:
      '<p>function nums(a, b) {  if (a > b) console.log("a is bigger");  else console.log("b is bigger");  return;  a + b;}console.log(nums(4, 2));console.log(nums(1, 2));</p><p></p><p>\n    In JavaScript, we don’t *have* to write the semicolon (<code>;</code>) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like <code>throw</code>, <code>return</code>, <code>break</code>, etc.</p><p>    Here, we wrote a <code>return</code> statement, and another value <code>a + b</code> on a *new line*. However, since it’s a new line, the engine doesn’t know that it’s actually the value that we wanted to return. Instead, it automatically added a semicolon after <code>return</code>. You could see this as:</p><p>    ```\n    return;a + b;\n    ```</p><p>    This means that <code>a + b</code> is never reached, since a function stops running after the <code>return</code> keyword. If no value gets returned, like here, the function returns <code>undefined</code>. Note that there is no automatic insertion after <code>if/else</code> statements!</p>',
  },
  {
    id: 96,
    question: "What’s the output?",
    image: "question-96.svg",
    options: [
      '<code>"Lydia"</code>',
      '<code>"Sarah"</code>',
      "<code>Error: cannot redeclare Person</code>",
      "<code>SyntaxError</code>",
    ],
    answer: 2,
    explanation:
      '<p>class Person {  constructor() {    this.name = "Lydia";  }}Person = class AnotherPerson {  constructor() {    this.name = "Sarah";  }};const member = new Person();console.log(member.name);</p><p></p><p>\n    We can set classes equal to other classes/function constructors. In this case, we set <code>Person</code> equal to <code>AnotherPerson</code>. The name on this constructor is <code>Sarah</code>, so the name property on the new <code>Person</code> instance <code>member</code> is <code>"Sarah"</code>.</p>',
  },
  {
    id: 97,
    question: "What’s the output?",
    image: "question-97.svg",
    options: [
      "<code>{Symbol('a'): 'b'}</code> and <code>[\"{Symbol('a')\"]</code>",
      "<code>{}</code> and <code>[]</code>",
      '<code>{ a: "b" }</code> and <code>["a"]</code>',
      "<code>{Symbol('a'): 'b'}</code> and <code>[]</code>",
    ],
    answer: 4,
    explanation:
      '<p>const info = {  [Symbol("a")]: "b",};console.log(info);console.log(Object.keys(info));</p><p></p><p>\n    A Symbol is not *enumerable*. The Object.keys method returns all *enumerable* key properties on an object. The Symbol won’t be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.</p><p>    This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also “hide” properties on objects this way (although not entirely. You can still access symbols using the <code>Object.getOwnPropertySymbols()</code> method).</p>',
  },
  {
    id: 98,
    question: "What’s the output?",
    image: "question-98.svg",
    options: [
      "<code>[1, [2, 3, 4]]</code> and <code>SyntaxError</code>",
      '<code>[1, [2, 3, 4]]</code> and <code>{ name: "Lydia", age: 21 }</code>',
      '<code>[1, 2, 3, 4]</code> and <code>{ name: "Lydia", age: 21 }</code>',
      '<code>Error</code> and <code>{ name: "Lydia", age: 21 }</code>',
    ],
    answer: 1,
    explanation:
      '<p>const getList = ([x, ...y]) => [x, y]const getUser = user => { name: user.name, age: user.age }const list = [1, 2, 3, 4]const user = { name: "Lydia", age: 21 }console.log(getList(list))console.log(getUser(user))</p><p></p><p>\n    The <code>getList</code> function receives an array as its argument. Between the parentheses of the <code>getList</code> function, we destructure this array right away. You could see this as:</p><p>    <code>[x, ...y] = [1, 2, 3, 4]</code></p><p>    With the rest parameter <code>...y</code>, we put all “remaining” arguments in an array. The remaining arguments are <code>2</code>, <code>3</code> and <code>4</code> in this case. The value of <code>y</code> is an array, containing all the rest parameters. The value of <code>x</code> is equal to <code>1</code> in this case, so when we log <code>[x, y]</code>, <code>[1, [2, 3, 4]]</code> gets logged.</p><p>    The <code>getUser</code> function receives an object. With arrow functions, we don’t *have* to write curly brackets if we just return one value. However, if you want to instantly return an *object* from an arrow function, you have to write it between parentheses, otherwise everything between the two braces will be interpreted as a block statement. In this case the code between the braces is not a valid JavaScript code, so a <code>SyntaxError</code> gets thrown.</p><p>    The following function would have returned an object:</p><p>    <code>const getUser = user => ({ name: user.name, age: user.age })</code></p>',
  },
  {
    id: 99,
    question: "What’s the output?",
    image: "question-99.svg",
    options: [
      "<code>SyntaxError</code>",
      "<code>ReferenceError</code>",
      "<code>TypeError</code>",
      "<code>undefined</code>",
    ],
    answer: 3,
    explanation:
      '<p>const name = "Lydia";console.log(name());</p><p></p><p>\n    The variable <code>name</code> holds the value of a string, which is not a function, thus cannot invoke.</p><p>    TypeErrors get thrown when a value is not of the expected type. JavaScript expected <code>name</code> to be a function since we’re trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!</p><p>    SyntaxErrors get thrown when you’ve written something that isn’t valid JavaScript, for example when you’ve written the word <code>return</code> as <code>retrun</code>. ReferenceErrors get thrown when JavaScript isn’t able to find a reference to a value that you’re trying to access.</p>',
  },
  {
    id: 100,
    question: "What’s the value of output?",
    image: "question-100.svg",
    options: [
      "<code>possible! You should see a therapist after so much JavaScript lol</code>",
      "<code>Impossible! You should see a therapist after so much JavaScript lol</code>",
      "<code>possible! You shouldn't see a therapist after so much JavaScript lol</code>",
      "<code>Impossible! You shouldn't see a therapist after so much JavaScript lol</code>",
    ],
    answer: 2,
    explanation:
      '<p>// 🎉✨ This is my 100th question! ✨🎉const output = <code>${[] && "Im"}possible!You should${"" && </code>n\'t<code>} see a therapist after so much JavaScript lol</code>;</p><p></p><p>\n    <code>[]</code> is a truthy value. With the <code>&&</code> operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value <code>[]</code> is a truthy value, so <code>"Im\'</code> gets returned.</p><p>    <code>""</code> is a falsy value. If the left-hand value is falsy, nothing gets returned. <code>n\'t</code> doesn’t get returned.</p>',
  },
  {
    id: 101,
    question: "What’s the value of output?",
    image: "question-101.svg",
    options: [
      "<code>false</code> <code>null</code> <code>[]</code>",
      '<code>null</code> <code>""</code> <code>true</code>',
      '<code>{}</code> <code>""</code> <code>[]</code>',
      "<code>null</code> <code>null</code> <code>true</code>",
    ],
    answer: 3,
    explanation:
      '<p>const one = false || {} || null;const two = null || false || "";const three = [] || 0 || true;console.log(one, two, three);</p><p></p><p>\n    With the <code>||</code> operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.</p><p>    <code>(false || {} || null)</code>: the empty object <code>{}</code> is a truthy value. This is the first (and only) truthy value, which gets returned. <code>one</code> is equal to <code>{}</code>.</p><p>    <code>(null || false || "")</code>: all operands are falsy values. This means that the last operand, <code>""</code> gets returned. <code>two</code> is equal to <code>""</code>.</p><p>    <code>([] || 0 || "")</code>: the empty array<code>[]</code> is a truthy value. This is the first truthy value, which gets returned. <code>three</code> is equal to <code>[]</code>.</p>',
  },
  {
    id: 102,
    question: "What’s the value of output?",
    image: "question-102.svg",
    options: [
      "<code>I have resolved!</code>, <code>second</code> and <code>I have resolved!</code>, <code>second</code>",
      "<code>second</code>, <code>I have resolved!</code> and <code>second</code>, <code>I have resolved!</code>",
      "<code>I have resolved!</code>, <code>second</code> and <code>second</code>, <code>I have resolved!</code>",
      "<code>second</code>, <code>I have resolved!</code> and <code>I have resolved!</code>, <code>second</code>",
    ],
    answer: 4,
    explanation:
      '<p>const myPromise = () => Promise.resolve("I have resolved!");function firstFunction() {  myPromise().then((res) => console.log(res));  console.log("second");}async function secondFunction() {  console.log(await myPromise());  console.log("second");}firstFunction();secondFunction();</p><p></p><p>\n    With a promise, we basically say *I want to execute this function, but I’ll put it aside for now while it’s running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value.*</p><p>    We can get this value with both <code>.then</code> and the <code>await</code> keyword in an <code>async</code> function. Although we can get a promise’s value with both <code>.then</code> and <code>await</code>, they work a bit differently.</p><p>    In the <code>firstFunction</code>, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is <code>console.log(\'second\')</code> in this case. Then, the function resolved with the string <code>I have resolved</code>, which then got logged after it saw that the callstack was empty.</p><p>    With the await keyword in <code>secondFunction</code>, we literally pause the execution of an async function until the value has been resolved before moving to the next line.</p><p>    This means that it waited for the <code>myPromise</code> to resolve with the value <code>I have resolved</code>, and only once that happened, we moved to the next line: <code>second</code> got logged.</p>',
  },
  {
    id: 103,
    question: "What’s the value of output?",
    image: "question-103.svg",
    options: [
      "<code>3</code>, <code>NaN</code>, <code>NaN</code>",
      "<code>3</code>, <code>7</code>, <code>NaN</code>",
      "<code>3</code>, <code>Lydia2</code>, <code>[object Object]2</code>",
      '<code>"12"</code>, <code>Lydia2</code>, <code>[object Object]2</code>',
    ],
    answer: 3,
    explanation:
      '<p>const set = new Set();set.add(1);set.add("Lydia");set.add({ name: "Lydia" });for (let item of set) {  console.log(item + 2);}</p><p></p><p>\n    The <code>+</code> operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.</p><p>    The first one is <code>1</code>, which is a numerical value. <code>1 + 2</code> returns the number 3.</p><p>    However, the second one is a string <code>"Lydia"</code>. <code>"Lydia"</code> is a string and <code>2</code> is a number: <code>2</code> gets coerced into a string. <code>"Lydia"</code> and <code>"2"</code> get concatenated, which results in the string <code>"Lydia2"</code>.</p><p>    <code>{ name: "Lydia" }</code> is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes <code>"[object Object]"</code>. <code>"[object Object]"</code> concatenated with <code>"2"</code> becomes <code>"[object Object]2"</code>.</p>',
  },
  {
    id: 104,
    question: "What’s its value?",
    image: "question-104.svg",
    options: [
      "<code>5</code>",
      "<code>Promise {<pending>: 5}</code>",
      "<code>Promise {<fulfilled>: 5}</code>",
      "<code>Error</code>",
    ],
    answer: 3,
    explanation:
      "<p>Promise.resolve(5);</p><p></p><p>\n    We can pass any type of value we want to <code>Promise.resolve</code>, either a promise or a non-promise. The method itself returns a promise with the resolved value (<code><fulfilled></code>). If you pass a regular function, it’ll be a resolved promise with a regular value. If you pass a promise, it’ll be a resolved promise with the resolved value of that passed promise.</p><p>    In this case, we just passed the numerical value <code>5</code>. It returns a resolved promise with the value <code>5</code>.</p>",
  },
  {
    id: 105,
    question: "What’s its value?",
    image: "question-105.svg",
    options: [
      "<code>Not the same!</code>",
      "<code>They are the same!</code>",
      "<code>ReferenceError</code>",
      "<code>SyntaxError</code>",
    ],
    answer: 2,
    explanation:
      '<p>function compareMembers(person1, person2 = person) {  if (person1 !== person2) {    console.log("Not the same!");  } else {    console.log("They are the same!");  }}const person = { name: "Lydia" };compareMembers(person);</p><p></p><p>\n    Objects are passed by reference. When we check objects for strict equality (<code>===</code>), we’re comparing their references.</p><p>    We set the default value for <code>person2</code> equal to the <code>person</code> object, and passed the <code>person</code> object as the value for <code>person1</code>.</p><p>    This means that both values have a reference to the same spot in memory, thus they are equal.</p><p>    The code block in the <code>else</code> statement gets run, and <code>They are the same!</code> gets logged.</p>',
  },
  {
    id: 106,
    question: "What’s its value?",
    image: "question-106.svg",
    options: [
      "<code>true</code>",
      "<code>false</code>",
      "<code>undefined</code>",
      "<code>TypeError</code>",
    ],
    answer: 4,
    explanation:
      '<p>const colorConfig = {  red: true,  blue: false,  green: true,  black: true,  yellow: false,};const colors = ["pink", "red", "blue"];console.log(colorConfig.colors[1]);</p><p></p><p>\n    In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (<code>colorConfig.colors</code>) instead of bracket notation (<code>colorConfig["colors"]</code>).</p><p>    With dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called <code>colors</code> on the <code>colorConfig</code> object. There is no property called <code>colors</code>, so this returns <code>undefined</code>. Then, we try to access the value of the first element by using <code>[1]</code>. We cannot do this on a value that’s <code>undefined</code>, so it throws a <code>TypeError</code>: <code>Cannot read property \'1\' of undefined</code>.</p><p>    JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket <code>[</code> and keeps going until it finds the closing bracket <code>]</code>. Only then, it will evaluate the statement. If we would’ve used <code>colorConfig[colors[1]]</code>, it would have returned the value of the <code>red</code> property on the <code>colorConfig</code> object.</p>',
  },
  {
    id: 107,
    question: "What’s its value?",
    image: "question-107.svg",
    options: ["<code>true</code>", "<code>false</code>"],
    answer: 1,
    explanation:
      '<p>console.log("❤️" === "❤️");</p><p></p><p>\n    Under the hood, emojis are unicodes. The unicodes for the heart emoji is <code>"U+2764 U+FE0F"</code>. These are always the same for the same emojis, so we’re comparing two equal strings to each other, which returns true.</p>',
  },
  {
    id: 108,
    question: "Which of these methods modifies the original array?",
    image: "question-108.svg",
    options: [
      "<code>All of them</code>",
      "<code>map</code> <code>reduce</code> <code>slice</code> <code>splice</code>",
      "<code>map</code> <code>slice</code> <code>splice</code>",
      "<code>splice</code>",
    ],
    answer: 4,
    explanation:
      '<p>const emojis = ["✨", "🥑", "😍"];emojis.map((x) => x + "✨");emojis.filter((x) => x !== "🥑");emojis.find((x) => x !== "🥑");emojis.reduce((acc, cur) => acc + "✨");emojis.slice(1, 2, "✨");emojis.splice(1, 2, "✨");</p><p></p><p>\n    With <code>splice</code> method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed <code>\'🥑\'</code> and <code>\'😍\'</code>) and added the ✨ emoji instead.</p><p>    <code>map</code>, <code>filter</code> and <code>slice</code> return a new array, <code>find</code> returns an element, and <code>reduce</code> returns a reduced value.</p>',
  },
  {
    id: 109,
    question: "What’s the output?",
    image: "question-109.svg",
    options: [
      "<code>['🍕', '🍫', '🥑', '🍔']</code>",
      "<code>['🍝', '🍫', '🥑', '🍔']</code>",
      "<code>['🍝', '🍕', '🍫', '🥑', '🍔']</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 1,
    explanation:
      "<p>const food = [\"🍕\", \"🍫\", \"🥑\", \"🍔\"];const info = { favoriteFood: food[0] };info.favoriteFood = \"🍝\";console.log(food);</p><p></p><p>\n    We set the value of the <code>favoriteFood</code> property on the <code>info</code> object equal to the string with the pizza emoji, <code>'🍕'</code>. A string is a primitive data type. In JavaScript, primitive data types don’t interact by reference.</p><p>    In JavaScript, primitive data types (everything that’s not an object) interact by *value*. In this case, we set the value of the <code>favoriteFood</code> property on the <code>info</code> object equal to the value of the first element in the <code>food</code> array, the string with the pizza emoji in this case (<code>'🍕'</code>). A string is a primitive data type, and interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you’re interested in learning more)</p><p>    Then, we change the value of the <code>favoriteFood</code> property on the <code>info</code> object. The <code>food</code> array hasn’t changed, since the value of <code>favoriteFood</code> was merely a *copy* of the value of the first element in the array, and doesn’t have a reference to the same spot in memory as the element on <code>food[0]</code>. When we log food, it’s still the original array, <code>['🍕', '🍫', '🥑', '🍔']</code>.</p>",
  },
  {
    id: 110,
    question: "What does this method do?",
    image: "question-110.svg",
    options: [
      "Parses JSON to a JavaScript value",
      "Parses a JavaScript object to JSON",
      "Parses any JavaScript value to JSON",
      "Parses JSON to a JavaScript object only",
    ],
    answer: 1,
    explanation:
      "<p>JSON.parse();</p><p></p><p>\n    With the <code>JSON.parse()</code> method, we can parse JSON string to a JavaScript value.</p><p>    ```\n    // Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:const jsonNumber = JSON.stringify(4); // '4'JSON.parse(jsonNumber); // 4// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:const jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'JSON.parse(jsonArray); // [1, 2, 3]// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:const jsonArray = JSON.stringify({ name: \"Lydia\" }); // '{\"name\":\"Lydia\"}'JSON.parse(jsonArray); // { name: 'Lydia' }\n    ```</p>",
  },
  {
    id: 111,
    question: "What’s the output?",
    image: "question-111.svg",
    options: [
      "Lydia",
      "Sarah",
      "<code>undefined</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 4,
    explanation:
      '<p>let name = "Lydia";function getName() {  console.log(name);  let name = "Sarah";}getName();</p><p></p><p>\n    Each function has its own *execution context* (or *scope*). The <code>getName</code> function first looks within its own context (scope) to see if it contains the variable <code>name</code> we’re trying to access. In this case, the <code>getName</code> function contains its own <code>name</code> variable: we declare the variable <code>name</code> with the <code>let</code> keyword, and with the value of <code>\'Sarah\'</code>.</p><p>    Variables with the <code>let</code> keyword (and <code>const</code>) are hoisted, but unlike <code>var</code>, don’t get *initialized*. They are not accessible before the line we declare (initialize) them. This is called the “temporal dead zone”. When we try to access the variables before they are declared, JavaScript throws a <code>ReferenceError</code>.</p><p>    If we wouldn’t have declared the <code>name</code> variable within the <code>getName</code> function, the javascript engine would’ve looked down the *scope chain*. The outer scope has a variable called <code>name</code> with the value of <code>Lydia</code>. In that case, it would’ve logged <code>Lydia</code>.</p><p>    ```\n    let name = "Lydia";function getName() {  console.log(name);}getName(); // Lydia\n    ```</p>',
  },
  {
    id: 112,
    question: "What’s the output?",
    image: "question-112.svg",
    options: [
      "<code>a</code> and <code>a</code>",
      "<code>a</code> and <code>undefined</code>",
      "<code>['a', 'b', 'c']</code> and <code>a</code>",
      "<code>a</code> and <code>['a', 'b', 'c']</code>",
    ],
    answer: 3,
    explanation:
      "<p>function* generatorOne() {  yield [\"a\", \"b\", \"c\"];}function* generatorTwo() {  yield* [\"a\", \"b\", \"c\"];}const one = generatorOne();const two = generatorTwo();console.log(one.next().value);console.log(two.next().value);</p><p></p><p>\n    With the <code>yield</code> keyword, we <code>yield</code> values in a generator function. With the <code>yield*</code> keyword, we can yield values from another generator function, or iterable object (for example an array).</p><p>    In <code>generatorOne</code>, we yield the entire array <code>['a', 'b', 'c']</code> using the <code>yield</code> keyword. The value of <code>value</code> property on the object returned by the <code>next</code> method on <code>one</code> (<code>one.next().value</code>) is equal to the entire array <code>['a', 'b', 'c']</code>.</p><p>    ```\n    console.log(one.next().value); // ['a', 'b', 'c']console.log(one.next().value); // undefined\n    ```</p><p>    In <code>generatorTwo</code>, we use the <code>yield*</code> keyword. This means that the first yielded value of <code>two</code>, is equal to the first yielded value in the iterator. The iterator is the array <code>['a', 'b', 'c']</code>. The first yielded value is <code>a</code>, so the first time we call <code>two.next().value</code>, <code>a</code> is returned.</p><p>    ```\n    console.log(two.next().value); // 'a'console.log(two.next().value); // 'b'console.log(two.next().value); // 'c'console.log(two.next().value); // undefined\n    ```</p>",
  },
  {
    id: 113,
    question: "What’s the output?",
    image: "question-113.svg",
    options: [
      "<code>I love to program</code>",
      "<code>undefined to program</code>",
      "<code>${(x => x)('I love') to program</code>",
      "<code>TypeError</code>",
    ],
    answer: 1,
    explanation:
      "<p>console.log(<code>${((x) => x)(\"I love\")} to program</code>);</p><p></p><p>\n    Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function <code>(x => x)('I love')</code> in this case. We pass the value <code>'I love'</code> as an argument to the <code>x => x</code> arrow function. <code>x</code> is equal to <code>'I love'</code>, which gets returned. This results in <code>I love to program</code>.</p>",
  },
  {
    id: 114,
    question: "What will happen?",
    image: "question-114.svg",
    options: [
      "The <code>setInterval</code> callback won’t be invoked",
      "The <code>setInterval</code> callback gets invoked once",
      "The <code>setInterval</code> callback will still be called every second",
      "We never invoked <code>config.alert()</code>, config is <code>null</code>",
    ],
    answer: 3,
    explanation:
      '<p>let config = {  alert: setInterval(() => {    console.log("Alert!");  }, 1000),};config = null;</p><p></p><p>\n    Normally when we set objects equal to <code>null</code>, those objects get *garbage collected* as there is no reference anymore to that object. However, since the callback function within <code>setInterval</code> is an arrow function (thus bound to the <code>config</code> object), the callback function still holds a reference to the <code>config</code> object. As long as there is a reference, the object won’t get garbage collected. Since this is an interval, setting <code>config</code> to <code>null</code> or <code>delete</code>-ing <code>config.alert</code> won’t garbage-collect the interval, so the interval will still be called. It should be cleared with <code>clearInterval(config.alert)</code> to remove it from memory. Since it was not cleared, the <code>setInterval</code> callback function will still get invoked every 1000ms (1s).</p>',
  },
  {
    id: 115,
    question: "Which method(s) will return the value `'Hello world!'`?",
    image: "question-115.svg",
    options: ["1", "2", "2 and 3", "All of them"],
    answer: 2,
    explanation:
      "<p>const myMap = new Map();const myFunc = () => \"greeting\";myMap.set(myFunc, \"Hello world!\");//1myMap.get(\"greeting\");//2myMap.get(myFunc);//3myMap.get(() => \"greeting\");</p><p></p><p>\n    When adding a key/value pair using the <code>set</code> method, the key will be the value of the first argument passed to the <code>set</code> function, and the value will be the second argument passed to the <code>set</code> function. The key is the *function* <code>() => 'greeting'</code> in this case, and the value <code>'Hello world'</code>. <code>myMap</code> is now <code>{ () => 'greeting' => 'Hello world!' }</code>.</p><p>    1 is wrong, since the key is not <code>'greeting'</code> but <code>() => 'greeting'</code>. 3 is wrong, since we’re creating a new function by passing it as a parameter to the <code>get</code> method. Object interact by *reference*. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory.</p>",
  },
  {
    id: 116,
    question: "What’s the output?",
    image: "question-116.svg",
    options: [
      '<code>{name: "Sarah", age: 22}</code>',
      '<code>{name: "Sarah", age: 23}</code>',
      '<code>{name: "Lydia", age: 22}</code>',
      '<code>{name: "Lydia", age: 23}</code>',
    ],
    answer: 3,
    explanation:
      '<p>const person = {  name: "Lydia",  age: 21,};const changeAge = (x = { ...person }) => (x.age += 1);const changeAgeAndName = (x = { ...person }) => {  x.age += 1;  x.name = "Sarah";};changeAge(person);changeAgeAndName();console.log(person);</p><p></p><p>\n    Both the <code>changeAge</code> and <code>changeAgeAndName</code> functions have a default parameter, namely a *newly* created object <code>{ ...person }</code>. This object has copies of all the key/values in the <code>person</code> object.</p><p>    First, we invoke the <code>changeAge</code> function and pass the <code>person</code> object as its argument. This function increases the value of the <code>age</code> property by 1. <code>person</code> is now <code>{ name: "Lydia", age: 22 }</code>.</p><p>    Then, we invoke the <code>changeAgeAndName</code> function, however we don’t pass a parameter. Instead, the value of <code>x</code> is equal to a *new* object: <code>{ ...person }</code>. Since it’s a new object, it doesn’t affect the values of the properties on the <code>person</code> object. <code>person</code> is still equal to <code>{ name: "Lydia", age: 22 }</code>.</p>',
  },
  {
    id: 117,
    question: "Which of the following options will return `6`?",
    image: "question-117.svg",
    options: [
      "<code>sumValues([...1, 2, 3])</code>",
      "<code>sumValues([...[1, 2, 3]])</code>",
      "<code>sumValues(...[1, 2, 3])</code>",
      "<code>sumValues([1, 2, 3])</code>",
    ],
    answer: 3,
    explanation:
      "<p>function sumValues(x, y, z) {  return x + y + z;}</p><p></p><p>\n    With the spread operator <code>...</code>, we can *spread* iterables to individual elements. The <code>sumValues</code> function receives three arguments: <code>x</code>, <code>y</code> and <code>z</code>. <code>...[1, 2, 3]</code> will result in <code>1, 2, 3</code>, which we pass to the <code>sumValues</code> function.</p>",
  },
  {
    id: 118,
    question: "What’s the output?",
    image: "question-118.svg",
    options: [
      "<code>🤠</code>",
      "<code>🥰</code>",
      "<code>SyntaxError</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 2,
    explanation:
      '<p>let num = 1;const list = ["🥳", "🤠", "🥰", "🤪"];console.log(list[(num += 1)]);</p><p></p><p>\n    With the <code>+=</code> operand, we’re incrementing the value of <code>num</code> by <code>1</code>. <code>num</code> had the initial value <code>1</code>, so <code>1 + 1</code> is <code>2</code>. The item on the second index in the <code>list</code> array is 🥰, <code>console.log(list[2])</code> prints 🥰.</p>',
  },
  {
    id: 119,
    question: "What’s the output?",
    image: "question-119.svg",
    options: [
      "<code>undefined</code> <code>undefined</code> <code>undefined</code> <code>undefined</code>",
      "<code>Mara</code> <code>undefined</code> <code>Lydia Hallie</code> <code>ReferenceError</code>",
      "<code>Mara</code> <code>null</code> <code>Lydia Hallie</code> <code>null</code>",
      "<code>null</code> <code>ReferenceError</code> <code>null</code> <code>ReferenceError</code>",
    ],
    answer: 2,
    explanation:
      '<p>const person = {  firstName: "Lydia",  lastName: "Hallie",  pet: {    name: "Mara",    breed: "Dutch Tulip Hound",  },  getFullName() {    return <code>${this.firstName} ${this.lastName}</code>;  },};console.log(person.pet?.name);console.log(person.pet?.family?.name);console.log(person.getFullName?.());console.log(member.getLastName?.());</p><p></p><p>\n    With the optional chaining operator <code>?.</code>, we no longer have to explicitly check whether the deeper nested values are valid or not. If we’re trying to access a property on an <code>undefined</code> or <code>null</code> value (*nullish*), the expression short-circuits and returns <code>undefined</code>.</p><p>    <code>person.pet?.name</code>: <code>person</code> has a property named <code>pet</code>: <code>person.pet</code> is not nullish. It has a property called <code>name</code>, and returns <code>Mara</code>. <code>person.pet?.family?.name</code>: <code>person</code> has a property named <code>pet</code>: <code>person.pet</code> is not nullish. <code>pet</code> does *not* have a property called <code>family</code>, <code>person.pet.family</code> is nullish. The expression returns <code>undefined</code>. <code>person.getFullName?.()</code>: <code>person</code> has a property named <code>getFullName</code>: <code>person.getFullName()</code> is not nullish and can get invoked, which returns <code>Lydia Hallie</code>. <code>member.getLastName?.()</code>: variable <code>member</code> is non existent therefore a <code>ReferenceError</code> gets thrown!</p>',
  },
  {
    id: 120,
    question: "What’s the output?",
    image: "question-120.svg",
    options: [
      "We have to buy bananas!",
      "We don’t have to buy bananas",
      "<code>undefined</code>",
      "<code>1</code>",
    ],
    answer: 2,
    explanation:
      '<p>const groceries = ["banana", "apple", "peanuts"];if (groceries.indexOf("banana")) {  console.log("We have to buy bananas!");} else {  console.log(<code>We don\'t have to buy bananas!</code>);}</p><p></p><p>\n    We passed the condition <code>groceries.indexOf("banana")</code> to the if-statement. <code>groceries.indexOf("banana")</code> returns <code>0</code>, which is a falsy value. Since the condition in the if-statement is falsy, the code in the <code>else</code> block runs, and <code>We don\'t have to buy bananas!</code> gets logged.</p>',
  },
  {
    id: 121,
    question: "What’s the output?",
    image: "question-121.svg",
    options: [
      "<code>function language(lang) { this.languages.push(lang }</code>",
      "<code>0</code>",
      "<code>[]</code>",
      "<code>undefined</code>",
    ],
    answer: 4,
    explanation:
      "<p>const config = {  languages: [],  set language(lang) {    return this.languages.push(lang);  },};console.log(config.language);</p><p></p><p>\n    The <code>language</code> method is a <code>setter</code>. Setters don’t hold an actual value, their purpose is to *modify* properties. When calling a <code>setter</code> method, <code>undefined</code> gets returned.</p>",
  },
  {
    id: 122,
    question: "What’s the output?",
    image: "question-122.svg",
    options: [
      "<code>false</code> <code>true</code>",
      "<code>true</code> <code>false</code>",
      "<code>false</code> <code>false</code>",
      "<code>true</code> <code>true</code>",
    ],
    answer: 3,
    explanation:
      '<p>const name = "Lydia Hallie";console.log(!typeof name === "object");console.log(!typeof name === "string");</p><p></p><p>\n    <code>typeof name</code> returns <code>"string"</code>. The string <code>"string"</code> is a truthy value, so <code>!typeof name</code> returns the boolean value <code>false</code>. <code>false === "object"</code> and <code>false === "string"</code> both return<code>false</code>.</p><p>    (If we wanted to check whether the type was (un)equal to a certain type, we should’ve written <code>!==</code> instead of <code>!typeof</code>)</p>',
  },
  {
    id: 123,
    question: "What’s the output?",
    image: "question-123.svg",
    options: [
      "<code>4</code> <code>5</code> <code>6</code>",
      "<code>6</code> <code>5</code> <code>4</code>",
      "<code>4</code> <code>function</code> <code>function</code>",
      "<code>undefined</code> <code>undefined</code> <code>6</code>",
    ],
    answer: 1,
    explanation:
      "<p>const add = (x) => (y) => (z) => {  console.log(x, y, z);  return x + y + z;};add(4)(5)(6);</p><p></p><p>\n    The <code>add</code> function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument <code>x</code> with the value of <code>4</code>. We invoke the second function, which receives an argument <code>y</code> with the value <code>5</code>. Then we invoke the third function, which receives an argument <code>z</code> with the value <code>6</code>. When we’re trying to access the value <code>x</code>, <code>y</code> and <code>z</code> within the last arrow function, the JS engine goes up the scope chain in order to find the values for <code>x</code> and <code>y</code> accordingly. This returns <code>4</code> <code>5</code> <code>6</code>.</p>",
  },
  {
    id: 124,
    question: "What’s the output?",
    image: "question-124.svg",
    options: [
      "<code>Promise {1}</code> <code>Promise {2}</code> <code>Promise {3}</code>",
      "<code>Promise {<pending>}</code> <code>Promise {<pending>}</code> <code>Promise {<pending>}</code>",
      "<code>1</code> <code>2</code> <code>3</code>",
      "<code>undefined</code> <code>undefined</code> <code>undefined</code>",
    ],
    answer: 3,
    explanation:
      "<p>async function* range(start, end) {  for (let i = start; i <= end; i++) {    yield Promise.resolve(i);  }}(async () => {  const gen = range(1, 3);  for await (const item of gen) {    console.log(item);  }})();</p><p></p><p>\n    The generator function <code>range</code> returns an async object with promises for each item in the range we pass: <code>Promise{1}</code>, <code>Promise{2}</code>, <code>Promise{3}</code>. We set the variable <code>gen</code> equal to the async object, after which we loop over it using a <code>for await ... of</code> loop. We set the variable <code>item</code> equal to the returned Promise values: first <code>Promise{1}</code>, then <code>Promise{2}</code>, then <code>Promise{3}</code>. Since we’re *awaiting* the value of <code>item</code>, the resolved promise, the resolved *values* of the promises get returned: <code>1</code>, <code>2</code>, then <code>3</code>.</p>",
  },
  {
    id: 125,
    question: "What’s the output?",
    image: "question-125.svg",
    options: [
      "<code>1</code> <code>2</code> <code>3</code>",
      "<code>{1: 1}</code> <code>{2: 2}</code> <code>{3: 3}</code>",
      "<code>{ 1: undefined }</code> <code>undefined</code> <code>undefined</code>",
      "<code>undefined</code> <code>undefined</code> <code>undefined</code>",
    ],
    answer: 4,
    explanation:
      "<p>const myFunc = ({ x, y, z }) => {  console.log(x, y, z);};myFunc(1, 2, 3);</p><p></p><p>\n    <code>myFunc</code> expects an object with properties <code>x</code>, <code>y</code> and <code>z</code> as its argument. Since we’re only passing three separate numeric values (1, 2, 3) instead of one object with properties <code>x</code>, <code>y</code> and <code>z</code> ({x: 1, y: 2, z: 3}), <code>x</code>, <code>y</code> and <code>z</code> have their default value of <code>undefined</code>.</p>",
  },
  {
    id: 126,
    question: "What’s the output?",
    image: "question-126.svg",
    options: [
      "The driver drove 130 and has to pay 300",
      "The driver drove 130 mph and has to pay $300.00",
      "The driver drove undefined and has to pay undefined",
      "The driver drove 130.00 and has to pay 300.00",
    ],
    answer: 2,
    explanation:
      '<p>function getFine(speed, amount) {  const formattedSpeed = new Intl.NumberFormat("en-US", {    style: "unit",    unit: "mile-per-hour",  }).format(speed);  const formattedAmount = new Intl.NumberFormat("en-US", {    style: "currency",    currency: "USD",  }).format(amount);  return <code>The driver drove ${formattedSpeed} and has to pay ${formattedAmount}</code>;}console.log(getFine(130, 300));</p><p></p><p>\n    With the <code>Intl.NumberFormat</code> method, we can format numeric values to any locale. We format the numeric value <code>130</code> to the <code>en-US</code> locale as a <code>unit</code> in <code>mile-per-hour</code>, which results in <code>130 mph</code>. The numeric value <code>300</code> to the <code>en-US</code> locale as a <code>currency</code> in <code>USD</code> results in <code>$300.00</code>.</p>',
  },
  {
    id: 127,
    question: "What’s the output?",
    image: "question-127.svg",
    options: [
      '<code>["👻", "🎃", "🕸"]</code>',
      '<code>["👻", "🎃", "🕸", "💀"]</code>',
      '<code>["👻", "🎃", "🕸", { item: "💀" }]</code>',
      '<code>["👻", "🎃", "🕸", "[object Object]"]</code>',
    ],
    answer: 2,
    explanation:
      '<p>const spookyItems = ["👻", "🎃", "🕸"];({ item: spookyItems[3] } = { item: "💀" });console.log(spookyItems);</p><p></p><p>\n    By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we’re assigning the value “💀” to <code>spookyItems[3]</code>. This means that we’re modifying the <code>spookyItems</code> array, we’re adding the “💀” to it. When logging <code>spookyItems</code>, <code>["👻", "🎃", "🕸", "💀"]</code> gets logged.</p>',
  },
  {
    id: 128,
    question: "What’s the output?",
    image: "question-128.svg",
    options: [
      "<code>true</code> <code>false</code> <code>true</code> <code>false</code>",
      "<code>true</code> <code>false</code> <code>false</code> <code>false</code>",
      "<code>false</code> <code>false</code> <code>true</code> <code>false</code>",
      "<code>false</code> <code>true</code> <code>false</code> <code>true</code>",
    ],
    answer: 3,
    explanation:
      '<p>const name = "Lydia Hallie";const age = 21;console.log(Number.isNaN(name));console.log(Number.isNaN(age));console.log(isNaN(name));console.log(isNaN(age));</p><p></p><p>\n    With the <code>Number.isNaN</code> method, you can check if the value you pass is a *numeric value* and equal to <code>NaN</code>. <code>name</code> is not a numeric value, so <code>Number.isNaN(name)</code> returns <code>false</code>. <code>age</code> is a numeric value, but is not equal to <code>NaN</code>, so <code>Number.isNaN(age)</code> returns <code>false</code>.</p><p>    With the <code>isNaN</code> method, you can check if the value you pass is not a number. <code>name</code> is not a number, so <code>isNaN(name)</code> returns true. <code>age</code> is a number, so <code>isNaN(age)</code> returns <code>false</code>.</p>',
  },
  {
    id: 129,
    question: "What’s the output?",
    image: "question-129.svg",
    options: [
      '<code>"number"</code>',
      '<code>"string"</code>',
      "<code>undefined</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 4,
    explanation:
      '<p>const randomValue = 21;function getInfo() {  console.log(typeof randomValue);  const randomValue = "Lydia Hallie";}getInfo();</p><p></p><p>\n    Variables declared with the <code>const</code> keyword are not referencable before their initialization: this is called the *temporal dead zone*. In the <code>getInfo</code> function, the variable <code>randomValue</code> is scoped in the functional scope of <code>getInfo</code>. On the line where we want to log the value of <code>typeof randomValue</code>, the variable <code>randomValue</code> isn’t initialized yet: a <code>ReferenceError</code> gets thrown! The engine didn’t go down the scope chain since we declared the variable <code>randomValue</code> in the <code>getInfo</code> function.</p>',
  },
  {
    id: 130,
    question: "What’s the output?",
    image: "question-130.svg",
    options: [
      "<code>Woah some cool data</code>",
      "<code>Oh finally!</code>",
      "<code>Woah some cool data</code> <code>Oh finally!</code>",
      "<code>Oops didn't work</code> <code>Oh finally!</code>",
    ],
    answer: 3,
    explanation:
      '<p>const myPromise = Promise.resolve("Woah some cool data");(async () => {  try {    console.log(await myPromise);  } catch {    throw new Error(<code>Oops didn\'t work</code>);  } finally {    console.log("Oh finally!");  }})();</p><p></p><p>\n    In the <code>try</code> block, we’re logging the awaited value of the <code>myPromise</code> variable: <code>"Woah some cool data"</code>. Since no errors were thrown in the <code>try</code> block, the code in the <code>catch</code> block doesn’t run. The code in the <code>finally</code> block *always* runs, <code>"Oh finally!"</code> gets logged.</p>',
  },
  {
    id: 131,
    question: "What’s the output?",
    image: "question-131.svg",
    options: [
      "<code>['🥑', ['✨', '✨', ['🍕', '🍕']]]</code>",
      "<code>['🥑', '✨', '✨', ['🍕', '🍕']]</code>",
      "<code>['🥑', ['✨', '✨', '🍕', '🍕']]</code>",
      "<code>['🥑', '✨', '✨', '🍕', '🍕']</code>",
    ],
    answer: 2,
    explanation:
      "<p>const emojis = [\"🥑\", [\"✨\", \"✨\", [\"🍕\", \"🍕\"]]];console.log(emojis.flat(1));</p><p></p><p>\n    With the <code>flat</code> method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value <code>1</code> (which we didn’t have to, that’s the default value), meaning that only the arrays on the first depth will be concatenated. <code>['🥑']</code> and <code>['✨', '✨', ['🍕', '🍕']]</code> in this case. Concatenating these two arrays results in <code>['🥑', '✨', '✨', ['🍕', '🍕']]</code>.</p>",
  },
  {
    id: 132,
    question: "What’s the output?",
    image: "question-132.svg",
    options: [
      "<code>0</code>",
      "<code>1</code>",
      "<code>2</code>",
      "<code>3</code>",
    ],
    answer: 4,
    explanation:
      "<p>class Counter {  constructor() {    this.count = 0;  }  increment() {    this.count++;  }}const counterOne = new Counter();counterOne.increment();counterOne.increment();const counterTwo = counterOne;counterTwo.increment();console.log(counterOne.count);</p><p></p><p>\n    <code>counterOne</code> is an instance of the <code>Counter</code> class. The counter class contains a <code>count</code> property on its constructor, and an <code>increment</code> method. First, we invoked the <code>increment</code> method twice by calling <code>counterOne.increment()</code>. Currently, <code>counterOne.count</code> is <code>2</code>.</p><p>    ![https://i.imgur.com/KxLlTm9.png](https://i.imgur.com/KxLlTm9.png)</p><p>    Then, we create a new variable <code>counterTwo</code>, and set it equal to <code>counterOne</code>. Since objects interact by reference, we’re just creating a new reference to the same spot in memory that <code>counterOne</code> points to. Since it has the same spot in memory, any changes made to the object that <code>counterTwo</code> has a reference to, also apply to <code>counterOne</code>. Currently, <code>counterTwo.count</code> is <code>2</code>.</p><p>    We invoke <code>counterTwo.increment()</code>, which sets <code>count</code> to <code>3</code>. Then, we log the count on <code>counterOne</code>, which logs <code>3</code>.</p><p>    ![https://i.imgur.com/BNBHXmc.png](https://i.imgur.com/BNBHXmc.png)</p>",
  },
  {
    id: 133,
    question: "What’s the output?",
    image: "question-133.svg",
    options: [
      "<code>Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!</code>",
      "<code>Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2!</code>",
      "<code>Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!</code>",
      "<code>Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!</code>",
    ],
    answer: 3,
    explanation:
      '<p>const myPromise = Promise.resolve(Promise.resolve("Promise"));function funcOne() {  setTimeout(() => console.log("Timeout 1!"), 0);  myPromise.then((res) => res).then((res) => console.log(<code>${res} 1!</code>));  console.log("Last line 1!");}async function funcTwo() {  const res = await myPromise;  console.log(<code>${res} 2!</code>);  setTimeout(() => console.log("Timeout 2!"), 0);  console.log("Last line 2!");}funcOne();funcTwo();</p><p></p><p>\n    First, we invoke <code>funcOne</code>. On the first line of <code>funcOne</code>, we call the *asynchronous* <code>setTimeout</code> function, from which the callback is sent to the Web API. (see my article on the event loop [here](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif).)</p><p>    Then we call the <code>myPromise</code> promise, which is an *asynchronous* operation.</p><p>    Both the promise and the timeout are asynchronous operations, the function keeps on running while it’s busy completing the promise and handling the <code>setTimeout</code> callback. This means that <code>Last line 1!</code> gets logged first, since this is not an asynchonous operation.</p><p>    Since the callstack is not empty yet, the <code>setTimeout</code> function and promise in <code>funcOne</code> cannot get added to the callstack yet.</p><p>    In <code>funcTwo</code>, the variable <code>res</code> gets <code>Promise</code> because <code>Promise.resolve(Promise.resolve(\'Promise\'))</code> is equivalent to <code>Promise.resolve(\'Promise\')</code> since resolving a promise just resolves it’s value. The <code>await</code> in this line stops the execution of the function until it receives the resolution of the promise and then keeps on running synchronously until completion, so <code>Promise 2!</code> and then <code>Last line 2!</code> are logged and the <code>setTimeout</code> is sent to the Web API.</p><p>    Then the call stack is empty. Promises are *microtasks* so they are resolved first when the call stack is empty so <code>Promise 1!</code> gets to be logged.</p><p>    Now, since <code>funcTwo</code> popped off the call stack, the call stack is empty. The callbacks waiting in the queue (<code>() => console.log("Timeout 1!")</code> from <code>funcOne</code>, and <code>() => console.log("Timeout 2!")</code> from <code>funcTwo</code>) get added to the call stack one by one. The first callback logs <code>Timeout 1!</code>, and gets popped off the stack. Then, the second callback logs <code>Timeout 2!</code>, and gets popped off the stack.</p>',
  },
  {
    id: 134,
    question: "How can we invoke `sum` in `sum.js` from `index.js?`",
    image: "question-134.svg",
    options: [
      "<code>sum(4)</code>",
      "<code>sum.sum(4)</code>",
      "<code>sum.default(4)</code>",
      "Default aren’t imported with ``, only named exports",
    ],
    answer: 3,
    explanation:
      '<p>// sum.jsexport default function sum(x) {  return x + x;}// index.jsimport * as sum from "./sum";</p><p></p><p>\n    With the asterisk <code>*</code>, we import all exported values from that file, both default and named. If we had the following file:</p><p>    ```\n    // info.jsexport const name = "Lydia";export const age = 21;export default "I love JavaScript";// index.jsimport * as info from "./info";console.log(info);\n    ```</p><p>    The following would get logged:</p><p>    ```\n    {  default: "I love JavaScript",  name: "Lydia",  age: 21}\n    ```</p><p>    For the <code>sum</code> example, it means that the imported value <code>sum</code> looks like this:</p><p>    ```\n    { default: function sum(x) { return x + x } }\n    ```</p><p>    We can invoke this function, by calling <code>sum.default</code></p>',
  },
  {
    id: 135,
    question: "What’s the output?",
    image: "question-135.svg",
    options: [
      "<code>Added a new property!</code>",
      "<code>Accessed a property!</code>",
      "<code>Added a new property!</code> <code>Accessed a property!</code>",
      "Nothing gets logged",
    ],
    answer: 3,
    explanation:
      '<p>const handler = {  set: () => console.log("Added a new property!"),  get: () => console.log("Accessed a property!"),};const person = new Proxy({}, handler);person.name = "Lydia";person.name;</p><p></p><p>\n    With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In this case, we pass the <code>handler</code> object which contained two properties: <code>set</code> and <code>get</code>. <code>set</code> gets invoked whenever we *set* property values, <code>get</code> gets invoked whenever we *get* (access) property values.</p><p>    The first argument is an empty object <code>{}</code>, which is the value of <code>person</code>. To this object, the custom behavior specified in the <code>handler</code> object gets added. If we add a property to the <code>person</code> object, <code>set</code> will get invoked. If we access a property on the <code>person</code> object, <code>get</code> gets invoked.</p><p>    First, we added a new property <code>name</code> to the proxy object (<code>person.name = "Lydia"</code>). <code>set</code> gets invoked, and logs <code>"Added a new property!"</code>.</p><p>    Then, we access a property value on the proxy object, the <code>get</code> property on the handler object got invoked. <code>"Accessed a property!"</code> gets logged.</p>',
  },
  {
    id: 136,
    question: "Which of the following will modify the `person` object?",
    image: "question-136.svg",
    options: [
      '<code>person.name = "Evan Bacon"</code>',
      "<code>person.age = 21</code>",
      "<code>delete person.name</code>",
      "<code>Object.assign(person, { age: 21 })</code>",
    ],
    answer: 1,
    explanation:
      '<p>const person = { name: "Lydia Hallie" };Object.seal(person);</p><p></p><p>\n    With <code>Object.seal</code> we can prevent new properies from being *added*, or existing properties to be *removed*.</p><p>    However, you can still modify the value of existing properties.</p>',
  },
  {
    id: 137,
    question: "Which of the following will modify the `person` object?",
    image: "question-137.svg",
    options: [
      '<code>person.name = "Evan Bacon"</code>',
      "<code>delete person.address</code>",
      '<code>person.address.street = "101 Main St"</code>',
      '<code>person.pet = { name: "Mara" }</code>',
    ],
    answer: 3,
    explanation:
      '<p>const person = {  name: "Lydia Hallie",  address: {    street: "100 Main St",  },};Object.freeze(person);</p><p></p><p>\n    The <code>Object.freeze</code> method *freezes* an object. No properties can be added, modified, or removed.</p><p>    However, it only *shallowly* freezes the object, meaning that only *direct* properties on the object are frozen. If the property is another object, like <code>address</code> in this case, the properties on that object aren’t frozen, and can be modified.</p>',
  },
  {
    id: 138,
    question: "What’s the output?",
    image: "question-138.svg",
    options: [
      "<code>2</code> <code>4</code> and <code>3</code> <code>6</code>",
      "<code>2</code> <code>NaN</code> and <code>3</code> <code>NaN</code>",
      "<code>2</code> <code>Error</code> and <code>3</code> <code>6</code>",
      "<code>2</code> <code>4</code> and <code>3</code> <code>Error</code>",
    ],
    answer: 1,
    explanation:
      "<p>const add = (x) => x + x;function myFunc(num = 2, value = add(num)) {  console.log(num, value);}myFunc();myFunc(3);</p><p></p><p>\n    First, we invoked <code>myFunc()</code> without passing any arguments. Since we didn’t pass arguments, <code>num</code> and <code>value</code> got their default values: num is <code>2</code>, and <code>value</code> the returned value of the function <code>add</code>. To the <code>add</code> function, we pass <code>num</code> as an argument, which had the value of <code>2</code>. <code>add</code> returns <code>4</code>, which is the value of <code>value</code>.</p><p>    Then, we invoked <code>myFunc(3)</code> and passed the value <code>3</code> as the value for the argument <code>num</code>. We didn’t pass an argument for <code>value</code>. Since we didn’t pass a value for the <code>value</code> argument, it got the default value: the returned value of the <code>add</code> function. To <code>add</code>, we pass <code>num</code>, which has the value of <code>3</code>. <code>add</code> returns <code>6</code>, which is the value of <code>value</code>.</p>",
  },
  {
    id: 139,
    question: "What’s the output?",
    image: "question-139.svg",
    options: [
      "<code>10</code>",
      "<code>11</code>",
      "<code>undefined</code>",
      "<code>SyntaxError</code>",
    ],
    answer: 4,
    explanation:
      "<p>class Counter {  #number = 10;  increment() {    this.#number++;  }  getNum() {    return this.#number;  }}const counter = new Counter();counter.increment();console.log(counter.#number);</p><p></p><p>\n    In ES2020, we can add private variables in classes by using the <code>#</code>. We cannot access these variables outside of the class. When we try to log <code>counter.#number</code>, a SyntaxError gets thrown: we cannot acccess it outside the <code>Counter</code> class!</p>",
  },
  {
    id: 140,
    question: "What’s missing?",
    image: "question-140.svg",
    options: [
      "<code>yield getMembers(teams[i].members)</code>",
      "<code>yield* getMembers(teams[i].members)</code>",
      "<code>return getMembers(teams[i].members)</code>",
      "<code>return yield getMembers(teams[i].members)</code>",
    ],
    answer: 2,
    explanation:
      '<p>const teams = [  { name: "Team 1", members: ["Paul", "Lisa"] },  { name: "Team 2", members: ["Laura", "Tim"] },];function* getMembers(members) {  for (let i = 0; i < members.length; i++) {    yield members[i];  }}function* getTeams(teams) {  for (let i = 0; i < teams.length; i++) {    // ✨ SOMETHING IS MISSING HERE ✨  }}const obj = getTeams(teams);obj.next(); // { value: "Paul", done: false }obj.next(); // { value: "Lisa", done: false }</p><p></p><p>\n    In order to iterate over the <code>members</code> in each element in the <code>teams</code> array, we need to pass <code>teams[i].members</code> to the <code>getMembers</code> generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use <code>yield*</code>.</p><p>    If we would’ve written <code>yield</code>, <code>return yield</code>, or <code>return</code>, the entire generator function would’ve gotten returned the first time we called the <code>next</code> method.</p>',
  },
  {
    id: 141,
    question: "What’s the output?",
    image: "question-141.svg",
    options: [
      '<code>["coding"]</code>',
      '<code>["coding", "dancing"]</code>',
      '<code>["coding", "dancing", "baking"]</code>',
      '<code>["coding", "running", "dancing", "baking"]</code>',
    ],
    answer: 3,
    explanation:
      '<p>const person = {  name: "Lydia Hallie",  hobbies: ["coding"],};function addHobby(hobby, hobbies = person.hobbies) {  hobbies.push(hobby);  return hobbies;}addHobby("running", []);addHobby("dancing");addHobby("baking", person.hobbies);console.log(person.hobbies);</p><p></p><p>\n    The <code>addHobby</code> function receives two arguments, <code>hobby</code> and <code>hobbies</code> with the default value of the <code>hobbies</code> array on the <code>person</code> object.</p><p>    First, we invoke the <code>addHobby</code> function, and pass <code>"running"</code> as the value for <code>hobby</code> and an empty array as the value for <code>hobbies</code>. Since we pass an empty array as the value for <code>hobbies</code>, <code>"running"</code> gets added to this empty array.</p><p>    Then, we invoke the <code>addHobby</code> function, and pass <code>"dancing"</code> as the value for <code>hobby</code>. We didn’t pass a value for <code>hobbies</code>, so it gets the default value, the <code>hobbies</code> property on the <code>person</code> object. We push the hobby <code>dancing</code> to the <code>person.hobbies</code> array.</p><p>    Last, we invoke the <code>addHobby</code> function, and pass <code>"baking"</code> as the value for <code>hobby</code>, and the <code>person.hobbies</code> array as the value for <code>hobbies</code>. We push the hobby <code>baking</code> to the <code>person.hobbies</code> array.</p><p>    After pushing <code>dancing</code> and <code>baking</code>, the value of <code>person.hobbies</code> is <code>["coding", "dancing", "baking"]</code></p>',
  },
  {
    id: 142,
    question: "What’s the output?",
    image: "question-142.svg",
    options: [
      "<code>I'm pink. 🌸</code>",
      "<code>I'm pink. 🌸</code> <code>I'm a bird. 🦢</code>",
      "<code>I'm a bird. 🦢</code> <code>I'm pink. 🌸</code>",
      "Nothing, we didn’t call any method",
    ],
    answer: 2,
    explanation:
      '<p>class Bird {  constructor() {    console.log("I\'m a bird. 🦢");  }}class Flamingo extends Bird {  constructor() {    console.log("I\'m pink. 🌸");    super();  }}const pet = new Flamingo();</p><p></p><p>\n    We create the variable <code>pet</code> which is an instance of the <code>Flamingo</code> class. When we instantiate this instance, the <code>constructor</code> on <code>Flamingo</code> gets called. First, <code>"I\'m pink. 🌸"</code> gets logged, after which we call <code>super()</code>. <code>super()</code> calls the constructor of the parent class, <code>Bird</code>. The constructor in <code>Bird</code> gets called, and logs <code>"I\'m a bird. 🦢"</code>.</p>',
  },
  {
    id: 143,
    question: "Which of the options result(s) in an error?",
    image: "question-143.svg",
    options: ["1", "1 and 2", "3 and 4", "3"],
    answer: 4,
    explanation:
      '<p>const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];/* 1 */ emojis.push("🦌");/* 2 */ emojis.splice(0, 2);/* 3 */ emojis = [...emojis, "🥂"];/* 4 */ emojis.length = 0;</p><p></p><p>\n    The <code>const</code> keyword simply means we cannot *redeclare* the value of that variable, it’s *read-only*. However, the value itself isn’t immutable. The properties on the <code>emojis</code> array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0.</p>',
  },
  {
    id: 144,
    question:
      'What do we need to add to the `person` object to get `["Lydia Hallie", 21]` as the output of `[...person]`?',
    image: "question-144.svg",
    options: [
      "Nothing, object are iterable by default",
      "<code>[Symbol.iterator]() { for (let x in this) yield* this}</code>",
      "<code>[Symbol.iterator]() { yield* Object.values(this) }</code>",
      "<code>[Symbol.iterator]() { for (let x in this) yield this }</code>",
    ],
    answer: 3,
    explanation:
      '<p>const person = {  name: "Lydia Hallie",  age: 21}[...person] // ["Lydia Hallie", 21]</p><p></p><p>\n    Objects aren’t iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol <code>[Symbol.iterator]</code>, which has to return a generator object, for example by making it a generator function <code>*[Symbol.iterator]() {}</code>. This generator function has to yield the <code>Object.values</code> of the <code>person</code> object if we want it to return the array <code>["Lydia Hallie", 21]</code>: <code>yield* Object.values(this)</code>.</p>',
  },
  {
    id: 145,
    question: "What’s the output?",
    image: "question-145.svg",
    options: ["1", "2", "3", "4"],
    answer: 3,
    explanation:
      "<p>let count = 0;const nums = [0, 1, 2, 3];nums.forEach((num) => {  if (num) count += 1;});console.log(count);</p><p></p><p>\n    The <code>if</code> condition within the <code>forEach</code> loop checks whether the value of <code>num</code> is truthy or falsy. Since the first number in the <code>nums</code> array is <code>0</code>, a falsy value, the <code>if</code> statement’s code block won’t be executed. <code>count</code> only gets incremented for the other 3 numbers in the <code>nums</code> array, <code>1</code>, <code>2</code> and <code>3</code>. Since <code>count</code> gets incremented by <code>1</code> 3 times, the value of <code>count</code> is <code>3</code>.</p>",
  },
  {
    id: 146,
    question: "What’s the output?",
    image: "question-146.svg",
    options: [
      "<code>null</code>, <code>undefined</code>, 🍌",
      "<code>[]</code>, <code>null</code>, 🍌",
      "<code>[]</code>, <code>[]</code>, 🍌",
      "<code>undefined</code>, <code>undefined</code>, 🍌",
    ],
    answer: 4,
    explanation:
      "<p>function getFruit(fruits) {  console.log(fruits?.[1]?.[1]);}getFruit([[\"🍊\", \"🍌\"], [\"🍍\"]]);getFruit();getFruit([[\"🍍\"], [\"🍊\", \"🍌\"]]);</p><p></p><p>\n    The <code>?</code> allows us to optionally access deeper nested properties within objects. We’re trying to log the item on index <code>1</code> within the subarray that’s on index <code>1</code> of the <code>fruits</code> array. If the subarray on index <code>1</code> in the <code>fruits</code> array doesn’t exist, it’ll simply return <code>undefined</code>. If the subarray on index <code>1</code> in the <code>fruits</code> array exists, but this subarray doesn’t have an item on its <code>1</code> index, it’ll also return <code>undefined</code>.</p><p>    First, we’re trying to log the second item in the <code>['🍍']</code> subarray of <code>[['🍊', '🍌'], ['🍍']]</code>. This subarray only contains one item, which means there is no item on index <code>1</code>, and returns <code>undefined</code>.</p><p>    Then, we’re invoking the <code>getFruits</code> function without passing a value as an argument, which means that <code>fruits</code> has a value of <code>undefined</code> by default. Since we’re conditionally chaining the item on index <code>1</code> of<code>fruits</code>, it returns <code>undefined</code> since this item on index <code>1</code> does not exist.</p><p>    Lastly, we’re trying to log the second item in the <code>['🍊', '🍌']</code> subarray of <code>['🍍'], ['🍊', '🍌']</code>. The item on index <code>1</code> within this subarray is <code>🍌</code>, which gets logged.</p>",
  },
  {
    id: 147,
    question: "What’s the output?",
    image: "question-147.svg",
    options: [
      "<code>0</code>",
      "<code>1</code>",
      "<code>undefined</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 1,
    explanation:
      "<p>class Calc {  constructor() {    this.count = 0;  }  increase() {    this.count++;  }}const calc = new Calc();new Calc().increase();console.log(calc.count);</p><p></p><p>\n    We set the variable <code>calc</code> equal to a new instance of the <code>Calc</code> class. Then, we instantiate a new instance of <code>Calc</code>, and invoke the <code>increase</code> method on this instance. Since the count property is within the constructor of the <code>Calc</code> class, the count property is not shared on the prototype of <code>Calc</code>. This means that the value of count has not been updated for the instance calc points to, count is still <code>0</code>.</p>",
  },
  {
    id: 148,
    question: "What’s the output?",
    image: "question-148.svg",
    options: [
      "<code>false</code>",
      "<code>true</code>",
      "<code>TypeError</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 2,
    explanation:
      '<p>const user = {  email: "e@mail.com",  password: "12345",};const updateUser = ({ email, password }) => {  if (email) {    Object.assign(user, { email });  }  if (password) {    user.password = password;  }  return user;};const updatedUser = updateUser({ email: "new@email.com" });console.log(updatedUser === user);</p><p></p><p>\n    The <code>updateUser</code> function updates the values of the <code>email</code> and <code>password</code> properties on user, if their values are passed to the function, after which the function returns the <code>user</code> object. The returned value of the <code>updateUser</code> function is the <code>user</code> object, which means that the value of updatedUser is a reference to the same <code>user</code> object that <code>user</code> points to. <code>updatedUser === user</code> equals <code>true</code>.</p>',
  },
  {
    id: 149,
    question: "What’s the output?",
    image: "question-149.svg",
    options: [
      "<code>['🍌', '🍊', '🍎']</code>",
      "<code>['🍊', '🍎']</code>",
      "<code>['🍇', '🍊', '🍎']</code>",
      "<code>['🍇', '🍌', '🍊', '🍎']</code>",
    ],
    answer: 3,
    explanation:
      "<p>const fruit = [\"🍌\", \"🍊\", \"🍎\"];fruit.slice(0, 1);fruit.splice(0, 1);fruit.unshift(\"🍇\");console.log(fruit);</p><p></p><p>\n    First, we invoke the <code>slice</code> method on the fruit array. The slice method does not modify the original array, but returns the value that it sliced off the array: the banana emoji. Then, we invoke the <code>splice</code> method on the fruit array. The splice method does modify the original array, which means that the fruit array now consists of <code>['🍊', '🍎']</code>. At last, we invoke the <code>unshift</code> method on the <code>fruit</code> array, which modifies the original array by adding the provided value, ‘🍇’ in this case, as the first element in the array. The fruit array now consists of <code>['🍇', '🍊', '🍎']</code>.</p>",
  },
  {
    id: 150,
    question: "What’s the output?",
    image: "question-150.svg",
    options: [
      '<code>{ emoji: "🐶", name: "Mara" }</code>',
      '<code>{ emoji: "🐈", name: "Sara" }</code>',
      "<code>undefined</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 2,
    explanation:
      '<p>const animals = {};let dog = { emoji: "🐶" };let cat = { emoji: "🐈" };animals[dog] = { ...dog, name: "Mara" };animals[cat] = { ...cat, name: "Sara" };console.log(animals[dog]);</p><p></p><p>\n    Object keys are converted to strings.</p><p>    Since the value of <code>dog</code> is an object, <code>animals[dog]</code> actually means that we’re creating a new property called <code>"object Object"</code> equal to the new object. <code>animals["object Object"]</code> is now equal to <code>{ emoji: "🐶", name: "Mara"}</code>.</p><p>    <code>cat</code> is also an object, which means that <code>animals[cat]</code> actually means that we’re overwriting the value of <code>animals["object Object"]</code> with the new cat properties.</p><p>    Logging <code>animals[dog]</code>, or actually <code>animals["object Object"]</code> since converting the <code>dog</code> object to a string results <code>"object Object"</code>, returns the <code>{ emoji: "🐈", name: "Sara" }</code>.</p>',
  },
  {
    id: 151,
    question: "What’s the output?",
    image: "question-151.svg",
    options: [
      "<code>my@email.com</code>",
      "<code>new@email.com</code>",
      "<code>undefined</code>",
      "<code>ReferenceError</code>",
    ],
    answer: 1,
    explanation:
      '<p>const user = {  email: "my@email.com",  updateEmail: (email) => {    this.email = email;  },};user.updateEmail("new@email.com");console.log(user.email);</p><p></p><p>\n    The <code>updateEmail</code> function is an arrow function, and is not bound to the <code>user</code> object. This means that the <code>this</code> keyword is not referring to the <code>user</code> object, but refers to the global scope in this case. The value of <code>email</code> within the <code>user</code> object does not get updated. When logging the value of <code>user.email</code>, the original value of <code>my@email.com</code> gets returned.</p>',
  },
  {
    id: 152,
    question: "What’s the output?",
    image: "question-152.svg",
    options: [
      "<code>[['First', 'Second'], ['Fourth']]</code>",
      "<code>[['First', 'Second'], ['Third', 'Fourth']]</code>",
      "<code>[['First', 'Second']]</code>",
      "<code>'Third'</code>",
    ],
    answer: 4,
    explanation:
      '<p>const promise1 = Promise.resolve("First");const promise2 = Promise.resolve("Second");const promise3 = Promise.reject("Third");const promise4 = Promise.resolve("Fourth");const runPromises = async () => {  const res1 = await Promise.all([promise1, promise2]);  const res2 = await Promise.all([promise3, promise4]);  return [res1, res2];};runPromises()  .then((res) => console.log(res))  .catch((err) => console.log(err));</p><p></p><p>\n    The <code>Promise.all</code> method runs the passed promises in parallel. If one promise fails, the <code>Promise.all</code> method *rejects* with the value of the rejected promise. In this case, <code>promise3</code> rejected with the value <code>"Third"</code>. We’re catching the rejected value in the chained <code>catch</code> method on the <code>runPromises</code> invocation to catch any errors within the <code>runPromises</code> function. Only <code>"Third"</code> gets logged, since <code>promise3</code> rejected with this value.</p>',
  },
  {
    id: 153,
    question:
      'What should the value of `method` be to log `{ name: "Lydia", age: 22 }`?',
    image: "question-153.svg",
    options: [
      "<code>entries</code>",
      "<code>values</code>",
      "<code>fromEntries</code>",
      "<code>forEach</code>",
    ],
    answer: 3,
    explanation:
      '<p>const keys = ["name", "age"];const values = ["Lydia", 22];const method =  /* ?? */  Object[method](    keys.map((_, i) => {      return [keys[i], values[i]];    })  ); // { name: "Lydia", age: 22 }</p><p></p><p>\n    The <code>fromEntries</code> method turns a 2d array into an object. The first element in each subarray will be the key, and the second element in each subarray will be the value. In this case, we’re mapping over the <code>keys</code> array, which returns an array which first element is the item on the key array on the current index, and the second element is the item of the values array on the current index.</p><p>    This creates an array of subarrays containing the correct keys and values, which results in <code>{ name: "Lydia", age: 22 }</code></p>',
  },
  {
    id: 154,
    question: "What’s the output?",
    image: "question-154.svg",
    options: [
      '<code>{ email: "my@email.com", address: null }</code>',
      '<code>{ email: "my@email.com" }</code>',
      '<code>{ email: "my@email.com", address: {} }</code>',
      '<code>{ email: "my@email.com", address: undefined }</code>',
    ],
    answer: 3,
    explanation:
      '<p>const createMember = ({ email, address = {} }) => {  const validEmail = /.+\\@.+\\..+/.test(email);  if (!validEmail) throw new Error("Valid email pls");  return {    email,    address: address ? address : null,  };};const member = createMember({ email: "my@email.com" });console.log(member);</p><p></p><p>\n    The default value of <code>address</code> is an empty object <code>{}</code>. When we set the variable <code>member</code> equal to the object returned by the <code>createMember</code> function, we didn’t pass a value for address, which means that the value of address is the default empty object <code>{}</code>. An empty object is a truthy value, which means that the condition of the <code>address ? address : null</code> conditional returns <code>true</code>. The value of address is the empty object <code>{}</code>.</p>',
  },
  {
    id: 155,
    question: "What’s the output?",
    image: "question-155.svg",
    options: [
      "<code>It's not a string!</code>",
      "<code>Yay it's a string!</code>",
      "<code>TypeError</code>",
      "<code>undefined</code>",
    ],
    answer: 2,
    explanation:
      '<p>let randomValue = { name: "Lydia" };randomValue = 23;if (!typeof randomValue === "string") {  console.log("It\'s not a string!");} else {  console.log("Yay it\'s a string!");}</p><p></p><p></p><p></p><p></p><p>    The condition within the <code>if</code> statement checks whether the value of <code>!typeof randomValue</code> is equal to <code>"string"</code>. The <code>!</code> operator converts the value to a boolean value. If the value is truthy, the returned value will be <code>false</code>, if the value is falsy, the returned value will be <code>true</code>. In this case, the returned value of <code>typeof randomValue</code> is the truthy value <code>"number"</code>, meaning that the value of <code>!typeof randomValue</code> is the boolean value <code>false</code>.</p><p></p><p>    <code>!typeof randomValue === "string"</code> always returns false, since we’re actually checking <code>false === "string"</code>. Since the condition returned <code>false</code>, the code block of the <code>else</code> statement gets run, and <code>Yay it\'s a string!</code> gets logged.</p>',
  },
];
