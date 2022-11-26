import React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { Text } from '../../components';
import styles from './tab.style';
import Icon from '../icon/icon.component';
import { TEXT, THEME } from '../../constant/color.constant';


export interface iTabItem {
    label: string,
    id: string,
    icon?: string
}

interface iProps {
    items?: iTabItem[],
    value?: string,
    onSelect?: (id: string) => void
}

const Tab:React.FC<iProps> = ({
    items = [],
    value,
    onSelect
}) => {

    const activeColor = (id: string) => {
        const isActive = id == value;
        return isActive ? THEME.main : TEXT.dark
    }

    const onSelectHandler = (id: string) => {
        if(onSelect)onSelect(id);
    }

    return (
            <View style={styles.container}>
                {
                    items.map( (i, indx) => (
                        <React.Fragment key={i.id}>
                            { !!indx && <View style={styles.separator}></View> }
                            <TouchableOpacity onPress={() => onSelectHandler(i.id)} style={styles.item}> 
                                <Icon name={i.icon as any} style={styles.icon} color={activeColor(i.id)}/>
                                <Text text={i.label} color={activeColor(i.id)}/>  
                            </TouchableOpacity>
                        </React.Fragment>
                    ))
                }
            </View>
    );
}


export default Tab;