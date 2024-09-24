import { createContext, useContext, useState } from "react";
import allData from "../Data/Data";

function getCartItem() {
    let cartItem = {}
    for (let i = 1; i < allData.length + 1; i++) {
        cartItem[i] = 0
    }
    return cartItem;
}

export const newContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [cartValue, setcartValue] = useState(getCartItem)

    

    const addToCart = (id) => {
        setcartValue((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    }
    const removeFromCart = (id) => {
        setcartValue((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    }

    const clearCart = (id)=>{
        setcartValue((prev)=>({ ...prev , [id]: prev[id] - prev[id] }))
    }

    const clear = ()=>{
        setcartValue(getCartItem)
    }

    const totalAmount = ()=>{
        let Amount = 0;
        for (const key in cartValue) {
            if (cartValue[key] > 0) {
                let numberOf = allData.find((items) => {return(
                        items.id === Number(key)
                    )
                })
                Amount +=  cartValue[key] * numberOf.price
            }
        }
        return Amount;
    }

    const Value = {
        cartValue, 
        addToCart , 
        removeFromCart , 
        clearCart ,
        clear,
        totalAmount
    }
    return (
        <newContext.Provider value={Value}>
            {children}
        </newContext.Provider>
    )
}

export function useCart() {
    return (
        useContext(newContext)
    )
}