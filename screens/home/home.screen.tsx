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
import StoreList from '../../widgets/store-list/store-list.widget';
import useStoreAPI, { iApiConfig } from '../../hooks/useAPI';


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
	'stores': (data: iListItem[]) => <StoreList id="home" data={data} />
}

const apiConfig: iApiConfig<iStore, iListItem, iCategory> = {
	collection: 'stores',
	initialParams: {
		q: "*",
		query_by: 'code',
		filter_by: 'coordinates:(121.066487,12.355971, 5.1 km)',
		sort_by:'coordinates(121.066487,12.355971):asc',
		exhaustive_search:true,
		max_candidates: 1000,
		max_hits: 15,
		facet_by: 'category'			
	},
	listItem: item => ({
		id: item.id,
		title: [item.name],
		subTitle: [ `${item.store_in} - ${item.store_out}` ],
		image: item.image
	}),
	facetItem: c => ({
		label: c,
		icon: CATEGORY_ICON_MAPPING[c]
	})
}

const HomeScreen = () => { 
	const [loading, setLoading] = useState(false);
	const { load, list, facets } = useStoreAPI(apiConfig);

	const [searchKey, setSearchKey] = useState<any>('');

	useEffect(() => { 
		load();
	}, []) 

	const getComponentProps = (c: HomeComponent) => {
		if(c === 'stores')return list;
		if(c === 'categories')return facets || [];
	}

	useEffect(() => { 
		const filter = !!searchKey.length ? `name:${searchKey}`: undefined;
		load(filter)
	}, [searchKey])

	return (
		<Screen>
			<View style={styles.container}>
				<UserHeader/>
				<View style={styles.search}>
					<InputField placeholder='Search' icon="magnify" onChange={setSearchKey}/>
				</View>
				{
					list &&
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