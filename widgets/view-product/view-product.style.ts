import { StyleSheet, Dimensions  } from 'react-native';
import { THEME } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        padding: 20
    },
    close: {
        marginBottom: 10
    },
    image: {
        width: Dimensions.get('window').width - 42,
        height: Dimensions.get('window').width - 42,
        backgroundColor: '#eee',
        alignSelf: 'center',
        marginBottom: 10
    },
    info: {
        flex:1
    },
    infoTitle: {
        marginBottom: 10
    },
    quantity: {
        flexDirection: 'row',
        paddingVertical: 20, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    quantityLabel: {
        flex:1,
    },
    quantityValue: {
        borderColor: THEME.main,
        borderWidth:1,
        padding:5,
        paddingHorizontal:35,
        textAlign: 'center',
        marginHorizontal: 10
    }
});

export default styles;