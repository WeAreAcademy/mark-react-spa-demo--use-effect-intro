# `useEffect` intro

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

You've been using React's `useState` hook - which is by far the most common and most important out of the React hooks. Now, we'll look at `useEffect`, which ranks #2 on that list.

## Learning Outcomes

- Predict when a `useEffect`'s callback will run
- Explain the role of `useEffect` dependency array

## Navigating the demo

> 🎯 **Success criterion:** You can explain the `console.log`s that appear in the browser console

You'll see in the demo that `useEffect` takes two arguments:

1. A callback function
2. An array

Here's roughly how `useEffect` works:

1. On every render of the component, it checks the values in its the dependency array
2. If _any_ of the values in the array have changed since the last render, then `useEffect` executes its callback
