//Context Providers
import { CartContextProvider } from "./cartContext"
import { PurchaseCostContextProvider } from "./costContext"

export function ContextProviders({ children }) {
  return (
    <>
      <CartContextProvider>
        <PurchaseCostContextProvider>
            {children}
        </PurchaseCostContextProvider>
      </CartContextProvider>
    </>
  )
}
