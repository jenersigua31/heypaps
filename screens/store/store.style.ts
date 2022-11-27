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
    },
    imgTemplateContainer: {
        height:'100%',
        width: '100%',
        display:'flex',
        alignItems:'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        position:'relative',
        backgroundColor: '#fff'
    },
    imgTemplate: {
        position:'absolute',
        top:0,
        left:0,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    buttons: {
        // position:'absolute',
        // top:0,
        // left:0,
        // backgroundColor: '#eee',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        padding: 10
    },
    icon: {
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 15
    }

});

export default styles;