import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from '../../components';
import { TEXT, THEME } from '../../constant/color.constant';
import { iProduct } from '../../model/product.model';
import styles from './product-list-item.style';

interface iProps {
    product: iProduct,
    onSelect?: (p: iProduct) => void
}

const ProductListItem:React.FC<iProps> = ({
    product,
    onSelect
}) => {
    const [quantity, setQuantity] = useState(0);


    const addToCart=(action: '+' | '-') => {
        setQuantity(p => {
            if(action === '+')return p+1
            return p-1;
        });
    }

    const onSelectHandler = (p: iProduct) => {
        if(!onSelect)return;
        onSelect(p)
    }

    return (
            <View style={styles.container}>
                <View style={styles.product}>
                    <TouchableOpacity style={styles.imageWrapper} onPress={() => onSelectHandler(product)}>
                        <Image 
                            source={{uri: product.image}} 
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.details} onPress={() => onSelectHandler(product)}>
                        <Text text={product.description} fontSize={13} bold color={TEXT.dark} numberOfLines={2}/>
                        {/* <Text text={product.measurement} fontSize={11} bold color={'#b2b2b2'}/> */}
                        <Text text={`₱ ${product.price}`} fontSize={12} bold color={TEXT.normal}/>
                    </TouchableOpacity>

                    {
                        quantity > 0 &&
                        <View style={styles.cart}>
                            <TouchableOpacity style={styles.icon}  onPress={()=>addToCart('-')}>
                                <Icon name="minus" color={THEME.main}/>   
                            </TouchableOpacity>
                            
                            <Text text={quantity+''} bold color={TEXT.dark} fontSize={14}/> 

                            <TouchableOpacity style={styles.icon}  onPress={()=>addToCart('+')}>
                                <Icon name="plus" color={THEME.main}/>   
                            </TouchableOpacity> 
                        </View>
                    }
                    

                    {
                        quantity == 0 &&
                        <View style={[styles.cart, {justifyContent: 'center'}]}>
                            <TouchableOpacity style={styles.cartAdd} onPress={()=>addToCart('+')}>
                                <Text text='ADD' bold color={TEXT.dark} fontSize={10}/>  
                            </TouchableOpacity>
                        </View>
                    }
                    
                </View>
            </View>
    );
}


export default ProductListItem;