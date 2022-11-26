import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { TouchableOpacity, View, ViewStyle} from 'react-native';
 
import styles from './category-list.style';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Text } from '../../components';
import { TEXT } from '../../constant/color.constant';

interface iCategory {
    label: string,
    icon: string
}

interface iProps {
    data: iCategory[],
    itemBackground?: string,
    onSelect?: (category: iCategory) => void
}


const HomeCategories:React.FC<iProps> = ({
    data,
    itemBackground,
    onSelect
}) => {

    const {navigate} = useNavigation();

    const onSelectHandler = (category: iCategory) => {
        if(onSelect)onSelect(category)
    }

    const inlineStyle = (index = 0) => {
        const itemsCount = data.length;
        const is = itemsCount < 5;

        const container = {
            justifyContent: is ? 'center': 'flex-start'
        } as ViewStyle

        const item = {
            backgroundColor: itemBackground || '#fff',
            marginRight: index === (itemsCount - 1) ? 0 : 10,
            width: is ? `22%` : 70
        } as ViewStyle

        return {
            item,
            container
        }
    }

    return (
        <View style={[styles.container, inlineStyle().container]}>
            { data.map( (c,i) => (
                <View style={[styles.category, inlineStyle(i).item]} key={c.label}>
                    <TouchableOpacity onPress={() => onSelectHandler(c)}>
                        <Text
                            color={TEXT.dark}
                            text={c.label} 
                            icon={c.icon} 
                            flow='column-reverse'
                            fontSize={14}
                        />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}


export default HomeCategories;