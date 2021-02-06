# Character Roll Call

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

## Learning outcomes

- Type the `props` received by a component
- Use `props` destructuring

## Exercise 1: Adding characters

> 🎯 **Success criterion:** You have added five characters

The root `App` component renders three `Character`s.

Add five more!

(It is worth experiment with the restrictions placed on `props` by TypeScript.)

## Exercise 2: Prop destructuring

> 🎯 **Success criterion:** You have refactored the `Character` component to use props destructuring

`props` is just an argument that function components take - an application of the [object parameter](https://refactoring.guru/introduce-parameter-object) [pattern](https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/).

Like any function parameter, it can be renamed (try it!), but `props` is the conventional name for it.

Like any function parameter, it can also be [destructured](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

[Destructuring props](https://reactpatterns.com/#destructuring-props) is a common way to make React components more readable and concise.

See if you can restructure the `Character` component to use props destructuring.
