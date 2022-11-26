import React from 'react';
import { TextInput, View, ViewStyle} from 'react-native';
import Icon from '../../icon/icon.component';
import styles from './input-field.style';


interface iProps {
    value?: string,
    icon?: string,
    placeholder?: string,
    style?: ViewStyle,

    onChange?: (text: any) => void
}

const InputField:React.FC<iProps> = ({
    value,
    icon,
    placeholder,
    style,
    onChange
}) => {
    const onChangeHandler = (e: any) => {
        if(onChange)onChange(e)
    }

    return (
            <View style={[styles.container, style]}>
                <TextInput
                    value={value}
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeHandler}
                />

                {icon && <Icon name={icon}/>}
            </View>
    );
}


export default InputField;