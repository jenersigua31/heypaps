import React from 'react';
import { Image, View, ViewStyle} from 'react-native';
import { Text } from '../../components';
import { TEXT } from '../../constant/color.constant';
import styles from './list-item.style';


interface iProps {
	style?: ViewStyle,
	image?: string,
	title: string[],
	subTitle?: string[],
	display?: 'grid' | 'list',
	imageTemplate?: (img: string) => JSX.Element
}

const ListItem:React.FC<iProps> = ({
	style,
	image,
	title = [],
	subTitle = [],
	display = 'grid',
	imageTemplate
}) => {

	const listStyle = () => {
		if(display === 'grid')return {};
		return {
			container: styles.containerList,
			image: styles.imageList
		}
	}

	return (
			<View style={[styles.container, style, listStyle().container]}>
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
	
				
			</View>
	);
}


export default ListItem;