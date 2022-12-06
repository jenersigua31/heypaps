import React, { useState } from 'react';
import { FlatList, View} from 'react-native'; 
import { Spacer, Text } from '../../components';
import { iProductThumbnail } from '../../types/product-thumbnail.interface';
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
    listItemImageTemplate?: (data: iProductThumbnail) => JSX.Element,

    onSelect?: (data: iListItem) => void
}

const List:React.FC<iProps> = ({
    id,
    data,
    column = 1,
    image,
    listItemImageTemplate,
    onSelect
}) => {
    const [loading, setLoading] = useState(false);

    const display = () => {
        return column === 1 ? 'list' : 'grid';
    }

    const finalData = () => {
        // Note: append placeholder when one item on list
        // fix layout issue on 2 columns then 1 item
        const isAppendPlaceHolder = (data || []).length === 1 && column > 1;
        if(!isAppendPlaceHolder)return data; 
        return [ ...data, {
            placeHolder:true
        } as any ];
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
                data={finalData()}
                renderItem={({item}) => (
                    <ListItem
                        id={item.id}
                        placeHolder={item.placeHolder}
                        onPress={() => onSelect && onSelect(item)}
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

            {
                (data || []).length === 0 &&
                <Text text='No results found!' style={styles.noResult}/>
            }
        </View> 
    );
}


export default List;