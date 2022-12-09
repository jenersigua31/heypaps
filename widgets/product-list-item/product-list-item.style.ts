import { StyleSheet } from 'react-native';
import { THEME } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        width: '50%',
        paddingHorizontal: 20,
        marginBottom: 2
    },
    containerSmall: {
        width: 150,
        paddingHorizontal: 10,
    },
    product: {
        backgroundColor: '#fff',
        borderRadius: 10,
        // overflow:'hidden',
        // padding: 10,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity:.1,
        elevation: 3,

        display:'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height:250,
    },
    productSmall: {
        height:200,
        marginVertical: 3
    },
    imageWrapper: {
        width:'100%',  
        flex: 1,
        marginVertical:10
    },
    image: {
        width:'100%',
        height: '100%',
        resizeMode: 'contain', 
    },
    details: {
        backgroundColor:'#fff',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    cart: { 
        width:'100%',
        height:45,
        padding: 10, 
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    cartAdd: {
        backgroundColor: THEME.light,
        width: '50%',
        borderRadius:12,
        alignItems: 'center',
        paddingVertical:5,
        alignSelf: 'center',
        margin:'auto'
    },
    icon: { 
        backgroundColor: THEME.lightest,
        borderRadius: 50,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconSmall: {
        width: 25,
    }
});

export default styles;