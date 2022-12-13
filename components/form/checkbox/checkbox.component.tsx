import React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native'; 
import { THEME } from '../../../constant/color.constant';
import Icon from '../../icon/icon.component';
import styles from './checkbox.style';


interface iProps {
    checked?: boolean,
    style?: ViewStyle,
    onClick: (checked: boolean) => void
}

const Checkbox:React.FC<iProps> = ({
    checked = false,
    style = {},
    onClick
}) => {

    const icon = () => {
        return !checked ? 'checkbox-blank-outline' : 'checkbox-marked';
    }


    return (
            <TouchableOpacity style={[styles.container, style]} onPress={() => {
                onClick(!checked)
            }}> 
                <Icon name={icon()} size={25} color={THEME.main}/>
            </TouchableOpacity>
    );
}


export default Checkbox;