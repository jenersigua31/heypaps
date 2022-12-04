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
			imageContainer: styles.imageList
		}
	}

	return (
			<TouchableOpacity style={[styles.container, style, listStyle().container]} onPress={onPress}>
				<View style={[styles.imageContainer, listStyle().imageContainer]}>
					{
						imageTemplate ? 
						imageTemplate(image || '') 
						: 
						<Image
							style={styles.image}
							source={{uri: image}}
						/>
					} 	
				</View>
				
				<View style={styles.text}>
					{
						title.map( (t,i) => (
							<Text key={i} text={t} color={TEXT.dark} fontSize={14} bold/>
						))
					}
					
					{
						subTitle.map( (t,i) => (
							<Text key={i} text={t} color={TEXT.light} fontSize={12} bold/>
						))
					}
				</View> 
			</TouchableOpacity>
	);
}


export default ListItem;