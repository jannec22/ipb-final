import "./index.scss"

import React from 'react'
import ReactDOM from 'react-dom'
import Router from "./Router"
import StoreContext from "./components/hoc/store_context/StoreContext"

ReactDOM.render(
  <React.StrictMode>
    <StoreContext>
      <Router />
    </StoreContext>
  </React.StrictMode>,
  document.getElementById('root')
)
