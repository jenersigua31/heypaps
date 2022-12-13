import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { TouchableOpacity, View} from 'react-native';
import { Icon, InputField, Text } from '../../components';
import { Screen } from '../../types/screen.types';
import styles from './search-header.style';


interface iProps {
    onSearch: (key: string) => void
}

const SearchHeader:React.FC<iProps> = ({
  onSearch
}) => {
  const { goBack,navigate } = useNavigation();
  const timerRef = useRef<any>();

  const onSearchHandler = (value: any) => {
      onSearch(value);
  }

  const gotoCart = () => {
    navigate(Screen.Cart as never)
  }

  return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
              <Icon name='chevron-left' size={30}/>
            </TouchableOpacity>
            
            <InputField placeholder='Search' icon='magnify' style={styles.input} onChange={onSearchHandler}/>
            
            <TouchableOpacity onPress={gotoCart}>
              <Icon name='cart-outline' size={25}/>
            </TouchableOpacity>
        </View>
  );
}


export default SearchHeader;