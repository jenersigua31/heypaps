import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { TouchableHighlight, View} from 'react-native';
import { Icon, InputField, Text } from '../../components';
import styles from './search-header.style';


interface iProps {
    onSearch: (key: string) => void
}

const SearchHeader:React.FC<iProps> = ({
  onSearch
}) => {
  const { goBack } = useNavigation();
  const timerRef = useRef<any>();

  const onSearchHandler = (value: any) => {
      onSearch(value);
  }

  return (
        <View style={styles.container}>
            <TouchableHighlight onPress={goBack}>
              <Icon name='chevron-left' size={30}/>
            </TouchableHighlight>
            
            <InputField placeholder='Search' icon='magnify' style={styles.input} onChange={onSearchHandler}/>
            <Icon name='cart-variant' size={30}/>
        </View>
  );
}


export default SearchHeader;