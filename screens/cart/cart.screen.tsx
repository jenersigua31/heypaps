import React from 'react';
import { Button, ScrollView, View, Image} from 'react-native';
import { Checkbox, Icon, Text } from '../../components';
import Screen from '../../components/screen/screen.component';
import { THEME } from '../../constant/color.constant';
import { useAppContext } from '../../context/app.context';
import { Header } from '../../widgets';
import styles from './cart-screen.style';

const CartScreen = () => {

	const { 
		cart, 
		getStoresOnCart,
		getCartItemsByStore,
		getCartTotalPrice
	} = useAppContext();
	 
	return (
			<Screen>
				<View style={styles.container}>
					<Header 
						buttonRight={{icon: 'trash-can-outline'}}
						title="Cart"
					/>

					<ScrollView>
						{ getStoresOnCart().map( store => (
								<View style={styles.item} key={store.id}>
									<View style={styles.itemStore}>
										<Checkbox style={styles.checkbox}/>
										<Text  text={store.name} bold fontSize={18}/>
									</View>

									{
										getCartItemsByStore(store.id).map( ({
											product,
											quantity
										}) => (
											<View style={styles.itemProducts} key={product.id}>
												<View style={styles.itemProductInfo}>
													<Image 
														style={styles.itemProductImage} 
														source={{uri: product.image}}
													/>
													<Text style={styles.itemProductName} text={product.description} />
													<Text  text={`₱ ${product.price}`} bold/>
												</View>
												<View style={styles.quantity}>
													<Icon name={'trash-can-outline'} size={25} style={styles.removeProduct}/>
													<Icon name="minus-circle-outline" size={25} color={THEME.main}/>    
													<Text text={quantity+''} fontSize={15} bold style={styles.quantityValue}/>
													<Icon name="plus-circle-outline" size={25} color={THEME.main}/>  
												</View>
											</View>
										))
									}
									
								</View>
						)) } 
					</ScrollView>

					<View style={styles.total}>
						<Text text={`₱ ${getCartTotalPrice()}`} bold fontSize={20}/>
						<Button title='CHECKOUT'/>
					</View>
				</View>
			</Screen>
	);
}


export default CartScreen;