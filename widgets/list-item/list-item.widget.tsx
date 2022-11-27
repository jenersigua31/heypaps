import React from 'react';
import { Image, TouchableOpacity, View, ViewStyle} from 'react-native';
import { Text } from '../../components';
import { TEXT } from '../../constant/color.constant';
import styles from './list-item.style';


interface iProps {
	style?: ViewStyle,
	image?: string,
	title: string[],
	subTitle?: string[],
	display?: 'grid' | 'list',
	imageTemplate?: (img: string) => JSX.Element,
	onPress?: () => void
}

const ListItem:React.FC<iProps> = ({
	style,
	image,
	title = [],
	subTitle = [],
	display = 'grid',
	imageTemplate,
	onPress
}) => {

	const listStyle = () => {
		if(display === 'grid')return {};
		return {
			container: styles.containerList,
			image: styles.imageList
		}
	}

	return (
			<TouchableOpacity style={[styles.container, style, listStyle().container]} onPress={onPress}>
				<View style={[styles.image, listStyle().image]}>
					{
						imageTemplate ? 
						imageTemplate(image || '') 
						: <Image
							style={{width: '100%', height: '100%', resizeMode: 'contain'}}
							source={{uri: image}}
						/>
					}
						
				</View>
				
				<View style={styles.text}>
					{
						title.map( (t,i) => (
							<Text key={i} text={t} color={TEXT.dark} fontSize={12} bold/>
						))
					}
					
					{
						subTitle.map( (t,i) => (
							<Text key={i} text={t} color={TEXT.light} fontSize={10} bold/>
						))
					}
				</View> 
			</TouchableOpacity>
	);
}


export default ListItem;