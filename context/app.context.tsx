
import React, { createContext, useContext, useState } from "react";
import { iProduct } from "../model/product.model";

interface iCartItem {
	// id: number,
	product:iProduct,
	quantity: number
}

interface iAppContext {
	cart:{
		[key: number]: iCartItem
	},
	addToCart: (p: iProduct) => void,
	removeToCart: (p: iProduct) => void,
	isInCart: (p: iProduct) => boolean,
	getQuantity: (p: iProduct) => number
}
const AppContext = createContext<iAppContext>({ 
	cart: {},
	addToCart: (p: iProduct) => {},
	removeToCart: (p: iProduct) => {},
	isInCart: (p: iProduct) => false,
	getQuantity: (p: iProduct) => 0
})
interface LoginProviderProps{
	children: React.ReactNode
}
export const AppContextProvider = ({ children }: LoginProviderProps) => {
	const [cart, setCart] = useState<iCartItem[]>([]); 

	const isInCart = (product: iProduct) => {
		return !!cart[product.id] && cart[product.id].quantity > 0
	}

	const addToCart = (product: iProduct) => {
		setCart(currentCart => {
			const isAlreadyInCart = isInCart(product);

			if(!isAlreadyInCart) {
				return {
					...currentCart,
					[product.id]: {
						product,
						quantity:1
					}
				}
			}

			return {
				...currentCart,
				[product.id]: {
					product,
					quantity: currentCart[product.id].quantity + 1
				}
			}  
		})
	}

	const removeToCart = (product: iProduct) => {
		setCart(currentCart => {
			const isAlreadyInCart = isInCart(product);

			if(!isAlreadyInCart)return currentCart;

			return {
				...currentCart,
				[product.id]: {
					product,
					quantity: currentCart[product.id].quantity - 1
				}
			} 
		})
	}

	

	const getQuantity = (p: iProduct) => {
		if(!isInCart(p))return 0;
		return cart[p.id].quantity
	}

	return (
		<AppContext.Provider value={{ 
			cart,
			addToCart, 
			removeToCart,
			isInCart,
			getQuantity
		}}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
    return useContext(AppContext)
}