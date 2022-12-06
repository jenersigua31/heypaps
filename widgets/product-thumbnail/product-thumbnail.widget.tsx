import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from '../../components';
import { THEME } from '../../constant/color.constant';
import styles from './product-thumbnail.style';


interface iProps {
    id: number,
    image: string,
    onSelect?: (productId: number) => void
}

const ProductThumbnail:React.FC<iProps> = ({
    id,
    image,
    onSelect
}) => {
  return (
        <TouchableOpacity 
            onPress={() => onSelect && onSelect(id)}
            style={[
                styles.container,
                // Note: remove this when product is already in the cart
                {
                    justifyContent: 'flex-end',
                }
            ]}
        > 
            { image && (
                <View style={styles.imgWrapper}>
                    <Image
                        style={styles.img}
                        source={{uri: image}}
                    />
                </View>
            )}
            <View style={[
                styles.buttons,
                // Note: remove this when product is already in the cart
                {
                    width: 33,
                    marginRight: 10
                }
            ]}> 
                {/* // Note: uncomment this when product is already in the cart */}
                {/* <Icon name="minus-circle-outline" style={styles.icon} color={THEME.main}/>  
                <Text text='1' bold color={TEXT.dark} fontSize={12}/>   */}
                <Icon name="plus-circle-outline" style={styles.icon} color={THEME.main}/>                      
            </View>
        </TouchableOpacity>
  );
}


export default ProductThumbnail;