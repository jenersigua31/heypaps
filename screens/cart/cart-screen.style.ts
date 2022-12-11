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
    fees: {
        padding: 10,
        // paddingLeft: 42,
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
    products: {
        position: 'relative'
    },
    cover: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        opacity:0.85
    },
    cartEmpty: { 
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;