import Home from "./pages/Home";
import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Explore from "./pages/Explore";

function App() {
  return (
    <BrowserRouter>
    <Route path="/fine-leaves-home" exact component={Home}/>
    <Switch>
        <div>
      <Route path="/explore" component={Explore} />
      </div>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
