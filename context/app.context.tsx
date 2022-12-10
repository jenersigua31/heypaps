
import React, { createContext, useContext, useState } from "react";
import { iProduct } from "../model/product.model";
import { iStore } from "../model/store.model";
import { iCartItem, useCart } from "./useCart";


interface iAppContext {
	// CART
	cart:{
		[key: number]: iCartItem
	},
	addToCart: (p: iProduct, store: iStore, quantity?: number) => void,
	removeToCart: (p: iProduct) => void,
	isInCart: (p: iProduct) => boolean,
	getQuantity: (p: iProduct) => number,
	getStoresOnCart: () => iStore[],
	getCartItemsByStore: (storeId: number) => iCartItem[],
	getCartTotalPrice: () => number,

	// STORE
	activeStore?: iStore,
	setActiveStore: (s: iStore) => void
}
const AppContext = createContext<iAppContext>({ 
	// CART
	cart: {},
	addToCart: (p: iProduct,store: iStore, quantity?: number) => {},
	removeToCart: (p: iProduct) => {},
	isInCart: (p: iProduct) => false,
	getQuantity: (p: iProduct) => 0,
	getStoresOnCart: () => [],
	getCartItemsByStore: () => [],
	getCartTotalPrice: () => 0,

	// STORE
	setActiveStore: (s: iStore) => {},
})
interface LoginProviderProps{
	children: React.ReactNode
}
export const AppContextProvider = ({ children }: LoginProviderProps) => {
	const {
		cart,
		addToCart,
		removeToCart,
		isInCart,
		getQuantity,
		getStoresOnCart,
		getCartItemsByStore,
		getCartTotalPrice
	} = useCart();

	const [activeStore, setActiveStore] = useState<iStore | undefined>();

	return (
		<AppContext.Provider value={{ 
			// CART
			cart,
			addToCart, 
			removeToCart,
			isInCart,
			getQuantity, 
			getStoresOnCart,
			getCartItemsByStore,
			getCartTotalPrice,
			
			// STORE
			activeStore,
			setActiveStore
		}}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
    return useContext(AppContext)
}