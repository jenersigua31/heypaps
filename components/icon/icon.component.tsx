import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, ViewStyle} from 'react-native';
import styles from './icon.style';


interface iProps {
    name: string,
    size?: number,
    color?: string,
    style?: ViewStyle
}

const Icon:React.FC<iProps> = ({
    name,
    size = 20,
    color = '#333',
    style
}) => {
  return (
        <View style={[styles.container, style]}> 
            <MaterialCommunityIcons name={name as any} size={size} color={color}/>
        </View>
  );
}


export default Icon;