import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from "react-router-dom"

import BaseLayout from "./components/templates/base_layout/BaseLayout"
import Dashboard from "./components/pages/dashboard/Dashboard"
import React from "react"
import RepairRequestForm from "./components/pages/request_registration_form/RepairRequestForm"
import RequestList from "./components/pages/reqests_list/RequestsList"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <BaseLayout>
          <Dashboard />
        </BaseLayout>
      </Route>

      <Route path="/customer">
        <BaseLayout>
          <Switch>
            <Route exact path="/customer/requests">
              <RepairRequestForm />
            </Route>
            
            <Route exact path="/customer">
              <RequestList customer />
            </Route>
          </Switch>
        </BaseLayout>
      </Route>

      <Route path="/employee">
        <BaseLayout>
          <Switch>
            <Route exact path="/requests">
              <RequestList employee />
            </Route>
          </Switch>
        </BaseLayout>
      </Route>

      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
)


export default Router