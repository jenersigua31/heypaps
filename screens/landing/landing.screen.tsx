import React from 'react';
import { View, Text, Button, Image} from 'react-native';
import Screen from '../../components/screen/screen.component';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import styles from './landing-screen.style';


const LandingScreen = () => {
  const { navigate } = useNavigation();

  useFocusEffect(() => {
    setTimeout(() => {
      navigate("HomeNavigation" as never)
    }, 5000);
  })

  return (
        <Screen>
            <View style={styles.container}> 
              <Image source={require('./../../assets/logo.png')} style={styles.logo}/>  
            </View>
        </Screen>
  );
}


export default LandingScreen;