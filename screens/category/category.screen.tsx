import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, View} from 'react-native'; 
import { InputField, Screen, Text } from '../../components';
import { Carousel, List, UserHeader } from '../../widgets';
import styles from './category-screen.style';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'; 
import { Screen as ScreenType} from '../../types/screen.types';
import { RootStackParamList } from '../../types/rootStackParamList'; 
import { TEXT } from '../../constant/color.constant';

type Props = NativeStackScreenProps<RootStackParamList, ScreenType.Category>;

const STORES = [
	{ id: '1', title: ['Brand Store 1'], subTitle: ['08:00 AM - 09:00 PM'] },
	{ id: '2', title: ['Brand Store 2'], subTitle: ['08:00 AM - 09:00 PM'] },
	{ id: '3', title: ['Brand Store 3'], subTitle: ['08:00 AM - 09:00 PM'] },
	{ id: '4', title: ['Brand Store 4'], subTitle: ['08:00 AM - 09:00 PM'] },
	{ id: '5', title: ['Brand Store 5'], subTitle: ['08:00 AM - 09:00 PM'] },
	{ id: '6', title: ['Brand Store 6'], subTitle: ['08:00 AM - 09:00 PM'] },
]


type CategoryComponent = 'carousel' | 'near-text' | 'category-items' | 'title';
const components = ['title', 'carousel','near-text','category-items'] as CategoryComponent[]
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
	'category-items': () => <List id="stores" data={STORES} column={2}/>,
	'title': (title: string) => <Text text={title} fontSize={28} style={{paddingHorizontal: 20}} bold/>
}

const CagtegoryScreen = ({ route, navigation }: Props) => {
  const { goBack } = useNavigation();
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useFocusEffect(() => {
    setTitle(route.params.label)
  })

  const onBackHandler = () => {
    goBack();
  }

	return (
		<Screen>
			<View style={styles.container}>
				<UserHeader onBack={onBackHandler}/> 
				<View style={styles.search}>
					<InputField placeholder='Search' icon="magnify"/>
				</View>  
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
					renderItem={({item}) => CategoryScreenComponents[item](title) }
					keyExtractor={(item) => item}
				/>
			</View>
		</Screen>
	);
	}


export default CagtegoryScreen;