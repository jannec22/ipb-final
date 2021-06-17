import { HashRouter, Redirect, Route, Switch } from "react-router-dom"

import BaseLayout from "./components/templates/base_layout/BaseLayout"
import React from "react"
import RequestDetail from "./components/pages/requests_list/RequestDetail"
import RequestList from "./components/pages/requests_list/RequestsList"

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/customer" />
      </Route>

      <Route path="/customer">
        <BaseLayout>
          <Switch>
            <Route exact path="/customer/requests/:id">
              <RequestDetail type="customer" />
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
              <RequestDetail type="employee" />
            </Route>

            <Route exact path="/employee">
              <RequestList type="employee" />
            </Route>
          </Switch>
        </BaseLayout>
      </Route>

      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
)

export default Router
