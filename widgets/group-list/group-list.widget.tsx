import React from 'react';
import { View } from 'react-native';
import { Text } from '../../components';
import { iGroupListItem } from '../../types/list.types';
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
                <React.Fragment key={g.id}>   

                    <View style={styles.labels}>
                        <Text 
                            text={g.labelLeft.text} 
                            icon={g.labelLeft.icon} 
                            style={styles.label}
                            bold
                            fontSize={14}
                        />
                        
                        {
                            g.labelRight && 
                            <Text 
                                text={g.labelRight.text} 
                                icon={g.labelRight.icon} 
                                style={styles.label}
                                bold
                                fontSize={14}
                            />
                        }
                    </View>
                    
                    <List data={g.list} column={2} id={g.id} listItemImageTemplate={listItemImageTemplate}/>
                </React.Fragment>
            )) }
        </View>
  );
}


export default GroupList;