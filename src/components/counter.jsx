import { useState } from "react";

const Counter = () => {

    const [value, setvalue] = useState (1) // arranco de uno para que no se marque agregar 0 productos.

    const stocklimit = 15;

    const listAdd = (expr) => {

        if(expr === "+"){
            if(value < stocklimit) {
                setvalue(value + 1)
            }
        }
        else{
            if(value <= stocklimit) {
                setvalue(value - 1)
            }
        }
    }

    return ( <>
    <button onClick={() => listAdd("+")} disabled={value === stocklimit}>+</button>
    <input value={value} />
    <button onClick={() => listAdd("-")} disabled={value === 1}>-</button>
    <button>agregar al carrito</button>
    </> );
}
 
export default Counter;