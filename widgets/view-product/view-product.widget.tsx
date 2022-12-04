import React from 'react';
import { Button, Pressable, SafeAreaView, View, Image } from 'react-native';
import { Icon, InputField, Screen, Text } from '../../components';
import { THEME } from '../../constant/color.constant';
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
                    <Text text={'₱ '+product.price} bold/>
                    <Text text='The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.' numberOfLines={3}/>
                </View>

                <View style={styles.quantity}>
                    <Text text='Quantity' fontSize={18} bold style={styles.quantityLabel}/>

                    <Icon name="minus-circle-outline" size={25} color={THEME.main}/>    
                    <Text text='1' fontSize={18} bold style={styles.quantityValue}/>
                    <Icon name="plus-circle-outline" size={25} color={THEME.main}/>    
                </View>

                <Button title='Add to Cart'/>
            </View> 
        </SafeAreaView>
  );
}


export default ViewProduct;