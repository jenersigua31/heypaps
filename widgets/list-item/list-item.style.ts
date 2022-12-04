import { StyleSheet, Dimensions } from 'react-native';
import { BACKGROUND } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        width:'100%',
    },
    containerList: {
        flexDirection: 'row'
    },
    image: {
        backgroundColor: '#fff',
        width: (Dimensions.get('window').width / 2) - 10,
        height: (Dimensions.get('window').width / 2) - 10,
        marginBottom:5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageList: {
        marginRight: 10
    },
    text: {}
});

export default styles;