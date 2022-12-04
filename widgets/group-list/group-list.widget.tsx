import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '../../components';
import { THEME } from '../../constant/color.constant';
import { iGroupListItem } from '../../types/list.types';
import ListItem from '../list-item/list-item.widget';
import List from '../list/list.widget';
import styles from './group-list.style';


interface iProps {
    data: iGroupListItem[],
    listItemImageTemplate?: (img: string) => JSX.Element
}

const GroupList:React.FC<iProps> = ({
    data,
    listItemImageTemplate
}) => {
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
                            <Text 
                                text={g.labelRight.text} 
                                icon={g.labelRight.icon}  
                                bold
                                fontSize={14}
                                color={THEME.main}
                            />
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