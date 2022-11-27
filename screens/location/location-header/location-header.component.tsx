import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native'; 
import { Icon, Text } from '../../../components';
import styles from './location-header.style';


interface iProps {
    
}

const LocationHeader:React.FC<iProps> = ({}) => {
    const { goBack } = useNavigation();

    return (
            <View style={styles.container}>
                {/* <Text text='Location Header'/> */}

                <TouchableOpacity onPress={goBack} style={styles.back}>
                    <Icon name="chevron-left" size={30} style={styles.back}/>
                </TouchableOpacity>

                <View style={styles.text}>
                    <Text text='Select Location' fontSize={18} bold/>
                    <Text text='Pin your location' fontSize={13}/>
                    <Text text='and find Nearby Store' fontSize={13}/>
                </View>
                

                <View style={styles.image}>
                </View>
            </View>
    );
}


export default LocationHeader;