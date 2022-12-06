import React, { useState } from 'react';
import { View} from 'react-native';
import { Icon, Screen, Text } from '../../components';
import Tab, { iTabItem } from '../../components/tab/tab.component'; 
import { List } from '../../widgets';
import SearchHeader from '../../widgets/search-header/search-header.widget';
import styles from './search-screen.style';


interface iProps {
    
}

const TAB_ITEMS: iTabItem[] = [
    {
        id: '1',
        label: 'Product',
        icon: 'cube-outline'
    },
    {
        id: '2',
        label: 'Store',
        icon: 'storefront-outline'
    }
];

const PRODUCTS = [
	{ id: '1', title: ['P 500', 'Product Title'], subTitle: ['500 g', 'Store Name'], image: 'IMG' },
    { id: '2', title: ['P 500', 'Product Title'], subTitle: ['500 g', 'Store Name'] },
    { id: '3', title: ['P 500', 'Product Title'], subTitle: ['500 g', 'Store Name'] },
    { id: '4', title: ['P 500', 'Product Title'], subTitle: ['500 g', 'Store Name'] },
    { id: '5', title: ['P 500', 'Product Title'], subTitle: ['500 g', 'Store Name'] },
    { id: '6', title: ['P 500', 'Product Title'], subTitle: ['500 g', 'Store Name'] },
    { id: '7', title: ['P 500', 'Product Title'], subTitle: ['500 g', 'Store Name'] },
];

const STORES = [
	{ id: '1', title: ['Store Name 1'], subTitle: ['8:00 am - 9:00pm', '3km away'], image: 'IMG' },
    { id: '2', title: ['Store Name 2'], subTitle: ['8:00 am - 9:00pm', '3km away'] },
    { id: '3', title: ['Store Name 3'], subTitle: ['8:00 am - 9:00pm', '3km away'] },
    { id: '4', title: ['Store Name 4'], subTitle: ['8:00 am - 9:00pm', '3km away'] },
    { id: '5', title: ['Store Name 5'], subTitle: ['8:00 am - 9:00pm', '3km away'] },
    { id: '6', title: ['Store Name 6'], subTitle: ['8:00 am - 9:00pm', '3km away'] },
    { id: '7', title: ['Store Name 7'], subTitle: ['8:00 am - 9:00pm', '3km away'] },
]

const SearchScreen:React.FC<iProps> = ({}) => {
    
    const [selectedTab, setSelectedTab] = useState(TAB_ITEMS[0].id);

    const onSelectHandler = (id: string) => {
        setSelectedTab(id);
    }

    const imageTemplate = (img: string) => {
        return (
            <>
                <View style={styles.imgTemplate}>
                     
                    <Icon name="plus-circle-outline" style={styles.icon}/>    
                    <Icon name="minus-circle-outline" style={styles.icon}/>                 
                </View>
            </>
        )
    }

    return (
        <Screen>
            <View style={styles.container}>
                {/* <SearchHeader/>
                <Tab items={TAB_ITEMS} onSelect={onSelectHandler} value={selectedTab}/>
                { selectedTab === '1' && <List id="products" data={PRODUCTS} column={2} listItemImageTemplate={imageTemplate}/> }
                { selectedTab === '2' && <List id="stores" data={STORES} column={1}/> }  */}
            </View>
        </Screen>
    );
}


export default SearchScreen;