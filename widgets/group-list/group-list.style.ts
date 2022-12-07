import { StyleSheet, Dimensions } from 'react-native';
import { BACKGROUND } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,   
        backgroundColor: BACKGROUND.light  
    },
    scroll: { 
    },
    product: {
        marginRight:15
    },
    labels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 20
    },
    group: {
        marginBottom: 20
    }
});

export default styles;