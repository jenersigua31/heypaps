import { StyleSheet } from 'react-native';
import { BACKGROUND } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    search: {
        paddingHorizontal: 50,
        top: -25,

         
        shadowOffset: { width: 0, height: 1 },
        shadowColor: '#333',
        shadowOpacity: .2,
        elevation: 3,
    },
    carousel:{
        paddingVertical:10
    },

    storeNearLabel:{
        marginHorizontal:10,
    },

    spacer: {

    }
});

export default styles;