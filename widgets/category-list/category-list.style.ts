import { StyleSheet } from 'react-native'; 
import { BACKGROUND, THEME } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center', 
        paddingVertical:5, 
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
    categoryTextOnly: {  
        width: 'auto',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: THEME.main,
        borderRadius:20,
        elevation: 0,
        shadowOpacity: 0
    }

});

export default styles;