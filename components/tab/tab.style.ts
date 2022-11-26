import { StyleSheet } from 'react-native';
import { BACKGROUND, TEXT, THEME } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor:'#fff',
        borderBottomColor: BACKGROUND.light,
        borderBottomWidth: 1
    },
    item: {
        flexDirection: 'row',
        flex:1,
        padding:20,
        justifyContent: 'center'
    },
    icon: {
        marginRight: 10
    },
    separator: {
        width: 1,
        height:'30%',
        backgroundColor: BACKGROUND.light
    }
});

export default styles;