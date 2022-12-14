import React, { useState } from 'react';
import { FlatList, View} from 'react-native'; 
import { Spacer, Text } from '../../components'; 
import styles from './list-view.style';

interface iProps {
    id: string,
    data: any[],
    column?: number,
    renderListItem: (itemData: any) => JSX.Element
}

const ListView:React.FC<iProps> = ({
    id,
    data,
    column = 1,
    renderListItem
}) => {
    const [loading, setLoading] = useState(false); 

    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
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
                    <React.Fragment key={item.id}>
                        {renderListItem(item)}
                    </React.Fragment>
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


export default ListView;