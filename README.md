# React Course

## Components

React is all about components

Components :- Independent chunks of user interfaces

Components can be as small as one HTML Element or it can as big as a facebook clone.

Benefit of Component is you can build bunch of isolated and most imporantly reusable user interfaces.

A react app will always have atleast one component(root)

Summary :- components are independent, reusable user interfaces  

React uses something called virtual dom where only the component that needs to be updated is effected and it's done without rerendering the whole app which increases the speed of your final project.

## Root 

```html
<div id="root"></div>
```
Root is where our JS App lives  

## Create React App

1. Babel is a js transpiler that converts the newest(ES6) JS to the good old JS(ES5).
2. webpack (module bundler) bundles resources, watching for changes and running babel 
3. npx uses the latest react app version so we use it instead of npm(make sure to have npm 5.0 and above version)

> Since React is our main dependencies we don't need to write specific path such as ./react

## React Components 

* Function components are always capitilized 
* Component function returns JSX
* ReactDom injects javascript into html
* ReactDom.render renders a component to a html element 
* In render we always have to close the component tag
* Stateless functional component always return JSX.
* Props are parameters to components
* Children prop is put between Opening and closing tag of a component

## JSX Rules

1. Returns single element, you cannot add adjacent element

2. div / section / article or fragment(<React.Fragment> or <>)

3. use camelCase for html attirbute

4. className instead of class

5. close every element

6. formatting, use paranthesis after return statement or put opening tag on the same line as return

7. To go back to JavaScript World inside JSX we need to use {}, we can't have a statement inside these, Only expressions

8. All CSS goes inside a JS Object


* Each child in a list should have a unique id in React

* 1 file can only have one default export

## Hooks 

* To make our components from static data and list to dynamic and complex we use hooks 

