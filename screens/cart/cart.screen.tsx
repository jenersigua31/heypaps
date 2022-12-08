import React from 'react';
import { Button, ScrollView, View} from 'react-native';
import { Checkbox, Icon, Text } from '../../components';
import Screen from '../../components/screen/screen.component';
import { THEME } from '../../constant/color.constant';
import { useAppContext } from '../../context/app.context';
import { Header } from '../../widgets';
import styles from './cart-screen.style';

const CartScreen = () => {

	const {} = useAppContext();

	return (
			<Screen>
				<View style={styles.container}>
					<Header 
						buttonRight={{icon: 'trash-can-outline'}}
						title="Cart"
					/>

					<ScrollView>
						<View style={styles.item}>
							<View style={styles.itemStore}>
								<Checkbox style={styles.checkbox}/>
								<Text  text='Store Name 1' bold fontSize={18}/>
							</View>

							<View style={styles.itemProducts}>
								<View style={styles.itemProductInfo}>
									<View style={styles.itemProductImage}/>
									<Text style={styles.itemProductName} text='Product Name' />
									<Text  text='P 150' bold/>
								</View>
								<View style={styles.quantity}>
									<Icon name={'trash-can-outline'} size={25} style={styles.removeProduct}/>
									<Icon name="minus-circle-outline" size={25} color={THEME.main}/>    
									<Text text='1' fontSize={15} bold style={styles.quantityValue}/>
									<Icon name="plus-circle-outline" size={25} color={THEME.main}/>  
								</View>
							</View>
							<View style={styles.itemProducts}>
								<View style={styles.itemProductInfo}>
									<View style={styles.itemProductImage}/>
									<Text style={styles.itemProductName} text='Product Name' />
									<Text  text='P 150' bold/>
								</View>
								<View style={styles.quantity}>
									<Icon name={'trash-can-outline'} size={25} style={styles.removeProduct}/>
									<Icon name="minus-circle-outline" size={25} color={THEME.main}/>    
									<Text text='1' fontSize={15} bold style={styles.quantityValue}/>
									<Icon name="plus-circle-outline" size={25} color={THEME.main}/>  
								</View>
							</View>
 
							<View style={styles.fees}>
								<View style={styles.fee}>
									<Text  text='Delivery Fee' bold/>
									<Text  text='P 150' bold/>
								</View>
								<View style={styles.fee}>
									<Text  text='Service Fee' bold/>
									<Text  text='P 150' bold/>
								</View>
							</View>
						</View> 
						<View style={styles.item}>
							<View style={styles.itemStore}>
								<Checkbox style={styles.checkbox}/>
								<Text  text='Store Name 1' bold fontSize={18}/>
							</View>

							<View style={styles.itemProducts}>
								<View style={styles.itemProductInfo}>
									<View style={styles.itemProductImage}/>
									<Text style={styles.itemProductName} text='Product Name' />
									<Text  text='P 150' bold/>
								</View>
								<View style={styles.quantity}>
									<Icon name={'trash-can-outline'} size={25} style={styles.removeProduct}/>
									<Icon name="minus-circle-outline" size={25} color={THEME.main}/>    
									<Text text='1' fontSize={15} bold style={styles.quantityValue}/>
									<Icon name="plus-circle-outline" size={25} color={THEME.main}/>  
								</View>
							</View>
							<View style={styles.itemProducts}>
								<View style={styles.itemProductInfo}>
									<View style={styles.itemProductImage}/>
									<Text style={styles.itemProductName} text='Product Name' />
									<Text  text='P 150' bold/>
								</View>
								<View style={styles.quantity}>
									<Icon name={'trash-can-outline'} size={25} style={styles.removeProduct}/>
									<Icon name="minus-circle-outline" size={25} color={THEME.main}/>    
									<Text text='1' fontSize={15} bold style={styles.quantityValue}/>
									<Icon name="plus-circle-outline" size={25} color={THEME.main}/>  
								</View>
							</View>
 
							<View style={styles.fees}>
								<View style={styles.fee}>
									<Text  text='Delivery Fee' bold/>
									<Text  text='P 150' bold/>
								</View>
								<View style={styles.fee}>
									<Text  text='Service Fee' bold/>
									<Text  text='P 150' bold/>
								</View>
							</View>
						</View> 
					</ScrollView>

					<View style={styles.total}>
						<Text text='P 1,750.00' bold fontSize={20}/>
						<Button title='CHECKOUT'/>
					</View>
				</View>
			</Screen>
	);
}


export default CartScreen;