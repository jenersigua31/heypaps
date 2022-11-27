import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useRef, useEffect} from 'react';
import { FlatList, Modal, ScrollView, View } from 'react-native';
import { Icon, Screen, Text } from '../../components';
import { RootStackParamList } from '../../types/rootStackParamList';
import { iTypeSenseSearchParams } from '../../types/typesense.types';
import { CategoryList, GroupList, ViewProduct } from '../../widgets';
import SearchHeader from '../../widgets/search-header/search-header.widget';
import { Screen as ScreenType} from '../../types/screen.types';
import styles from './store.style';
import useTypeSense from '../../hooks/useTypeSense';
import { iProduct } from '../../model/product.model';
import { iStore } from '../../model/store.model';
import useDataLoader, { iDataLoaderConfig } from '../../hooks/useDataLoader';
import { iGroupListItem, iListItem } from '../../types/list.types';
import { CATEGORY_ICON_MAPPING } from '../../constant/category-icons.constant';
import { iCategory } from '../home/home-categories.component';


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
 
type Props = NativeStackScreenProps<RootStackParamList, ScreenType.Store>;

type StoreComponent = 'info' | 'categories' | 'products';
const components = ['info','categories','products'] as StoreComponent[]
const StoreComponents: {
	[key in StoreComponent]: any
} = {
	'info': (store: iStore) => (
        <View style={styles.info}>
            <Text text={store.name} fontSize={18} bold/>
            <Text text={store.address} fontSize={14}/>
        </View>
    ),
	'categories': (facets: iCategory[]) => (
		<View style={styles.categories}>
            <Text text='Categories' fontSize={14} bold icon='chevron-right'/>
            <ScrollView horizontal={true} style={styles.scroll}>
                <CategoryList data={facets}/>
            </ScrollView>
        </View>
	),
	'products': (data: iGroupListItem[]) => {
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
            <GroupList data={data} listItemImageTemplate={imageTemplate}/>
        )
    },
}

const apiConfig: iDataLoaderConfig<iProduct, iListItem, any> = {
	collection: 'products',
	initialParams: {
		q: "*",
		query_by: 'code',
		exhaustive_search:true,
		max_candidates: 1000,
		max_hits: 15,
		facet_by: 'category'			
	},
    facetItem: item => ({
       label: item,
       icon: CATEGORY_ICON_MAPPING[item]
    })
}

const StoreScreen = ({ route, navigation }: Props) => {
    const [loading, setLoading] = useState(false);
    const [viewProduct, setViewProduct] = useState(false);
    const { load, list, facets } = useDataLoader(apiConfig); 
    
    useEffect(() => {  
        load([`store_id:=${route.params.id}`])
	}, [])
    
    useEffect(() => {  
        console.log(facets)
	}, [facets])

    const onCloseHandler = () => {
        setViewProduct(false)
    }

    const getComponentParams = (item: StoreComponent) => {
        if(item === 'info')return route.params;
        if(item === 'categories')return facets;
        if(item === 'products') {
            const productGroup: iGroupListItem[] = [];
            facets.forEach( (f,i) => {
                const facet = f.label;
                const products = (list as iProduct[])
                    .filter((l: iProduct) => l.category === facet)
                    .map( p => ({ 
                        id: String(p.id), 
                        title: [
                            `₱ ${p.price}`, 
                            p.description
                        ], 
                        subTitle: [p.measurement], 
                        image: p.image
                    } as iListItem));

                productGroup.push(
                    {
                        id: String(i),
                        labelLeft: {
                            text: facet,
                            icon: 'chevron-right'
                        },
                        labelRight: {
                            text: 'View all'
                        },
                        list: products                    
                    }
                )
            }) ;
            return productGroup;
        }
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
                            renderItem={({item}) => StoreComponents[item](getComponentParams(item)) }
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