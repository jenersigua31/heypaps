import { StyleSheet } from 'react-native';
import { BACKGROUND } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        width:'100%',
    },
    containerList: {
        flexDirection: 'row'
    },
    image: {
        backgroundColor: BACKGROUND.light,
        height: 100,
        marginBottom:5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageList: {
        width:80,
        height: 80,
        marginRight: 10
    },
    text: {}
});

export default styles;