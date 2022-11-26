import React from 'react';
import { Platform, View } from 'react-native';
import MapView from 'react-native-maps';
import { InputField, Screen, Text } from '../../components';
import LocationHeader from './location-header/location-header.component';
import styles from './location.style';


interface iProps {
    
}

const LocalScreen:React.FC<iProps> = ({}) => {
  return (
        <Screen>
            <View style={styles.container}>
                <LocationHeader/>
                <View style={styles.mapContainer}>
                  <InputField icon='magnify' style={styles.input}/>

                  
                  <MapView style={styles.map} />
                               
                </View>
            </View>
        </Screen>
  );
}


export default LocalScreen;