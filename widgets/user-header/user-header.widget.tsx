import React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Icon } from '../../components';
import styles from './user-header.style';


interface iProps {
    onBack?: () => void
}

const UserHeader:React.FC<iProps> = ({
    onBack
}) => {

    return (
        <View style={styles.container}>
            {
                onBack &&
                <TouchableOpacity onPress={onBack}>
                    <Icon name="chevron-left" size={40} style={styles.back}/>
                </TouchableOpacity>
            }
            
            <View style={styles.info}>
                <Text style={styles.greetings}>
                    Hey, Bryan Kim!
                </Text>
                <View style={styles.location}>
                    <Icon name='map-marker' style={styles.locationIcon}/>
                    <Text style={styles.address}>
                        Muntinlupa
                    </Text>
                    <Icon name='chevron-down'/>
                </View>
            </View>

            <Icon name='account-circle' size={45} color="#000"/>

        </View>
    );
}


export default UserHeader;