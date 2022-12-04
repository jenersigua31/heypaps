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
        backgroundColor: '#fff',

        borderRadius: 12,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity:.2,
        elevation: 3,
        overflow: 'hidden'
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
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: THEME.main,
        borderRadius: 8, 
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        padding: 5,
        marginBottom: 10
    },
    icon: { 
        backgroundColor: '#fff'
    }

});

export default styles;