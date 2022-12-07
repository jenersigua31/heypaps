import React from 'react';
import { View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../../components';
import { THEME } from '../../constant/color.constant';
import { iGroupListItem, iListItem } from '../../types/list.types';
import ListItem from '../list-item/list-item.widget';
import List from '../list/list.widget';
import styles from './group-list.style';


interface iProps {
    data: iGroupListItem[],
    listItemImageTemplate?: (data: {image?: string, id: number}) => JSX.Element,
    onSelect?: (item: iListItem) => void,
    onAction?:(action: string, data: string) => void,
    renderListItem: (itemData: any) => JSX.Element
}

const GroupList:React.FC<iProps> = ({
    data,
    listItemImageTemplate,
    onSelect,
    onAction,
    renderListItem
}) => {

    const onPressHandler = (item: iListItem) => {
        if(!onSelect)return;
        onSelect(item);
    }

    const onActionHandler = (action?: string, data?: string) => {
        if(!onAction || !action)return;
        onAction(action,data || '')
    }

  return (
        <View style={styles.container}>
            { data.map( g => (
                <View style={styles.group} key={g.id}>   

                    <View style={styles.labels}>
                        <Text 
                            text={g.labelLeft.text}  
                            bold
                            fontSize={15}
                        />
                        
                        {
                            g.labelRight && 
                            <TouchableOpacity onPress={() => onActionHandler(g.labelRight?.text, g.labelLeft?.text)}>
                                <Text 
                                    text={g.labelRight.text} 
                                    icon={g.labelRight.icon}  
                                    bold
                                    fontSize={14}
                                    color={THEME.main}
                                />
                            </TouchableOpacity>
                        }
                    </View>
                    
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.scroll}
                    >
                        { g.list.map(item => ( 
                            renderListItem(item)
                        )) }
                    </ScrollView>
                </View>
            )) }
        </View>
  );
}


export default GroupList;