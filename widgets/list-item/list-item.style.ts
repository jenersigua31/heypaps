import { StyleSheet, Dimensions } from 'react-native';
import { BACKGROUND } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: { 
        alignItems:"center"
    },
    containerList: { 
    },
    imageContainer: {
        backgroundColor: '#fff',
        width: (Dimensions.get('window').width / 2) - 40,
        height: (Dimensions.get('window').width / 2) - 40,
        marginBottom:5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,

        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity:.2,
        elevation: 3,
        // padding: 15
    },
    image: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'contain',



        borderRadius: 12,
        overflow:'hidden',
    },
    imageList: {
        width:80,
        height: 80,
        marginRight: 10
    },
    text: {
        marginTop: 5,
        width: (Dimensions.get('window').width / 2) - 40,
    }
});

export default styles;