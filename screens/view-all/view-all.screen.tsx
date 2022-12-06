import React, { useEffect, useState } from 'react';
import { FlatList, Modal, View} from 'react-native';
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
import { List, ViewProduct } from '../../widgets'; 
import ProductThumbnail from '../../widgets/product-thumbnail/product-thumbnail.widget';
import { iProductThumbnail } from '../../types/product-thumbnail.interface';

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
  const [searchKey, setSearchKey] = useState<any>('');
  const [selectedProduct, setSelectedProduct] = useState<iProduct>();

  useEffect(() => {  
      load([`category:=${route.params.title}`, ])
  }, []);

  useEffect(() => { 
		const filter = !!searchKey.length ? [`description:${searchKey}`,`category:=${route.params.title}`]: undefined;
    load(filter)
	}, [searchKey])

  const mapItem = (item: any) => ({
    id: item.id,
    title: [item.description],
    subTitle: [ `₱ ${item.price}` ],
    image: item.image
  });

  const onCloseHandler = () => {
      setSelectedProduct(undefined)
  }
  
  const onSelectProductHandler = (id: number) => {
    const selected = (list as iProduct[]).find( p => p.id == id); 
    if(!selected)return; 
    setSelectedProduct(selected);
  }
  
  const productThumbnail = (data: iProductThumbnail) => (
    <ProductThumbnail 
      image={data.image as string} 
      id={data.id}
      onSelect={onSelectProductHandler}  
    />
  )

  return (
        <Screen>
            <View style={styles.container}>
              <SearchHeader onSearch={setSearchKey}/>
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
                                return <List id="viewall" data={list.map(mapItem)} column={2} listItemImageTemplate={productThumbnail}/>
                            }}
                            keyExtractor={(item) => item}
                    />
                </View>
              }
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


export default ViewAllScreen;