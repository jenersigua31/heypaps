import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableHighlight, View} from 'react-native';
import { Icon, InputField, Text } from '../../components';
import styles from './search-header.style';


interface iProps {
    
}

const SearchHeader:React.FC<iProps> = ({}) => {
  const { goBack } = useNavigation();

  return (
        <View style={styles.container}>
            <TouchableHighlight onPress={goBack}>
              <Icon name='chevron-left' size={30}/>
            </TouchableHighlight>
            
            <InputField placeholder='Search' icon='magnify' style={styles.input}/>
            <Icon name='cart-variant' size={30}/>
        </View>
  );
}


export default SearchHeader;