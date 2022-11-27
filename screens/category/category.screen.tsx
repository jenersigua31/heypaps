import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { FlatList, View} from 'react-native'; 
import { InputField, Screen, Text } from '../../components';
import { Carousel, List, UserHeader } from '../../widgets';
import styles from './category-screen.style';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'; 
import { Screen as ScreenType} from '../../types/screen.types';
import { RootStackParamList } from '../../types/rootStackParamList'; 
import { TEXT } from '../../constant/color.constant';
import useTypeSense from '../../hooks/useTypeSense';
import { iListItem } from '../../types/list.types';
import { iStore } from '../../model/store.model'; 
import { iTypeSenseSearchParams } from '../../types/typesense.types';
import StoreList from '../../widgets/store-list/store-list.widget';

type Props = NativeStackScreenProps<RootStackParamList, ScreenType.Category>;


type CategoryComponent = 'carousel' | 'near-text' | 'category-items';
const components = ['carousel','near-text','category-items'] as CategoryComponent[]
const CategoryScreenComponents: {
	[key in CategoryComponent]: any
} = { 
	'near-text': () => (
		<Text text='Stores Near You' icon='chevron-right' 
			color={TEXT.dark} style={styles.storeNearLabel}
			fontSize={12} bold
		/>
	),
	'carousel': () => <View style={styles.carousel}><Carousel height={150}/></View>,
	'category-items': (data: iListItem[]) => <StoreList id="category-stores" data={data}/>
}

const CagtegoryScreen = ({ route, navigation }: Props) => {
	const { goBack } = useNavigation();
	const [title, setTitle] = useState<string>('');
	const [loading, setLoading] = useState(false);
	const { search } = useTypeSense();
	const [storeList, setStoreList] = useState<iListItem[]>([]); 
	const [searchKey, setSearchKey] = useState<any>('');

	const searchParams = useRef<iTypeSenseSearchParams>({
		q: "*",
		query_by: 'code',
		exhaustive_search:true,
		max_candidates: 1000,
		max_hits: 15		
	})

	useEffect(() => {
		setTitle(route.params.label)
		loadStores(getParams());		 
	}, []);

	useEffect(() => { 
		console.log(getParams())
		loadStores(getParams()); 
	}, [searchKey]);

	const getParams = () => {
		let newParams = {
			...searchParams.current,
			filter_by: `category:(${route.params.label})`
		};

		if(!!searchKey.length){
			newParams = {
				...newParams,
				filter_by: `${newParams.filter_by} && name:${searchKey}`
			}
		} 
		return newParams;
	}

	const loadStores = async (params: iTypeSenseSearchParams)  => {
		const response = await search<iStore>('stores', params); 

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

	const onBackHandler = () => {
		goBack();
	}

	const getComponentProps = (c: CategoryComponent) => {
		if(c === 'category-items')return storeList;
	}

	return (
		<Screen>
			<View style={styles.container}>
				<UserHeader onBack={onBackHandler}/> 
				<View style={styles.search}>
					<InputField placeholder='Search' icon="magnify" onChange={setSearchKey}/>
				</View>  
				<Text text={title} fontSize={28} style={styles.title} bold/>
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
						renderItem={({item}) => CategoryScreenComponents[item](getComponentProps(item)) }
						keyExtractor={(item) => item}
					/>
				}
			</View>
		</Screen>
	);
	}


export default CagtegoryScreen;