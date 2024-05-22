# REACT-todo-app
Learning React with Web Dev Simplified (https://www.youtube.com/watch?v=Rh3tobg7hEo)

## What is react?
- Library for native and web interface
- front end frame work
- features on top of normal javascript

- html looking code is called jsx

## Plan your UI
1. breakdown your code into components like text, video, image, then combine into one app
2. I want my app to look like this<br>
    *Think about making a sandwich*
    - get a list of ingredients
    - list the instructions<br>
    *Go to a shop, ask for a sandwich*
    - this is the react way of thinking

## Set up
- npm create vite@latest
- ? Project name: » vite-project (replace w period)
- framework: React
- variant: JavaSript + SWC
![](image.png)
![](image-1.png)
- index.html is where our script tag is imported

- in src > assets > main.jsx
  - hooks our html with react code
  - everything inside the app is rendered in <div id="root">

- in src > assets > App.jsx
    - function that starts w capital letter is a component (ex. function App(){})

- to get started, delete App.css, assets, public
![alt text](image-2.png)

## React basic structure
- hooks: functions that allow you to reuse stateful logic
  - there are 15 hooks in React version 18
- helper functions
- return value (what to display)

- HOOKS:
  1. useCallback
  2. useContext
  3. useDebugValue
  4. useDeferredValue
  5. useEffect
  6. useId
  7. useImperativeHandle
  8. useInsertionEffect
  9. useLayoutEffect
  10. useMemo
  11. useReducer
  12. useRef
  13. useState
  14. useSyncExternalStore
  15. useTransition
