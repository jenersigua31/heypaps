import React from 'react';
import { SafeAreaView, Text, View} from 'react-native';
import styles from './screen.style';


interface iProps {
}

const Screen:React.FC<React.PropsWithChildren<iProps>> = ({children}) => {
  return (
    <SafeAreaView style={styles.screen}> 
      <View style={styles.bg}>
        <View style={styles.bgTop}></View>
        <View style={styles.bgBottom}></View>
      </View>
      {children} 
    </SafeAreaView>
  );
}


export default Screen;

