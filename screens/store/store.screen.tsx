import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useRef, useEffect} from 'react';
import { FlatList, Image, Modal, ScrollView, View } from 'react-native';
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
import { TEXT, THEME } from '../../constant/color.constant';
import ProductThumbnail from '../../widgets/product-thumbnail/product-thumbnail.widget';
import { iProductThumbnail } from '../../types/product-thumbnail.interface';

 
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
	'categories': (facets: iCategory[]) => {},
	'products': (data: iGroupListItem[]) => {},
}

const apiConfig: iDataLoaderConfig<iProduct, iListItem, any> = {
	collection: 'products',
	initialParams: {
		q: "*",
		query_by: 'code',
		exhaustive_search:true,
		max_candidates: 1000,
		// max_hits: 100,
		facet_by: 'category',
        per_page: 200
	},
    facetItem: item => ({
       label: item
    })
}

const StoreScreen = ({ route, navigation }: Props) => {
    const [loading, setLoading] = useState(false); 
    const [selectedProduct, setSelectedProduct] = useState<iProduct>();
    const { load, list, facets } = useDataLoader(apiConfig); 
    const {navigate} = useNavigation();

    
    useEffect(() => {  
        load([`store_id:=${route.params.id}`])
	}, [])
    
    useEffect(() => {  
        console.log(facets)
	}, [facets])

    const onCloseHandler = () => {
        setSelectedProduct(undefined)
    }

    const productThumbnail = (data: iProductThumbnail) => (
        <ProductThumbnail 
            image={data.image as string} 
            id={data.id}
            onSelect={onSelectProduct}    
        />
    )

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
                        id: p.id, 
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

    const onSelectProduct = (id: number) => {
        // setViewProduct(true);
        const selected = (list as iProduct[]).find( p => p.id == id); 
        if(!selected)return; 
        setSelectedProduct(selected);
    }

    const onActionHandler = (action: string, data: string) => {    
        navigate(ScreenType.ViewAll as never, {
            title: data
        } as never)
    }

    const productList = () => (
        <GroupList 
            onAction={onActionHandler}
            data={getComponentParams('products') as iGroupListItem[]} 
            listItemImageTemplate={productThumbnail}
            // onSelect={(item) => onSelectProduct(item)}
        />
    )

    const onSelectCategory = (cat: iCategory) => {
        onActionHandler('View All', cat.label)
    }

    const categories = () => (
        <View style={styles.categories}>
            <Text text='Categories' fontSize={14} bold icon='chevron-right'/>
            <ScrollView horizontal={true} style={styles.scroll} showsHorizontalScrollIndicator={false}>
                <CategoryList data={facets as iCategory[]} textOnly onSelect={onSelectCategory}/>
            </ScrollView>
        </View>
    )

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
                            renderItem={({item}) => {
                                if(item === 'products') return productList();
                                if(item === 'categories') return categories()

                                return StoreComponents[item](getComponentParams(item));
                            }}
                            keyExtractor={(item) => item}
                        />
                    </View>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={!!selectedProduct} 
                    >   
                        {
                            selectedProduct &&
                            <ViewProduct onClose={onCloseHandler} product={selectedProduct}/>
                        }
                    </Modal>
                </View>
            </Screen>
            
    );
}


export default StoreScreen;