import React, { useState } from 'react';
import { Button, Pressable, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'; 
import { Currency, Icon, InputField, Screen, Text } from '../../components';
import { THEME } from '../../constant/color.constant';
import { useAppContext } from '../../context/app.context';
import { iProduct } from '../../model/product.model';
import styles from './view-product.style';


interface iProps {
    product: iProduct,
    onClose: () => void
}

const ViewProduct:React.FC<iProps> = ({
    product,
    onClose
}) => {
    
    const { addToCart, isInCart, getQuantity, activeStore } = useAppContext();

    const [quantity, setQuantity] = useState( isInCart(product) ?  getQuantity(product) : 1);


    const updateQuantity = (action: '+' | '-') => {
        setQuantity( current => {
            const add = current + 1;
            let minus = current - 1;
            if(minus<1)minus = 1;
            return action === '+' ? add : minus;            
        })
    }

    const toCart = () => {
        if(!activeStore)return;
        addToCart(product,activeStore, quantity);
        onClose();
    }

    return (
            <SafeAreaView> 
                <View style={styles.container}>
                    <Pressable onPress={onClose}>
                        <Icon name="close" size={30} style={styles.close}/>
                    </Pressable>

                    <View style={styles.imageContainer}>
                        <Image 
                            style={styles.image}
                            source={{uri: product.image}}
                        />
                    </View>

                    <View style={styles.info}>
                        <Text text={product.description} fontSize={20} bold style={styles.infoTitle}/>
                        <Text text={product.measurement} /> 
                        <Currency
                            amount={product.price}
                            bold
                        />
                        <Text text={product.content} numberOfLines={3}/>
                    </View>

                    <View style={styles.quantity}>
                        <Text text='Quantity' fontSize={16} bold style={styles.quantityLabel}/>

                        <TouchableOpacity onPress={() => updateQuantity('-')}> 
                            <Icon name="minus" size={24} color={THEME.main} style={styles.toCart}/> 
                        </TouchableOpacity>
                           
                        <Text text={quantity+''} fontSize={16} bold style={styles.quantityValue}/>

                        <TouchableOpacity onPress={() => updateQuantity('+')}>
                            <Icon name="plus" size={24} color={THEME.main} style={styles.toCart}/>    
                        </TouchableOpacity>
                    </View>

                    <Button title={isInCart(product) ? 'Update Cart': 'Add to Cart'} onPress={toCart}/>
                </View> 
            </SafeAreaView>
    );
}


export default ViewProduct;