import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Screen } from '../../types/screen.types';
import { CategoryList } from '../../widgets';

interface iCategory {
    label: string,
    icon: string
}

interface iProps {
    data: iCategory[]
}


const HomeCategories:React.FC<iProps> = ({
    data
}) => {

    const {navigate} = useNavigation();

    const onSelectHandler = (category: iCategory) => {
        navigate(Screen.Category as never, {
            ...category
        } as never)
    }

    return (
        <CategoryList data={data} itemBackground='#eee' onSelect={onSelectHandler}/>
    );
}


export default HomeCategories;