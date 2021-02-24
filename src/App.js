import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import Routes from "./Components/Routes";


const Container = styled.div`
display: grid;
grid-template-columns: 300px 1fr;

`

const App = () => {

  return (
    <Router>
      <Container>
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
      </Container>
    </Router>
  );
}
export default App;
