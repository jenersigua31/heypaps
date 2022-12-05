import React, { useEffect, useState } from 'react';
import { FlatList, View} from 'react-native';
import Screen from '../../components/screen/screen.component';
import SearchHeader from '../../widgets/search-header/search-header.widget';
import styles from './view-all.style';
import {  Text } from '../../components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/rootStackParamList';
import { Screen as ScreenType} from '../../types/screen.types';
import useDataLoader, { iDataLoaderConfig } from '../../hooks/useDataLoader';
import { iProduct } from '../../model/product.model';
import { iListItem } from '../../types/list.types';
import { List } from '../../widgets'; 

type Props = NativeStackScreenProps<RootStackParamList, ScreenType.ViewAll>;

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

const ViewAllScreen = ({ route, navigation }: Props) => {

  const [loading, setLoading] = useState(false);
  const { load, list, facets } = useDataLoader(apiConfig); 

  useEffect(() => {  
      load([`category:=${route.params.title}`])
  }, [])

  const mapItem = (item: any) => ({
    id: item.id,
    title: [item.description],
    subTitle: [ `₱ ${item.price}` ],
    image: item.image
});

  return (
        <Screen>
            <View style={styles.container}>
              <SearchHeader/>
              <Text text={route.params.title} fontSize={28} style={styles.title} bold/> 
              {
                list &&
                <View style={styles.list}>
                  <FlatList 
                            refreshing={loading}
                            onRefresh={() => {
                                setLoading(true);
                                setTimeout(() => { 
                                    setLoading(false)
                                },2000)
                            }}
                            horizontal={false}
                            data={['components']}
                            renderItem={({item}) => {
                                // if(item === 'products') return productList();
                                // return StoreComponents[item](getComponentParams(item));
                                return <List id="viewall" data={list.map(mapItem)} column={2}/>
                            }}
                            keyExtractor={(item) => item}
                    />
                </View>
              }

                        
            </View>
        </Screen>
  );
}


export default ViewAllScreen;