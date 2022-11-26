import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import Screen from '../../components/screen/screen.component';
import styles from './home-screen.style';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Carousel, List, UserHeader } from '../../widgets';
import { InputField, Text, Spacer } from '../../components';
import { TEXT } from '../../constant/color.constant'; 
import HomeCategories from './home-categories.component';
import useTypeSense from '../../hooks/useTypeSense';
import { iStore } from '../../model/store.model';
import { iListItem } from '../../types/list.types';

const CATEGORIES = [
    { label: 'Mall', icon: 'warehouse' },
    { label: 'Grocery', icon: 'storefront-outline' },
    { label: 'Food', icon: 'food-outline' },
    { label: 'Hardware', icon: 'account-hard-hat' }
];

const STORES = [
	{ id: '1', title: ['Store 1'], subTitle: ['08:00 AM - 09:00 PM'] },
	{ id: '2', title: ['Store 2'], subTitle: ['08:00 AM - 09:00 PM'] },
	{ id: '3', title: ['Store 3'], subTitle: ['08:00 AM - 09:00 PM'] },
	{ id: '4', title: ['Store 4'], subTitle: ['08:00 AM - 09:00 PM'] },
	{ id: '5', title: ['Store 5'], subTitle: ['08:00 AM - 09:00 PM'] },
	{ id: '6', title: ['Store 6'], subTitle: ['08:00 AM - 09:00 PM'] },
]


type HomeComponent = 'categories' | 'carousel' | 'near-text' | 'stores';
const components = ['categories','carousel','near-text','stores'] as HomeComponent[]
const HomeScreenComponents: {
	[key in HomeComponent]: any
} = {
	'categories': () => <HomeCategories data={CATEGORIES}/>,
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
	const [storeList, setStoreList] = useState<iListItem[]>();
 
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

		const result = response.data.map( store => {
			console.log(store)
			return ({
				id: store.id,
				title: [store.name],
				subTitle: [ `${store.store_in} - ${store.store_out}` ],
				image: store.image
			})
		});
		setStoreList(result);
	}

	return (
		<Screen>
			<View style={styles.container}>
				<UserHeader/>
				<View style={styles.search}>
					<InputField placeholder='Search' icon="magnify"/>
				</View>
				{
					storeList &&
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


							return HomeScreenComponents[item](storeList);
						}}
						keyExtractor={(item) => item}
					/>
				}
				

			</View>
		</Screen>
	);
}


export default HomeScreen;