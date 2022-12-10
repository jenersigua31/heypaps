import { useState } from "react";
import { iProduct } from "../model/product.model";
import { iStore } from "../model/store.model";

export interface iCartItem {
	product:iProduct,
	quantity: number,
    store: iStore
}

// export interface iCartStoreGroup {
// 	[key: number]: {
// 		store: iStore,
// 		items: iCartItem[]
// 	}
// }

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

	const getStoresOnCart = () => {
		const storeIds: number[] = [];
		const stores: iStore[] = [];
		const productIds = Object.keys(cart);
		productIds.forEach((id:string) => {
			const cartItem = cart[+id] as iCartItem;
			const store = cartItem.store;			
			if(!storeIds.includes(store.id)){
				stores.push(store);
				storeIds.push(store.id);
			}
		});
		return stores;
	}

	const getCartItemsByStore = (storeId: number) => {
		const productIds = Object.keys(cart);
		const cartItems: iCartItem[] = [];

		productIds.forEach( (id:string) => {
			const cartItem = cart[+id];
			if(
				storeId === cartItem.store.id &&
				cartItem.quantity > 0
			){
				cartItems.push(cartItem);
			}
		});

		return cartItems;
	}

	const getCartTotalPrice = () => {
		const productIds = Object.keys(cart);
		let total = 0;
		productIds.forEach( (id:string) => {
			const cartItem = cart[+id];
			total += (cartItem.quantity * cartItem.product.price);
		});
		return total;
	}

    return {
        cart,
        isInCart,
        addToCart,
        removeToCart,
        getQuantity,
		getStoresOnCart,
		getCartItemsByStore,
		getCartTotalPrice
    }
}