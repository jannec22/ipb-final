import { createContext, useState } from "react"

export const storeContext = createContext()
const { Provider } = storeContext

const StoreContext = ({ children, initial }) => {
  const store = useState(initial)

  return (
    <Provider value={store}>
      {children}
    </Provider>
  )
}

export default StoreContext