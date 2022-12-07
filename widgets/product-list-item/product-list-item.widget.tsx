import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from '../../components';
import { TEXT, THEME } from '../../constant/color.constant';
import { iProduct } from '../../model/product.model';
import styles from './product-list-item.style';

interface iProps {
    product: iProduct,
    size?: 'normal' | 'small',
    onSelect?: (p: iProduct) => void
}

const ProductListItem:React.FC<iProps> = ({
    product,
    size = 'normal',
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

    const modifier = () => {
        if(size==='normal')return {
            numberOfLines: 2,
            infoTextSize:  13
        }
        return {
            container: styles.containerSmall,
            product: styles.productSmall,
            icon: styles.iconSmall,
            numberOfLines: 1,
            infoTextSize:  10,
        }
    }

    return (
            <View style={[styles.container, modifier().container]} key={product.id}>
                <View style={[styles.product, modifier().product]}>
                    <TouchableOpacity style={styles.imageWrapper} onPress={() => onSelectHandler(product)}>
                        <Image 
                            source={{uri: product.image}} 
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.details} onPress={() => onSelectHandler(product)}>
                        <Text text={product.description} fontSize={modifier().infoTextSize} bold color={TEXT.dark} numberOfLines={modifier().numberOfLines}/>
                        <Text text={`₱ ${product.price}`} fontSize={modifier().infoTextSize} bold color={TEXT.normal}/>
                    </TouchableOpacity>

                    {
                        quantity > 0 &&
                        <View style={styles.cart}>
                            <TouchableOpacity style={[styles.icon, modifier().icon]}  onPress={()=>addToCart('-')}>
                                <Icon name="minus" color={THEME.main} size={12}/>   
                            </TouchableOpacity>
                            
                            <Text text={quantity+''} bold color={TEXT.dark} fontSize={modifier().infoTextSize}/> 

                            <TouchableOpacity style={[styles.icon, modifier().icon]}  onPress={()=>addToCart('+')}>
                                <Icon name="plus" color={THEME.main} size={12}/>   
                            </TouchableOpacity> 
                        </View>
                    }
                    

                    {
                        quantity == 0 &&
                        <View style={[styles.cart, {justifyContent: 'center'}]}>
                            <TouchableOpacity style={styles.cartAdd} onPress={()=>addToCart('+')}>
                                <Text text='ADD' color={TEXT.dark} fontSize={modifier().infoTextSize - 2}/>  
                            </TouchableOpacity>
                        </View>
                    }
                    
                </View>
            </View>
    );
}


export default ProductListItem;