import React from 'react';
import { View } from 'react-native';
import { Icon, Text } from '../../components';
import styles from './header.style';


interface iActionButton {
    label?: string,
    icon?: string
}

interface iProps {
    buttonLeft?: iActionButton,
    buttonRight?: iActionButton,
    title?: string
}

const Header:React.FC<iProps> = ({
    title,
    buttonLeft,
    buttonRight
}) => {


    const button = (btn?: iActionButton) => {
        return ( btn && btn.icon ) ? 
            <Icon name={btn.icon} size={25}/> :
            <Icon name={'close'} color="transparent"/>
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