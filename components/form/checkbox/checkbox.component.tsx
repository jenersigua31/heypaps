import React from 'react';
import { View, ViewStyle } from 'react-native'; 
import Icon from '../../icon/icon.component';
import styles from './checkbox.style';


interface iProps {
    checked?: boolean,
    style?: ViewStyle
}

const Checkbox:React.FC<iProps> = ({
    checked = true,
    style = {}
}) => {

    const icon = () => {
        return !checked ? 'checkbox-blank-outline' : 'checkbox-outline';
    }


    return (
            <View style={[styles.container, style]}> 
                <Icon name={icon()} size={25}/>
            </View>
    );
}


export default Checkbox;