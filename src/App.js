import React from 'react';
import TodoContextProvider from "./components/todo";

import Login from "./components/Auth/login";
import AuthContextProvider from "./components/Auth/auth";
import {BrowserRouter, Route} from "react-router-dom";
import All from "./components/TodoWork/allinone";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <TodoContextProvider>
          <AuthContextProvider>
              <Route exact path ='/' component={Login} />
            <Route path ='/all' component={All} />
          </AuthContextProvider>
        </TodoContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
