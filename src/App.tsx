import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ApiClient from "./components/ApiClient/ApiClient";
import Footer from "./components/Footer/Footer";
import NoMatchPage from "./components/NoMatchPage";

const App: React.FC = () => {
  return (
      <BrowserRouter>
      <div className="App" id="App">
        <Header/>
          <main className="main">
            <Switch>
              <Route path={"/"} exact component={Main}/>
              <Route path={"/info"} exact component={ApiClient}/>
              <Route component={NoMatchPage} />
            </Switch>
          </main>
        <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;
