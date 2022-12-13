import { StyleSheet } from 'react-native';
import { BACKGROUND, THEME } from '../../../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        
    },
    itemProducts: {
        borderTopColor: BACKGROUND.light,
        borderTopWidth: 1
    },
    itemProductInfo: {
        flexDirection: 'row',
        padding: 10,
        // paddingLeft: 42,
    },
    itemProductImage: {
        width: 40,
        height: 40,
        marginRight: 10,
        resizeMode: 'contain'
    },
    itemProductName: {
        flex: 1
    },
    quantity: {
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    quantityValue: {
        borderColor: THEME.light,
        borderWidth: 1,
        padding: 3,
        paddingHorizontal: 18,
        marginHorizontal: 10,
        borderRadius: 3
    },
    removeProduct: {
        marginRight: 10
    },
    updateQuantity: {
        borderWidth:1,
        borderColor: THEME.main,
        borderRadius:3
    },
    updateQuantityDisabled: {
        opacity:.3
    }
});

export default styles;