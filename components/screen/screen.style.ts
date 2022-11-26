import { Platform, StyleSheet, StatusBar } from 'react-native';
import { THEME } from '../../constant/color.constant';

const styles = StyleSheet.create({
    screen: { 
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        position: 'relative'
    },
    bg: {
        position:'absolute', 
        top:0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    bgTop: {
        flex:1,
        backgroundColor: THEME.main
    },
    bgBottom: {
        flex:1,
        backgroundColor: '#fff'
    }
});

export default styles;