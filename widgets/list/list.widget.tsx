import React, { useState } from 'react';
import { FlatList, View} from 'react-native'; 
import { Spacer } from '../../components';
import ListItem from '../list-item/list-item.widget';
import styles from './list.style';

interface iListItem { 
    id: string, 
    title: string[], 
    subTitle: string[],
    image?: string
}

interface iProps {
    id: string,
    data: iListItem[],
    column?: number,
    image?: string,
    listItemImageTemplate?: (img: string) => JSX.Element
}

const List:React.FC<iProps> = ({
    id,
    data,
    column = 1,
    image,
    listItemImageTemplate
}) => {
    const [loading, setLoading] = useState(false);

    const display = () => {
        return column === 1 ? 'list' : 'grid';
    }
    return (
        <View style={styles.container}>
            <FlatList 
                listKey={id}
                refreshing={loading}
                onRefresh={() => {
                    setLoading(true);
                    setTimeout(() => {
                        setLoading(false)
                    },2000)
                }}
                ItemSeparatorComponent={Spacer}
                horizontal={false}
                numColumns={column}
                data={data}
                renderItem={({item}) => (
                    <ListItem
                        image={item.image}
                        display={display()}
                        style={styles.store}
                        title={item.title}
                        subTitle={item.subTitle}	
                        imageTemplate={listItemImageTemplate}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View> 
    );
}


export default List;