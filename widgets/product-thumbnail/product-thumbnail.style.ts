import { StyleSheet } from 'react-native';
import { THEME } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width: '100%',
        display:'flex',
        alignItems:'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        position:'relative',
        backgroundColor: '#fff',

        borderRadius: 12,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity:.2,
        elevation: 3,
        overflow: 'hidden',
    },
    imgWrapper: {
        position:'absolute',
        top:0,
        left:0,
        width: '100%',
        height: '100%',
        padding: 15
    },
    buttons: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: THEME.main,
        borderRadius: 8, 
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        padding: 5,
        marginBottom: 10
    },
    icon: { 
        backgroundColor: '#fff'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default styles;