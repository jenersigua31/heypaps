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
    listItemImageTemplate?: (img: string) => JSX.Element,
    onSelect?: (item: iListItem) => void,
    onAction?:(action: string, data: string) => void
}

const GroupList:React.FC<iProps> = ({
    data,
    listItemImageTemplate,
    onSelect,
    onAction
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
                            // icon={g.labelLeft.icon}  
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
                        {
                            g.list.map(item => (
                                <ListItem  
                                    horizontalView={true}
                                    image={item.image}
                                    style={styles.product}
                                    key={item.id}
                                    imageTemplate={listItemImageTemplate}
                                    display={'grid'} 
                                    title={item.title}
                                    subTitle={item.subTitle}	
                                    onPress={ () => onPressHandler(item)} 
                                /> 
                            ))
                        }
                    </ScrollView>
                </View>
            )) }
        </View>
  );
}


export default GroupList;