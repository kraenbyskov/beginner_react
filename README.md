## 😍 React for første gang 😍

### Start et ny project 💾

```
npx create-react-app my-app
cd my-app
npm start
```

### Hvad er JSX ?

```js
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, 🌐!"
);
```

```JSX
const element = (
  <h1 className="greeting">
    Hello, 🌐!
  </h1>
);
```

### Component

```JSX
const MyComponenents = (props) => {
    const Emoji = props.Emoji;
    return(
        <h1>Hello {Emoji}</h1>
    )
}

const App = () => {
    return (
        <>
            <MyComponents Name={"😃"} />
            <MyComponents Name={"😍"} />
        </>
    )
}

```

### Handling Events

Forkert

```jsx
<button onclick="activateLasers()">👽</button>
```

Rigtig

```jsx
<button onClick={() => activateLasers()}>👽</button>
```

### UseState

```js
const [state, setstate] = useState(0);
```

```jsx
function App() {
  const [state, setstate] = useState(0);
  return (
    <>
      <button onClick={() => setstate(state + 1)}>Clicker</button>
      <p>{state}</p>
    </>
  );
}
```

### Conditional Rendering

```jsx
state ? <div>💚</div> : <div>💜 </div>;
```

conditional operator – condition ? true : false.

```jsx
function App() {
  const [state, setstate] = useState(false);
  return (
    <div>
      {state ? <div>💚</div> : <div>💜 </div>}
      <button onClick={() => setstate(!state)}>Skift hjerte</button>
    </div>
  );
}
```

logical && operator

```js
state && <div>💚</div>;
```

### Lists and Keys

```js
Emoji.map((emoji) => <li>{emoji}</li>);
```

Lists : map

```js
function App() {
  const Emoji = ["😄", "😃", "😳", "😜", "😴"];
  return (
    <div>
      {Emoji.map((emoji) => (
        <li>{emoji}</li>
      ))}
    </div>
  );
}
```

Keys 🔑

```jsx
{
  Emoji.map((emoji) => <li key={emoji.toString()}>{emoji}</li>);
}
```

### Forms 📨

```js
<input onChange={(e) => setstate(e.target.value)} type="text" value={state} />
```

```jsx
function App() {
  const [state, setstate] = useState();
  return (
    <>
      <input
        onChange={(e) => setstate(e.target.value)}
        type="text"
        value={state}
      />
      <button>Submit</button>
      <p>{state}</p>
    </>
  );
}
```

### UseEffect

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

```js
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
```

### 🚦 React Router Dom 🚦

```jsx
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
```

### Destructuring

```js
const { firstName, lastName, age = "No Age", male } = data;
```

```jsx
const Person = ({ data }) => {
  const { firstName, lastName, age = "No Age", male } = data;
  return (
    <p>
      Name : {firstName} {lastName} Age: {age} Gender -
      {male ? "Male" : "Female"}
    </p>
  );
};

function App() {
  const persons = [
    { firstName: "John", lastName: "Snow", age: 22, male: true },
    { firstName: "Tony", lastName: "Stark", male: true },
    { firstName: "Bruce", lastName: "Banner", age: 20, male: false },
  ];
  return (
    <>
      {persons.map((data) => (
        <Person data={data} />
      ))}
    </>
  );
}
```

### Containment

```jsx
const Container = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.background,
        padding: "20px",
        margin: "20px",
      }}
    >
      {props.children}
    </div>
  );
};

function App() {
  return (
    <>
      <Container background={"orange"}>
        <h1>Hello world</h1>

        <p>Lorem ipsum dolor sit amet consectetur</p>
      </Container>
    </>
  );
}
```

### Code-Splitting

Container.js File

```jsx
const Container = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.background,
        padding: "20px",
        margin: "20px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
```

Import Container ind i App.js filen

```jsx
import Container from "./Container.js";

function App() {
  return (
    <>
      <Container background={"orange"}>
        <h1>Hello world</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta a
          et id expedita repudiandae distinctio aut ullam, facilis numquam!
        </p>
      </Container>
    </>
  );
}
```

### APIs

```jsx

```

### styling

### CSS / SASS

### styled-components
