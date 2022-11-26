import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import Screen from '../../components/screen/screen.component';
import styles from './home-screen.style';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Carousel, List, UserHeader } from '../../widgets';
import { InputField, Text, Spacer } from '../../components';
import { TEXT } from '../../constant/color.constant'; 
import HomeCategories, { iCategory } from './home-categories.component';
import useTypeSense from '../../hooks/useTypeSense';
import { iStore } from '../../model/store.model';
import { iListItem } from '../../types/list.types';

const CATEGORIES = [
    { label: 'Mall', icon: 'warehouse' },
    { label: 'Grocery', icon: 'storefront-outline' },
    { label: 'Food', icon: 'food-outline' },
    { label: 'Hardware', icon: 'account-hard-hat' }
];


const CATEGORY_ICON_MAPPING: {[key: string]: string} = {
	'Mall': 'warehouse',
	'Grocery': 'storefront-outline'
}


type HomeComponent = 'categories' | 'carousel' | 'near-text' | 'stores';
const components = ['categories','carousel','near-text','stores'] as HomeComponent[]
const HomeScreenComponents: {
	[key in HomeComponent]: any
} = {
	'categories': (categories: iCategory[]) => <HomeCategories data={categories}/>,
	'near-text': () => (
		<Text text='Stores Near You' icon='chevron-right' 
			color={TEXT.dark} style={styles.storeNearLabel}
			fontSize={12} bold
		/>
	),
	'carousel': () => <View style={styles.carousel}><Carousel height={150}/></View>,
	'stores': (data: iListItem[]) => <List id="home" data={data} column={2}/>
}

const HomeScreen = () => {
    const { navigate } = useNavigation(); 
	const [loading, setLoading] = useState(false);
	const { search } = useTypeSense();
	const [storeList, setStoreList] = useState<iListItem[]>([]);
	const [filteredStores, setFilteredStores] = useState<iListItem[]>([]);
	const [categories, setCategories] = useState<iCategory[]>();
	const [searchKey, setSearchKey] = useState<any>('');


	const [text, setText] = useState('');
 
	useEffect(() => {
		loadStores();		 
	}, [])

	const loadStores = async () => {
		const response = await search<iStore>('stores', {
			q: "*",
			query_by: 'code',
			filter_by: 'coordinates:(121.066487,12.355971, 5.1 km)',
			sort_by:'coordinates(121.066487,12.355971):asc',
			exhaustive_search:true,
			max_candidates: 1000,
			max_hits: 15,
			facet_by: 'category'			
		}); 

		if(response.facets){
			const facets = response.facets['category'].map( c => ({
				label: c,
				icon: CATEGORY_ICON_MAPPING[c]
			}));
			setCategories(facets)
		}

		const result = response.data.map( store => { 
			return ({
				id: store.id,
				title: [store.name],
				subTitle: [ `${store.store_in} - ${store.store_out}` ],
				image: store.image
			})
		});
		setStoreList(result);
	}

	const getComponentProps = (c: HomeComponent) => {
		if(c === 'stores'){
			const finalList = !!searchKey.length ? filteredStores : storeList;
			return finalList || [];
		}
		if(c === 'categories')return categories || [];
	}

	useEffect(() => {
		if(!searchKey.length){
			setFilteredStores([]);
			return;
		}
		const filtered = storeList.filter( s => {
			return !!s.title.find( title => title.toLowerCase().includes(searchKey.toLowerCase()))
		});
		setFilteredStores(filtered);
	}, [searchKey])

	return (
		<Screen>
			<View style={styles.container}>
				<UserHeader/>
				<View style={styles.search}>
					<InputField placeholder='Search' icon="magnify" onChange={setSearchKey}/>
				</View>
				{
					!!storeList.length &&
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
							const props = getComponentProps(item);
							return HomeScreenComponents[item](props);
						}}
						keyExtractor={(item) => item}
					/>
				}
				

			</View>
		</Screen>
	);
}


export default HomeScreen;