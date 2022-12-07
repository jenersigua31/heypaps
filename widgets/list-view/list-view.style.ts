import { StyleSheet } from 'react-native';
import { BACKGROUND } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: { 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        backgroundColor: BACKGROUND.light,
        paddingVertical:10,
        height: '100%'
    },
    list: {
        height: '100%'
    },
    noResult: {
        width: '100%',
        backgroundColor: BACKGROUND.light, 
        padding: 10,
        marginTop:10
    }
});

export default styles;