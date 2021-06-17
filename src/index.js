import "./index.scss"

import DamageReport from "./model/DamageReport"
import Device from "./model/Device"
import React from "react"
import ReactDOM from "react-dom"
import RepairRequest from "./model/RepairRequest"
import Router from "./Router"
import StoreContext from "./components/hoc/store_context/StoreContext"
import User from "./model/User"
import Warranty from "./model/Warranty"

const first = new RepairRequest()

first.id = "first"
first.status = RepairRequest.Status.queue
first.user = new User()
first.user.username = "someone"
first.damageReport = new DamageReport()
first.device = new Device()
first.device.warranty = new Warranty()
first.approxCost = 0
first.actualCost = 0

const strFromLocalStorage = localStorage.getItem("state")
let initial = {
  user: new User(),
  requests: {
    first,
  },
}

if (strFromLocalStorage) {
  try {
    initial = JSON.parse(strFromLocalStorage)
  } catch { }
}

ReactDOM.render(
  <React.StrictMode>
    <StoreContext
      initial={initial}
      onChange={state => localStorage.setItem("state", JSON.stringify(state))}
    >
      <Router />
    </StoreContext>
  </React.StrictMode>,
  document.getElementById("root")
)
