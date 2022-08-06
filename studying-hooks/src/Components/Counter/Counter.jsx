export function Counter() {
  
  let quantity = 0;

  function upQuantity() {
    quantity++;
    document.querySelector('#counter-box').innerHTML = quantity;
  }

  function downQuantity() {
    quantity--;
    document.querySelector('#counter-box').innerHTML = quantity;
  }

  function resetQuantity() {
    quantity = 0;
    document.querySelector('#counter-box').innerHTML = quantity;
  }

  return (
    <>
      <h1 id="counter-box">{quantity}</h1>
      <button onClick={upQuantity}>Aumentar</button>
      <button onClick={downQuantity}>Diminuir</button>
      <button onClick={resetQuantity}>Resetar</button>
    </>
  )
}
