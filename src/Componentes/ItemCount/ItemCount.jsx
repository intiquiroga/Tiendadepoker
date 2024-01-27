import React, { useState } from 'react';

export function itemCount({stock,initial,onAdd}) {

  const [count, setCount] = useState(0);
  count;
    if (count > 100 ) {
        console.log ("Supero el monto maximo de items")
    }
    else (console.log (setCount))   

  return (
    <div>
      <p> Cantidad  {count} Productos</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}