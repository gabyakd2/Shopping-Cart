import React from 'react'
import { CartProvider } from './Context/cartContext'
import Home from './pages/Home'

function App() {

  return (
    <CartProvider>
      <Home />
    </CartProvider>
  )
}

export default App
