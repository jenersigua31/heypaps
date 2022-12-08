import { StyleSheet } from 'react-native';
import { THEME } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flex:1
    },
    title: {
        paddingHorizontal:20,
        paddingVertical: 10,
        backgroundColor: THEME.lightest
    },
    search: {
        paddingHorizontal: 50,
        top: -25, 
         
        shadowOffset: { width: 0, height: 1 },
        shadowColor: '#333',
        shadowOpacity: .1,
        elevation: 3,
    },
    carousel:{
        paddingVertical:10
    },
    storeNearLabel:{
        marginHorizontal:10,
    },
});

export default styles;