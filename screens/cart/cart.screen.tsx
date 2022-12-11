import React, { useState, useEffect } from 'react';
import { Button, ScrollView, View, Image} from 'react-native';
import { Checkbox, Currency, Icon, Text } from '../../components';
import Screen from '../../components/screen/screen.component';
import { THEME } from '../../constant/color.constant';
import { useAppContext } from '../../context/app.context';
import { Header } from '../../widgets';
import styles from './cart-screen.style';
import CartProductComponent from './components/cart-product/cart-product.component';

const CartScreen = () => {

	const [excludedStores, setExcludedStores] = useState<number[]>([])

	const { 
		cart, 
		getStoresOnCart,
		getCartItemsByStore,
		getCartTotalPrice
	} = useAppContext();

	const isExluded = (id: number) => {
		return excludedStores.includes(id);
	}

	const toggleExcludeStore = (isChecked: boolean, storeId: number) => {
		setExcludedStores(prev => { 
			if(isChecked)return prev.filter(id => id != storeId)
			return [
				...prev,
				storeId
			]
		})
	} 
	
	const isEmptyCart = () => {
		return Object.keys(cart).length === 0
	}

	return (
			<Screen>
				<View style={styles.container}>
					<Header 
						buttonRight={{icon: 'trash-can-outline'}}
						title="Cart"
					/>

					{
						!isEmptyCart() && 
						<>
							<ScrollView>
								{ getStoresOnCart().map( store => (
										<View style={styles.item} key={store.id}>
											<View style={styles.itemStore}>
												<Checkbox 
													style={styles.checkbox} 
													checked={!isExluded(store.id)}
													onClick={(checked) => {
														toggleExcludeStore(checked, store.id)
													}}
												/>
												<Text  text={store.name} bold fontSize={18}/>
											</View>

											<View style={styles.products}>
												{
													getCartItemsByStore(store.id).map( ({
														product,
														quantity
													}) => (
														<CartProductComponent 
															key={product.id}
															store={store}
															product={product} 
															quantity={quantity}
														/>
													))
												}

												{
													isExluded(store.id) && 
													<View style={styles.cover}></View>
												}
												
											</View>
											
											
										</View>
								)) } 
							</ScrollView>

							<View style={styles.total}> 
								<Currency
									amount={getCartTotalPrice(excludedStores)}
									bold 
									size={20}
								/>
								<Button title='CHECKOUT'/>
							</View>
						</>
					}

					{
						isEmptyCart() &&
						<View style={styles.cartEmpty}>
							<Icon name="cart-remove" size={120} color={THEME.light}/> 
							<Text text='Your cart is empty' color={THEME.main}/>
						</View>
					}
					
				</View>
			</Screen>
	);
}


export default CartScreen;