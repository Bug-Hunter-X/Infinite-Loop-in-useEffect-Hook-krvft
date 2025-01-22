# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications: an infinite loop caused by incorrectly updating state within the `useEffect` hook.

## Bug Description
The `useEffect` hook is used to perform side effects after rendering. However, if the state is updated within the `useEffect` hook and the state is also included in the dependency array, it will cause an infinite loop. This happens because every time the state is updated, the `useEffect` hook will run again, leading to another state update, and so on.

## How to Reproduce
Clone this repository and run the application. You'll observe the counter continuously incrementing, indicating the infinite loop.

## Solution
The solution is to avoid updating the state that is included in the dependency array within the `useEffect` hook.  Instead, use functional updates to ensure the state is updated correctly.