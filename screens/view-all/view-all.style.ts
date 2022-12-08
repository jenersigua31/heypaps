import { StyleSheet } from 'react-native';
import { BACKGROUND, THEME } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red'
    },
    title: {
        paddingHorizontal:20,
        paddingVertical: 10,
        backgroundColor: THEME.lightest
    },
    list: { 
        backgroundColor: BACKGROUND.light,
        flex:1
    }
});

export default styles;