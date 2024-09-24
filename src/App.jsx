import { CartProvider } from "./Context/CartContext"
import Shopping from './Pages/Shop/Shopping'
import Cart from './Pages/Cart/Cart'


function App() {
  
  return (
    <>
    <CartProvider>
    <div className="flex">
      <Shopping/>
      <Cart/>
    </div>
    </CartProvider>
    </>
  )
}

export default App
