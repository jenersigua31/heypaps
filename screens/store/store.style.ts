import { StyleSheet } from 'react-native';
import { BACKGROUND, THEME } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    listContainer: {
        flex:1
    },
    info: {
        padding: 10,
        paddingVertical:20,
        borderBottomColor: BACKGROUND.light,
        borderBottomWidth:1, 
    },
    categories: { 
        borderBottomColor: BACKGROUND.light,
        borderBottomWidth:1,
        padding:10, 
    },
    scroll: {
        padding: 10
    },
    products: { 
    }

});

export default styles;