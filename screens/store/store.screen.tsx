import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Modal, ScrollView, View } from 'react-native';
import { Icon, Screen, Text } from '../../components';
import { CategoryList, GroupList, ViewProduct } from '../../widgets';
import SearchHeader from '../../widgets/search-header/search-header.widget';
import styles from './store.style';


const PRODUCTS = [
	{ id: '1', title: ['P 110', 'Product Title'], subTitle: ['500 g'], image: 'IMG' },
    { id: '2', title: ['P 500', 'Product Title'], subTitle: ['500 g'] },
    { id: '3', title: ['P 500', 'Product Title'], subTitle: ['500 g'] },
    { id: '4', title: ['P 500', 'Product Title'], subTitle: ['500 g'] }
];

const PRODUCT_GROUP = [
    {
        id: '1',
        labelLeft: {
            text: 'Beverages',
            icon: 'chevron-right'
        },
        labelRight: {
            text: 'View all'
        },
        list: PRODUCTS
    },
    {
        id: '2',
        labelLeft: {
            text: 'Noodles',
            icon: 'chevron-right'
        },
        labelRight: {
            text: 'View all'
        },
        list: PRODUCTS
    }
]

interface iProps {
    
}
const CATEGORIES = [
    { label: 'Beverages', icon: 'beer' },
    { label: 'Noodles', icon: 'noodles' },
    { label: 'Bread', icon: 'bread-slice-outline' },
    { label: 'Meat', icon: 'food-steak' },
    { label: 'Fish', icon: 'fish' },
];

type StoreComponent = 'info' | 'categories' | 'products';
const components = ['info','categories','products'] as StoreComponent[]
const StoreComponents: {
	[key in StoreComponent]: any
} = {
	'info': () => (
        <View style={styles.info}>
            <Text text='Store Name Here' fontSize={18} bold/>
            <Text text='Store location address here' fontSize={14}/>
        </View>
    ),
	'categories': () => (
		<View style={styles.categories}>
            <Text text='Categories' fontSize={14} bold icon='chevron-right'/>
            <ScrollView horizontal={true} style={styles.scroll}>
                <CategoryList data={CATEGORIES}/>
            </ScrollView>
        </View>
	),
	'products': () => {
        const imageTemplate = (img: string) => {
            return (
                <>
                    <View style={styles.imgTemplate}> 
                        <Icon name="minus-circle-outline" style={styles.icon}/>    
                        <Icon name="plus-circle-outline" style={styles.icon}/>                 
                    </View>
                </>
            )
        }
        return (
            <GroupList data={PRODUCT_GROUP}/>
        )
    },
}

const StoreScreen:React.FC<iProps> = ({}) => {
    const [loading, setLoading] = useState(false);
    const [viewProduct, setViewProduct] = useState(false);
    
    
    useFocusEffect(() => {
        setTimeout(() => {
            setViewProduct(true);
        }, 4000); 
    })

    const onCloseHandler = () => {
        setViewProduct(false)
    }
    return (
            <Screen>
                <View style={styles.container}>
                    <SearchHeader/>
                    <View style={styles.listContainer}>
                        <FlatList 
                            refreshing={loading}
                            onRefresh={() => {
                                setLoading(true);
                                setTimeout(() => { 
                                    setLoading(false)
                                },2000)
                            }}
                            horizontal={false}
                            data={components}
                            renderItem={({item}) => StoreComponents[item]() }
                            keyExtractor={(item) => item}
                        />
                    </View>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={viewProduct} 
                    >
                        <ViewProduct onClose={onCloseHandler}/>
                    </Modal>
                </View>
            </Screen>
            
    );
}


export default StoreScreen;