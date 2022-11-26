import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    searchContainer: {
        padding: 20
    },
    mapContainer: {
        backgroundColor:'transparent',
        flex:1,
        position: 'relative'
    },
    map: {
        width: '100%',
        height: Dimensions.get('window').height - 170,
        position:'absolute',
        zIndex:1,
        top:0
    },
    input: {  
        zIndex:2,
        marginTop: 10,
        width:'90%',
        alignSelf: 'center'
    }
});

export default styles;