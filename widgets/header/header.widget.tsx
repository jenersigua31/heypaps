import React from 'react';
import { View, TouchableOpacity } from 'react-native'; 
import { Icon, Text } from '../../components';
import styles from './header.style';


interface iActionButton {
    label?: string,
    icon?: string,
    action?: string
}

interface iProps {
    buttonLeft?: iActionButton,
    buttonRight?: iActionButton,
    title?: string,
    buttonActionEvent?: (action?: string) => void
}

const Header:React.FC<iProps> = ({
    title,
    buttonLeft,
    buttonRight,
    buttonActionEvent
}) => {


    const onPressHandler = (btn?: iActionButton) => {
        if(!btn || !buttonActionEvent)return;
        buttonActionEvent(btn.action)
    }

    const button = (btn?: iActionButton) => {
        const icn =  ( btn && btn.icon ) ? 
            <Icon name={btn.icon} size={25}/> :
            <Icon name={'close'} color="transparent"/>

        return (
            <TouchableOpacity onPress={() => onPressHandler(btn)}>
                {icn}
            </TouchableOpacity>
        )
    }

    return (
            <View style={styles.container}>
                {
                    button(buttonLeft)
                }

                {
                    title && <Text text={title} fontSize={20} bold/>
                }

                {
                    button(buttonRight)
                }
            </View>
    );
    }


export default Header;