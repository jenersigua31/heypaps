import { useState } from "react";
import { iProduct } from "../model/product.model";
import { iStore } from "../model/store.model";

export interface iCartItem {
	// id: number,
	product:iProduct,
	quantity: number,
    store: iStore
}

export const useCart = () => {
    const [cart, setCart] = useState<iCartItem[]>([]); 

	const isInCart = (product: iProduct) => {
		return !!cart[product.id] && cart[product.id].quantity > 0
	}

	const addToCart = (product: iProduct, store: iStore ,quantity?: number) => {
		setCart(currentCart => {
			const isAlreadyInCart = isInCart(product);

			if(!isAlreadyInCart) {
				return {
					...currentCart,
					[product.id]: {
						product,
                        store,
						quantity: !quantity ? 1: quantity                        
					}
				}
			}

			return {
				...currentCart,
				[product.id]: {
                    ...currentCart[product.id],
					quantity: quantity ? quantity : (currentCart[product.id].quantity + 1)
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
					...currentCart[product.id],
					quantity: currentCart[product.id].quantity - 1
				}
			} 
		})
	}

	const getQuantity = (p: iProduct) => {
		if(!isInCart(p))return 0;
		return cart[p.id].quantity
	}

    return {
        cart,
        isInCart,
        addToCart,
        removeToCart,
        getQuantity
    }
}