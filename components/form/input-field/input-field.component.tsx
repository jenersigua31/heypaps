import React from 'react';
import { TextInput, View, ViewStyle} from 'react-native';
import Icon from '../../icon/icon.component';
import styles from './input-field.style';


interface iProps {
    icon?: string,
    placeholder?: string,
    style?: ViewStyle
}

const InputField:React.FC<iProps> = ({
    icon,
    placeholder,
    style
}) => {
  return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
            />

            {icon && <Icon name={icon}/>}
        </View>
  );
}


export default InputField;