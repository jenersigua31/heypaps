import { StyleSheet } from 'react-native';
import { BACKGROUND } from '../../../../constant/color.constant';

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
        borderColor: BACKGROUND.light,
        borderWidth: 1,
        padding: 3,
        paddingHorizontal: 20,
        marginHorizontal: 10
    },
    removeProduct: {
        marginRight: 10
    }
});

export default styles;