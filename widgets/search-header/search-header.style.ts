import { StyleSheet } from 'react-native';
import { THEME } from '../../constant/color.constant';

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.main,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding:20
    },
    input: {
        flex: 1,
        marginHorizontal: 20,
    },
    title: {
        flex: 1,
        alignSelf: 'center'
    }
});

export default styles;