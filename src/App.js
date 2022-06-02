import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import styled from "styled-components";
// import { useDispatch } from "react-redux";



import Home from "./Home";
import Detail from "./Detail";
import Header from "./Header";


function App() {

  return ( 

    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/page" exact component={Detail} />
        </Switch>
      </Container>
    </div>

  );
}

console.log("hi");
const Container = styled.div`
  top : 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  justify-content: center;
`;




export default App;
