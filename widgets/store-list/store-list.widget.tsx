import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { iListItem } from '../../types/list.types';
import { Screen } from '../../types/screen.types';
import List from '../list/list.widget'; 


interface iProps {
    id: string,
    data?: iListItem[]
}

const StoreList:React.FC<iProps> = ({
    id,
    data = []
}) => {
    const { navigate } = useNavigation();
 

    const onSelectHandler = (item: iListItem) => {
        navigate(Screen.Store as never)
    }

    return (
        <List id={id} data={data} column={2} onSelect={onSelectHandler}/>
    );
}


export default StoreList;