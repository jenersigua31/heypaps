import { StyleSheet, Dimensions } from 'react-native';
import { BACKGROUND, THEME } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    item: {
        marginBottom: 10
    },
    checkbox: {
        marginRight:5
    },
    itemStore: {
        flexDirection: 'row',
        padding:10,
        borderColor: BACKGROUND.light,
        borderWidth: 1
    },
    itemProducts: {
        borderTopColor: BACKGROUND.light,
        borderTopWidth: 1
    },
    itemProduct: {

    },
    itemProductName: {
        flex: 1
    },
    itemProductInfo: {
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 42,
    },
    itemProductImage: {
        width: 40,
        height: 40,
        backgroundColor: '#ddd',
        marginRight: 10
    },
    fees: {
        padding: 10,
        paddingLeft: 42,
        borderTopColor: BACKGROUND.light,
        borderTopWidth: 1
    },
    fee: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 2
        
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderTopColor: BACKGROUND.light,
        borderTopWidth:1
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