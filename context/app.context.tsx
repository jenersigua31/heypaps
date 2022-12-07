
import React, { createContext, useContext, useState } from "react";
import { iProduct } from "../model/product.model";

interface iCartItem {
	id: number,
	product:iProduct,
	quantity: number
}
interface iAppContext {
	cart:iCartItem[],
	addToCart: (p: iProduct) => void
}
const AppContext = createContext<iAppContext>({ 
	cart: [],
	addToCart: (p: iProduct) => {}
})
interface LoginProviderProps{
	children: React.ReactNode
}
export const AppContextProvider = ({ children }: LoginProviderProps) => {
	const [cart, setCart] = useState<iCartItem[]>([]); 

	const addToCart = (product: iProduct) => {
		setCart(p => {
			return [
				...p,
				{
					id:product.id,
					product: product,
					quantity: 1
				}
			]
		})
	}

	return (
	  <AppContext.Provider value={{ cart,addToCart }}>
		{children}
	  </AppContext.Provider>
	);
};

export const useAppContext = () => {
    return useContext(AppContext)
}