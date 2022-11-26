import React from 'react';
import { Text, View, ViewStyle} from 'react-native';
import styles from './carousel.style';


interface iProps {
    height?: number,
    width?: number
}

const Carousel:React.FC<iProps> = ({
    height,
    width
}) => {

    const inlineStyles = () => (
        {
            width,
            height
        } as ViewStyle
    )

    return (
            <View style={[styles.container, inlineStyles()]}>
                <Text>Carousel</Text>
            </View>
    );
}


export default Carousel;