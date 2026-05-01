---
title: "Understanding the JavaScript Event Loop"
date: "2026-04-15"
description: "A clear and practical explanation of how the JavaScript Event Loop works, including call stack, queues, and async behavior."
---

# Understanding the JavaScript Event Loop

The JavaScript Event Loop is one of those concepts that many developers "kind of understand"…

In this post, we’ll break it down in a simple and practical way.

---

## The Big Picture

JavaScript is **single-threaded**.

That means:

- one call stack
- one thing executing at a time

So how does it handle asynchronous code like `setTimeout`, API calls, or promises?

This is where the **Event Loop** comes in.

---

## The Core Components

To understand the Event Loop, you need to know three things:

### 1. Call Stack

The Call Stack is a data structure that JavaScript uses to keep track of which functions are currently being executed. Each time a function is called, it is added (pushed) to the top of the Call Stack; when a function finishes, it is removed (popped).

It is also the place where JavaScript code is actually executed.

    function greet() {
      console.log("Hello");
    }

    greet();

`greet()` is pushed onto the stack, executed, then removed.

---

### 2. Web APIs (Browser)

Things like:

- `setTimeout`
- DOM events
- fetch requests

These are handled **outside the call stack**.

---

### 3. Task Queue (Callback Queue)

When async operations complete, their callbacks are added here.

    setTimeout(() => {
      console.log("Timeout");
    }, 0);

The callback goes to the **task queue**, not directly to the stack.

---

## So What Does the Event Loop Do?

It constantly checks:

> “Is the call stack empty?”

- If **NO** → do nothing
- If **YES** → take the first task from the queue and push it to the stack

---

## Example

    console.log("Start");

    setTimeout(() => {
      console.log("Timeout");
    }, 0);

    console.log("End");

### Output:

    Start
    End
    Timeout

### Why?

1. `Start` → runs
2. `setTimeout` → goes to Web API
3. `End` → runs
4. Stack is empty → Event Loop picks `Timeout`

---

## Microtasks vs Macrotasks

Not all tasks are equal.

### Microtasks

- `Promise.then`
- `queueMicrotask`

### Macrotasks

- `setTimeout`
- `setInterval`

---

### Important Rule

**Microtasks run before macrotasks**

---

## Example

    console.log("Start");

    setTimeout(() => {
      console.log("Timeout");
    }, 0);

    Promise.resolve().then(() => {
      console.log("Promise");
    });

    console.log("End");

### Output:

    Start
    End
    Promise
    Timeout

Because **microtasks are processed first**

---

## Mental Model

Think of the Event Loop like this:

1. Execute everything in the call stack
2. Process all microtasks
3. Take one macrotask
4. Repeat

---

## Why This Matters

Understanding the Event Loop helps you:

- debug async bugs
- avoid race conditions
- write predictable code
- perform better in technical interviews

---

## Conclusion

The Event Loop is not magic.

It’s just a **simple loop** that says:

> “When the stack is empty, take the next task and run it.”

Once you understand that, everything else becomes much clearer.
