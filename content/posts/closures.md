---
title: "Understanding JavaScript Closures"
date: "2026-03-15"
description: "A clear explanation of how closures work in JavaScript and why they matter."
---

# Understanding JavaScript Closures (Without the Confusion)

Closures are one of the most misunderstood concepts in JavaScript.

I’ve seen many explanations online. Most of them are good, but often focus on memorizing patterns rather than building a solid understanding.

In this post, I want to explain what closures really are, how they work, and when it actually makes sense to use them.

---

## What is a closure?

A closure is a function returned from another function that remembers the scope in which it was created, including its local variables, even after the outer function has finished executing.

In simpler terms:

> A function “remembers” the environment in which it was created.

---

## A simple example

```js
function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    return count;
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
```

At first glance, this might seem surprising.

Why does `count` keep increasing?  
Shouldn't it be reset every time the function runs?

---

## What is actually happening

When `createCounter` is executed, a new lexical environment is created.

This environment contains:

- the variable `count`
- the inner function `increment`

Even after `createCounter` finishes executing, that environment is **not destroyed**.

Why?

Because the returned function (`increment`) still references it.

Instead of copying the value of `count`, the closure maintains a **reference** to it.

> Closures don’t store values — they keep access to variables.

---

## Common misconception

A common mistake is to think that closures “freeze” values.

They don’t.

Closures keep a **live connection** to the original variable.

---

## Real-world use cases

Closures are not just a theoretical concept. They are everywhere in real applications.

### 1. Encapsulation

```js
function createUser(name) {
  let privateName = name;

  return {
    getName: () => privateName,
    setName: (newName) => {
      privateName = newName;
    },
  };
}
```

Here, `privateName` is not directly accessible from outside, but can still be read and modified through closures.

---

### 2. Event handlers

```js
function setupButton(button) {
  let clicks = 0;

  button.addEventListener("click", () => {
    clicks++;
    console.log(clicks);
  });
}
```

The event handler keeps access to `clicks` even after `setupButton` has finished executing.

---

### 3. Factory functions

Closures allow you to create multiple independent instances:

```js
const counterA = createCounter();
const counterB = createCounter();

counterA(); // 1
counterA(); // 2

counterB(); // 1
```

Each call creates a new environment.

Another example:

```js
function multiply(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiply(2);
const triple = multiply(3);

double(5); // 10
triple(5); // 15
```

---

## Are closures still relevant today?

Even if you don’t explicitly think about them, you are using closures every day.

Frameworks like React rely heavily on closures. Hooks such as `useState` and `useEffect` are built around the idea that functions can retain access to variables across executions.

Closures are also fundamental in:

- asynchronous code
- event handling
- module patterns

In other words, understanding closures is not optional.

> It is essential if you want to write predictable and maintainable JavaScript.

---

## Conclusion

Closures are a fundamental part of how JavaScript works.

Understanding them is not about memorizing patterns, but about understanding how scope and execution contexts interact.

Once you internalize that closures keep **references — not values**, many confusing behaviors start to make sense.

And more importantly, you gain a powerful tool for structuring your code.
