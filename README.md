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
const MyComponents = (props) => {
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
import Container from "./Container";

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

### Styling

Inline Styling med Javascript

```jsx

const customStyling = {
    background: "blue",
    width: "200px",
    height: "200px",
    display: " inline-flex",
    justifyContent: "center",
    alignItems: "center"
}

<div style={customStyling}><p>Noget Tekst her</p></div>
```

eller

```jsx
<div
  style={{
    background: "orange",
    width: "200px",
    height: "200px",
    display: " inline-flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <p>Noget Tekst her</p>
</div>
```

### CSS

Brug CSS eller Sass til at style dit projekt

Normal Styling

```jsx
import "./myStyle.css";

<div className="box1">
  <h2>Lorem ipsum dolor sit amet.</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    voluptatum.
  </p>
</div>;
```

Module Styling

```jsx
import style from "./myStyle.module.css";

<div className={style.box1}>
  <h2>Lorem ipsum dolor sit amet.</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    voluptatum.
  </p>
</div>;
```

for at bruge Sass i React.

```jsx
npm install node-sass
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

### styled-components

Styled components til at style components.

```javascript
import styled from 'styled-components'

const Container = styled.div`
    width: 50%;
    background: darkblue;
    margin: 0 auto;
    padding: 10px;
`

const Title = styled.h2`
    text-align:center;
    color:white;
`

const Text = styled.p`
    color:white;
    text-align:center;
`

<Container>
  <Title>Lorem ipsum dolor sit amet.</Title>
  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</Text>
</Container>



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

### APIs

```jsx
const Key = `7c105b21789fdf773ab798b1c284f40e`;
const category = `popular`;
const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${Key}`;

fetch(url)
  .then((response) => response.json())
  .then((result) => console.log(result.results))
  .catch((err) => {
    console.error(err);
  });
```
