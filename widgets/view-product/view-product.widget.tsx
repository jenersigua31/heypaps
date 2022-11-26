import React from 'react';
import { Button, Pressable, SafeAreaView, View } from 'react-native';
import { Icon, InputField, Screen, Text } from '../../components';
import { THEME } from '../../constant/color.constant';
import styles from './view-product.style';


interface iProps {
    onClose: () => void
}

const ViewProduct:React.FC<iProps> = ({
    onClose
}) => {
  return (
        <SafeAreaView> 
            <View style={styles.container}>
                <Pressable onPress={onClose}>
                    <Icon name="close" size={30} style={styles.close}/>
                </Pressable>

                <View style={styles.image}></View>

                <View style={styles.info}>
                    <Text text='Product Title here' fontSize={20} bold style={styles.infoTitle}/>
                    <Text text='500 g' bold/>
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