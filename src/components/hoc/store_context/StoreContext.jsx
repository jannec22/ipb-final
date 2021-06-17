import { createContext, useState } from "react"

import { useEffect } from "react"

export const storeContext = createContext()
const { Provider } = storeContext

const StoreContext = ({ children, initial, onChange }) => {
  const store = useState(initial)

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(store[0])
    }
  }, [onChange, store])

  return (
    <Provider value={store}>
      {children}
    </Provider>
  )
}

export default StoreContext