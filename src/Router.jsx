import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import BaseLayout from "./components/templates/base_layout/BaseLayout";
import React from "react";
import RepairRequestForm from "./components/pages/request_registration_form/RepairRequestForm";
import RequestDetail from "./components/pages/reqests_list/RequestDetail";
import RequestList from "./components/pages/reqests_list/RequestsList";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/customer" />
      </Route>

      <Route path="/customer">
        <BaseLayout>
          <Switch>
            <Route exact path="/customer/requests/:id">
              <RequestDetail />
            </Route>

            <Route exact path="/customer/new">
              <RepairRequestForm />
            </Route>

            <Route exact path="/customer">
              <RequestList type="customer" />
            </Route>
          </Switch>
        </BaseLayout>
      </Route>

      <Route path="/employee">
        <BaseLayout>
          <Switch>
            <Route exact path="/employee/requests/:id">
              <RequestDetail />
            </Route>

            <Route exact path="/employee">
              <RequestList type="employee" />
            </Route>
          </Switch>
        </BaseLayout>
      </Route>

      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
