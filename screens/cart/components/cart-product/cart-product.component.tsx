import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native'; 
import { Currency, Icon, Text } from '../../../../components';
import { TEXT, THEME } from '../../../../constant/color.constant';
import { useAppContext } from '../../../../context/app.context';
import { iProduct } from '../../../../model/product.model';
import { iStore } from '../../../../model/store.model';
import styles from './cart-product.style';


interface iProps {
    store: iStore,
    product: iProduct,
    quantity: number
}

const CartProductComponent:React.FC<iProps> = ({
    store,
    product,
    quantity
}) => {
    const { addToCart, removeToCart, deleteCartItem} = useAppContext();

    const isDisableMinusQuantity = () => quantity === 1;

    const updateCart=(action: '+' | '-') => {
        if(action==='+')return addToCart(product, store); 
        if(isDisableMinusQuantity())return;
        removeToCart(product);
    }

    const removeIcon = () => {
        return quantity > 1 ? '' : 'trash-can-outline';
    }

    const removeItem = () => {
        deleteCartItem(product.id);
    }

    return (
        <View style={styles.itemProducts} key={product.id}>
            <View style={styles.itemProductInfo}>
                <Image 
                    style={styles.itemProductImage} 
                    source={{uri: product.image}}
                />
                <Text style={styles.itemProductName} text={product.description} /> 
                <Currency
                    amount={product.price}
                    
                    size={14}
                />
            </View>
            <View style={styles.quantity}> 
                
                <TouchableOpacity onPress={removeItem}>
                    <Icon name={'trash-can'} size={20} style={styles.removeProduct} color={TEXT.normal}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>updateCart('-')}>
                    <Icon 
                        style={{
                            ...styles.updateQuantity,
                            ...(
                                isDisableMinusQuantity() ? 
                                styles.updateQuantityDisabled : {}
                            )
                        }}
                        name='minus' size={20} color={THEME.main}/>    
                </TouchableOpacity> 

                <Text text={quantity+''} fontSize={14} bold style={styles.quantityValue}/>
                
                <TouchableOpacity onPress={()=>updateCart('+')}>
                    <Icon name="plus" size={20} color={THEME.main} style={styles.updateQuantity}/> 
                </TouchableOpacity> 

            </View>
        </View>
    );
}


export default CartProductComponent;