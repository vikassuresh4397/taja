# React Custom Hook Generic Component

#### Testing Objectives for Students

1. The user should be able to create his own custom hooks, that cover most of the edge cases, related to its functionality.
2. The user should be able to use "PropTypes" for type-checking the props that the component receives.
3. The user should be able to create his own custom React components. The components should function properly when the user passes the required props.

## Submission Instructions [Please note]

## Maximum Marks - 20

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the default return values and format of useDarkMode hook are inside an array  - 1 mark
 ✅ Check if the button has 'Dark' text and NO "dark-mode" classname present on app-component by default - 2 mark
 ✅ Check if the button text was changing from Dark to Light and vice-versa on changing the theme - 1 mark
 ✅ Check if the theme was persisting even with page refresh - 1 mark
 ✅ should render the UserCard component in the UI  - 1 mark
 ✅ should have the proptypes defined for UserCard with "name" prop as `isRequired` - 1 mark
 ✅ should use the default value of description, backgroundColor as className, imageURL and title from props - 4 marks
 ✅ should render the UserCard with the default className of 'round' as a value of avatarShape for userimage - 2 mark
 ✅ should render the Input component with the proptypes defined, with variant props as `isRequired` - 2 mark
 ✅ should render the Input component in the UI - 1 mark
 ✅ should use values of size, and variant props as classNames - 2 mark
 ✅ should show the typed value of the input box, inside the app.js input-value div - 1 mark
```

## Installation
- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
npm install --engine-strict
// run locally
npm run start

// test locally
npm run test

```

## Boilerplate

- You are given these Components:
  - App
    - UserCard
    - Input

## Description

#### useDarkMode hook

- import the useDarkMode hook, to be used in the App.js file
- Syntax:

```JavaScript
 const [isDarkMode, toggleDarkMode] = useDarkMode();
```

- The variable isDarkMode should return false, by default
- The variable toggleDarkMode will be a function that toggles the value of isDarkMode.
- Change the UI, by using the 'dark-mode' className on app-component, by validating it with isDarkMode variable.
- Change the text on the button to Dark and Light, depending on the value of isDarkMode variable.
- For example: if isDarkMode = false, button text = 'Dark', else 'Light'
- Try persisting the theme of the application, even with page reload.
- **[HINT]**: use Local Storage

#### UserCard

- It should take the props, `imageURL`, `avatarShape`, `name`, `description`, `backgroundColor` and `title`
- Define the correct propTypes for this props, with the name prop as `isRequired`.
- avatarShape
  - values that it can take: `round` and `square`
  - default value `round`
  - use the values as classNames for making the changes.
- description
  - default value `Testing Description`
- backgroundColor
  - default value `red`
  - use the values as classnames for making the changes.

#### Input

- It should take the following props, `type`, `size`, `variant`, `value` and `onChange`.
- Define the correct propTypes for this props, with the variant prop as `isRequired`
- `type` is type of inputbox. default type is text
- size will have following values: sm, md, lg, xl. Use it as classnames. You can decide what these values for sizes going to be. Default value `md`
- variant has following values: outline, filled, and flushed. Use these values as classnames. Reference: [docs](https://chakra-ui.com/docs/components/form/input#changing-the-appearance-of-the-input)
- `value` prop will take the default value of the input tag, if any.
- `onChange` is also a callback that directly gives you value. it doesn't give entire event object, only the value we are typing. For example: [Link](https://chakra-ui.com/docs/components/input/usage#controlled-input)
- Show the user input text in the App.js file, inside the `input-value` div.

## Some Screenshots of the application:

![Imgur](https://i.imgur.com/CuQqQRV.png)
![Imgur](https://i.imgur.com/wUKgDOx.png)fd
![Imgur](https://i.imgur.com/k6dNyLg.png)
![Imgur](https://i.imgur.com/widcbaA.png)
![Imgur](https://i.imgur.com/0nvWfCR.png)
![Imgur](https://i.imgur.com/Uoyl4Gs.png)

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.
- DO NOT use CHAKRA UI.
- DO NOT use inline style.

### General Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time












App.js code is given below

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { useDarkMode } from "./useDarkMode";

// Define the UserCard component
function UserCard({
  imageURL,
  avatarShape = "round",
  name,
  description = "Testing Description",
  backgroundColor = "red",
  title,
}) {
  return (
    <div
      data-testid="user-card"
      className={`user-card ${backgroundColor} ${avatarShape}`}
    >
      <img data-testid="user-image" src={imageURL} alt="user" />
      <div>
        <h1 data-testid="user-name">{name}</h1>
        <p data-testid="user-description">{description}</p>
        <p data-testid="user-title">{title}</p>
      </div>
    </div>
  );
}

// Define propTypes for the UserCard component
UserCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  avatarShape: PropTypes.oneOf(["round", "square"]),
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
};

// Define the Input component
function Input({ type = "text", size = "md", variant, value, onChange }) {
  return (
    <input
      data-testid="input-component"
      type={type}
      className={`input-${size} input-${variant}`}
      value={value}
      onChange={onChange}
    />
  );
}

// Define propTypes for the Input component
Input.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "filled", "flushed"]).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// Define the App component
function App() {
  // Use the useDarkMode hook to toggle dark mode
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  // Use state to store the input value
  const [inputValue, setInputValue] = useState("");

  // Use local storage to store the theme
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("isDarkMode"));
    if (theme) {
      toggleDarkMode();
    }
  }, [toggleDarkMode]);

  return (
    // Add the dark-mode class name to App depending on the boolean value of isDarkMode
    <div data-testid="app-component" className={`App ${isDarkMode && "dark-mode"}`}>
      {/* Toggle the darkMode value of the application */}
      {/* Default value: Dark */}
      <button data-testid="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? "Light" : "Dark"}
      </button>

      {/* Use the UserCard component */}
      <UserCard
        imageURL="https://via.placeholder.com/150"
        name="John Doe"
        title="Software Engineer"
      />

      <br />
      {/* Use the Input component */}
      <Input
        data-testid="input-box"
        type="text"
        size="md"
        variant="outline"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
       {/* Use the Input component with different props */}
  <Input
    data-testid="password-input"
    type="password"
    size="lg"
    variant="filled"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />

  {/* Use the Input component with different props */}
  <Input
    data-testid="email-input"
    type="email"
    size="sm"
    variant="flushed"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />
</div>

);
}

export default App;                        





import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ type = "text", size = "md", variant, value, onChange }) => {
  return (
    <input
      data-testid="input-component"
      type={type}
      className={`input-${size} input-${variant}`}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "filled", "flushed"]).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;










import React from "react";
import PropTypes from "prop-types";
import "./UserCard.css";

const UserCard = ({
  imageURL,
  avatarShape = "round",
  name,
  description = "Testing Description",
  backgroundColor = "red",
  title,
}) => {
  return (
    <div
      data-testid="user-card"
      className={`user-card ${backgroundColor} ${avatarShape}`}
    >
      <img data-testid="user-image" src={imageURL} alt="user" />
      <div>
        <h1 data-testid="user-name">{name}</h1>
        <p data-testid="user-description">{description}</p>
        <p data-testid="user-title">{title}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  avatarShape: PropTypes.oneOf(["round", "square"]),
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
};

export default UserCard;









import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const theme = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(theme);
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
    const htmlTag = document.querySelector("html");
    if (isDarkMode) {
      htmlTag.classList.add("dark-mode");
    } else {
      htmlTag.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
