import React from "react";
import { Switch } from "react-router-dom";
import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Header from "../components/atoms/layout/Header";
import Top from "../components/pages/Top";
import Users from "../components/pages/Users";
import DefaultLayout from "../components/templates/DefaultLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <Header />
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
