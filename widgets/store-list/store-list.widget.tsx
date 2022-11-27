import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { iStore } from '../../model/store.model';
import { iListItem } from '../../types/list.types';
import { Screen } from '../../types/screen.types';
import List from '../list/list.widget'; 


interface iProps {
    id: string,
    data?: iStore[]
}

const StoreList:React.FC<iProps> = ({
    id,
    data = []
}) => {
    const { navigate } = useNavigation();
 
    const onSelectHandler = (item: iListItem) => {
        const selectedStore = data.find(s => s.id === item.id);
        navigate(Screen.Store as never, {
            ...selectedStore
        } as never)
    }

    const mapItem = (item: iStore) => ({
        id: item.id,
        title: [item.name],
        subTitle: [ `${item.store_in} - ${item.store_out}` ],
        image: item.image
    });

    return (
        <List id={id} data={data.map(mapItem)} column={2} onSelect={onSelectHandler}/>
    );
}


export default StoreList;