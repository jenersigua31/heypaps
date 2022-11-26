import React from 'react';
import { View} from 'react-native';
import { Icon, InputField, Text } from '../../components';
import styles from './search-header.style';


interface iProps {
    
}

const SearchHeader:React.FC<iProps> = ({}) => {
  return (
        <View style={styles.container}>
            <Icon name='chevron-left' size={30}/>
            <InputField placeholder='Search' icon='magnify' style={styles.input}/>
            <Icon name='cart-variant' size={30}/>
        </View>
  );
}


export default SearchHeader;