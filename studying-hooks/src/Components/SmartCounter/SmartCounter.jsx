import { useState, useEffect } from "react";


export function SmartCounter() {
  
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    document.getElementById('moeda').innerHTML = 2.00 * quantity
  }, [quantity])

  function upQuantity() {
    setQuantity(quantity + 1)
  }

  function downQuantity() {
    setQuantity(quantity - 1)
  }

  function resetQuantity() {
    setQuantity(0)
  }

  return (
    <>
      <h1>{quantity}</h1>
      <button onClick={upQuantity}>Aumetar</button>
      <button onClick={downQuantity}>Diminuir</button>
      <button onClick={resetQuantity}>Resetar</button>
      <button id='moeda'>12,00</button>
    </>
  )
}
