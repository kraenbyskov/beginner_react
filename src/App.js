import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CascadingStyleSheets from "./Components/CascadingStyleSheets/CascadingStyleSheets";
import ConditionalRendering from "./Components/ConditionalRendering";
import CustomComponent from "./Components/CustomComponent";
import FecthAPI from "./Components/FetchAPI";
import HandlingEvents from "./Components/HandlingEvents";
import Home from "./Components/Home";
import Jsx from "./Components/Jsx";
import ListsAndKeys from "./Components/ListsAndKeys";
import NavBar from "./Components/NavBar";
import StyledComponents from "./Components/StyledComponents";
import Styling from "./Components/Styling";
import UseStateHook from "./Components/UseStateHook";


const Routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
    Component: Home,
  },
  {
    id: 6,
    name: "JSX",
    path: "/JSX",
    Component: Jsx,
  },
  {
    id: 7,
    name: "Component",
    path: "/Component",
    Component: CustomComponent,
  },
  {
    id: 8,
    name: "Handling Events",
    path: "/HandlingEvents",
    Component: HandlingEvents,
  },
  {
    id: 9,
    name: "UseState Hook",
    path: "/UseStateHook",
    Component: UseStateHook,
  },
  {
    id: 10,
    name: "Conditional Rendering",
    path: "/ConditionalRendering",
    Component: ConditionalRendering,
  },
  {
    id: 11,
    name: "Lists og Keys",
    path: "/ListsAndKeys",
    Component: ListsAndKeys,
  },
  {
    id: 2,
    name: "FetchApi",
    path: "/FetchApi",
    Component: FecthAPI,
  },
  {
    id: 3,
    name: "Styling",
    path: "/Styling",
    Component: Styling,
  },
  {
    id: 4,
    name: "Cascading Style Sheets",
    path: "/CascadingStyleSheets",
    Component: CascadingStyleSheets,
  },
  {
    id: 5,
    name: "Styled Components",
    path: "/StyledComponents",
    Component: StyledComponents,
  },

]

const App = () => {

  return (
    <Router>
      <div>
        <NavBar Routes={Routes} />
        <Route
          render={({ location }) => {
            return (
              <Switch location={location}>
                {Routes.map(({ name, path, Component, id }) => (
                  <Route
                    key={id}
                    path={path}
                    exact={name === "Home" ? true : false}
                    render={(props) => (
                      <Component {...props} location={location} />
                    )}
                  />
                ))}
              </Switch>
            );
          }}
        />
      </div>
    </Router>
  );
}
export default App;
