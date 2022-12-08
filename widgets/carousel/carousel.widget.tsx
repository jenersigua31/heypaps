import React from 'react';
import { Image, Text, View, ViewStyle} from 'react-native';
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
            <Image
                source={{uri:"https://heypaps.blob.core.windows.net/carousel/slider.png"}}
                style = {{ width: '100%', height: '100%' }}
            />
        </View>
    );
}


export default Carousel;