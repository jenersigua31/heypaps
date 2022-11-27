import React, { useState, useEffect, useRef } from 'react';
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
import { CATEGORY_ICON_MAPPING } from '../../constant/category-icons.constant';
import { iTypeSenseSearchParams } from '../../types/typesense.types';


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
	const [loading, setLoading] = useState(false);
	const { search } = useTypeSense();
	const [storeList, setStoreList] = useState<iListItem[]>([]); 
	const [categories, setCategories] = useState<iCategory[]>();
	const [searchKey, setSearchKey] = useState<any>('');
	
	const searchParams = useRef<iTypeSenseSearchParams>({
		q: "*",
		query_by: 'code',
		filter_by: 'coordinates:(121.066487,12.355971, 5.1 km)',
		sort_by:'coordinates(121.066487,12.355971):asc',
		exhaustive_search:true,
		max_candidates: 1000,
		max_hits: 15,
		facet_by: 'category'			
	})
 
	useEffect(() => {
		loadStores(searchParams.current);		 
	}, [])

	const loadStores = async (params: iTypeSenseSearchParams) => {
		const response = await search<iStore>('stores', params); 

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
		if(c === 'stores')return storeList;
		if(c === 'categories')return categories || [];
	}

	useEffect(() => {
		let newParams = searchParams.current;
		if(!!searchKey.length){
			newParams = {
				...newParams,
				filter_by: `${newParams.filter_by} && name:${searchKey}`
			}
		} 
		loadStores(newParams); 
	}, [searchKey])

	return (
		<Screen>
			<View style={styles.container}>
				<UserHeader/>
				<View style={styles.search}>
					<InputField placeholder='Search' icon="magnify" onChange={setSearchKey}/>
				</View>
				{
					!!storeList &&
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