import { StyleSheet } from 'react-native';
import { BACKGROUND } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: { 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        backgroundColor: '#fff'
    },
    store: {
        width:'50%',
        padding: 5
    },
    noResult: {
        width: '100%',
        backgroundColor: BACKGROUND.light, 
        padding: 10,
        marginTop:10
    }
});

export default styles;