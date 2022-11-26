import { StyleSheet, Platform } from 'react-native';
import { TEXT, THEME } from './../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        backgroundColor:THEME.main,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical:10,
        paddingTop: 20,
        height:110, 
    },
    back: { 
        left: -15, 
    },
    info:{
        flex:1
    },
    greetings: {
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: '700',
        marginBottom: 5,
        color: TEXT.dark
    },
    address: {
        color: TEXT.dark
    },
    location: {
        flexDirection:'row',
        alignItems: 'center',
    },
    locationIcon: {
        marginLeft: -3,
        marginRight: 5
    }
});

export default styles;