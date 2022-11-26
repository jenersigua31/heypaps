import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flex:1
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
        marginHorizontal:20,
    },
});

export default styles;