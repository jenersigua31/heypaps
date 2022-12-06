import React from 'react';
import { View, Text, TextStyle } from 'react-native';
import Icon from '../icon/icon.component';
import styles from './text.style';


type FlowType = 'row'|'row-reverse'|'column'|'column-reverse';


const stylesMapping: {
    [key in FlowType]: any
} = {
    'column': {
        containerFlow: 'column',
        iconMargin: 0,
        textMargin: 3
    },
    'column-reverse': {
        containerFlow: 'column-reverse',
        iconMargin: 3
    },
    'row': {
        containerFlow: 'row',
        // textFlex:1
    },
    'row-reverse': {
        containerFlow: 'row-reverse',
        textFlex:1
    }
}

interface iProps {
    text: string,
    icon?: string,
    fontSize?: number, 
    reverse?: boolean,
    flow?: FlowType,
    color?: string,
    style?: TextStyle,
    bold?: boolean,
    numberOfLines?: number
}

const AppText:React.FC<iProps> = ({
    text,
    icon,
    fontSize = 15,
    flow = 'row',
    color,
    style,
    bold = false,
    numberOfLines = 1
}) => {

    const inlineStyles = () => {
        const {
            containerFlow,
            textFlex,
            iconMargin,
            textMargin
        } = stylesMapping[flow];

        const container = {
            flexDirection: containerFlow,
        } as TextStyle;
 
        const text = {
            fontSize,
            flex: textFlex,
            marginBottom: textMargin,
            color,
            fontWeight: bold ? '700' : '300',
            width: '100%'
        } as TextStyle;

        const icon = {
            marginBottom: iconMargin
        } as TextStyle;

        return {
            container,
            text,
            icon
        }
    }

    const iconSize = () => {
        return fontSize + (fontSize * .35)
    }

    return (
            <View style={[styles.container, inlineStyles().container, style]}>
                
                <Text style={[styles.text, inlineStyles().text]} numberOfLines={numberOfLines}>
                    {text}
                </Text>

                { icon && 
                    <Icon 
                        color={color}
                        name={icon as any} 
                        size={iconSize()}
                        style={[styles.icon, inlineStyles().icon]}
                    />
                }
            </View>
    );
}


export default AppText;