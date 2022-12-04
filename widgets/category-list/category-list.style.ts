import { StyleSheet } from 'react-native'; 
import { BACKGROUND } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center', 
        paddingVertical:5
    },
    category: {  
        padding: 10,
        paddingHorizontal: 0,
        borderRadius: 5,
        width: 70,

        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity:.4,
        elevation: 3,
    },
    

});

export default styles;