1. What is React?
Ans-> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

2. Who made React?
Ans-> React was created by Jordan Walke, a software engineer at Facebook. Today, React has over a thousand open source contributors.

3. What is Babel?
Ans-> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:
        i.Transform syntax
        ii.Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
        iii.Source code transformations (codemods).

4. How does Babel convert html code in React into valid code?
Ans-> You can view babel as an intermediate step between your code and "executable" code. React also uses ES6, which is not supported by most of the browsers. Babel converts the ES6 code to a code which is compatible with the browsers. The best combination for a mature React project would be React+babel+Webpack.

5. What is ReactDOM used for? Write an example?
Ans-> ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.

6. What are the packages that you need to import for react to work with?
Ans-> packages contains metadata (such as package. json ) and the source code ( src subdirectory) for all packages in the React repository.

7. How do you add react to a web application?
Ans-> Step 1: Add a DOM Container to the HTML. First, open the HTML page you want to edit. ...
      Step 2: Add the Script Tags. Next, add three <script> tags to the HTML page right before the closing </body> tag: ...
      Step 3: Create a React Component. Create a file called like_button.js next to your HTML page.

8. What is React.createElement?
Ans-> React. createElement( tagName, [props], [... children] ) Create and return a new React element of the given tag. The tag argument can be either a tag name string (such as 'div' or 'span' ), a React component type (a class or a function), or a React fragment type.
9. What are the three properties that createElement accept?
Ans-> 1. tagName
      2. {argument,attribute}
      3. children

10. What is the meaning of render and root?
Ans-> Render means renew only an appropriate part of information on user's screen when the element properties (props) are replaced by new ones