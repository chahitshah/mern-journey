import React, { createContext, useState } from 'react'
export const detaildatacontext = createContext();


const CartContext = (props) => {

    

    const [cart, setcart] = useState([]);
  return (
    <div>
        
        <detaildatacontext.Provider value={[cart, setcart]}>
            {props.children}
            
        </detaildatacontext.Provider>
    </div>
  )
}

export default CartContext
