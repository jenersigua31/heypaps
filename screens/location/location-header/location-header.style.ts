import { StyleSheet } from 'react-native';
import { THEME } from '../../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        position:'relative',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-evenly',
        height:140, 
        backgroundColor: THEME.main

    },
    back: {
        position:'absolute',
        top: 5,
        left: 0
    },
    text: {
        
    },
    image: {
        width: 120,
        height:80,
        backgroundColor: '#ddd'
    }
});

export default styles;