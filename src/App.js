import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import Routes from "./Components/Routes";
import { Container, Output, Card } from './MyStyledcomponents/MyStyledcomponents';
import image from "./images/wallpaper4.jpg"



const AppContainer = styled.div`
display: grid;
position:relative;
grid-template-columns: 300px 1fr;
background-image:url(${image});
background-size:cover;
background-position:center;

`



const App = () => {

  return (
    <Router>
      <AppContainer>
        <NavBar Routes={Routes} />
        <Route
          render={({ location }) => {
            return (
              <Switch location={location}>
                <Container>
                  <Output>
                    <Card>
                      {Routes.map(({ name, path, Component, id }) => (
                        <Route
                          key={id}
                          path={path}
                          exact={name === "Home" ? true : false}
                          render={(props) => (
                            <Component {...props} location={location} >
                              {props.children}
                              <p>pokemon</p>
                            </Component>
                          )}
                        />
                      ))}
                    </Card>
                  </Output>
                </Container>
              </Switch>
            );
          }}
        />
      </AppContainer>
    </Router>
  );
}
export default App;
