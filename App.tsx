import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppNavigation from './AppNavigation';

import { Screen } from './types/screen.types';

import { 
	LoginScreen,  
} from './screens';
import LandingScreen from './screens/landing/landing.screen';
import CagtegoryScreen from './screens/category/category.screen';
import { RootStackParamList } from './types/rootStackParamList';
import SearchScreen from './screens/search/search.screen';
import LocalScreen from './screens/location/location.screen';
import StoreScreen from './screens/store/store.screen';
import ViewAllScreen from './screens/view-all/view-all.screen';

const { Navigator, Screen: NavScreen } = createStackNavigator<RootStackParamList>(); 

export default function App() {
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName={Screen.Landing}
				screenOptions={{
					headerShown: false,
				}}
			>
				<NavScreen name={Screen.Landing} component={LandingScreen}></NavScreen>
				<NavScreen name={Screen.Login} component={LoginScreen}></NavScreen>
				<NavScreen name={Screen.Category} component={CagtegoryScreen}></NavScreen>
				<NavScreen name={Screen.Search} component={SearchScreen}></NavScreen>
				<NavScreen name={Screen.Location} component={LocalScreen}></NavScreen>
				<NavScreen name={Screen.Store} component={StoreScreen}></NavScreen>
				<NavScreen name={Screen.ViewAll} component={ViewAllScreen}></NavScreen>
				<NavScreen
					name="HomeNavigation"
					component={AppNavigation}
					options={{
						headerShown: false,
						cardStyleInterpolator: ({current}) => ({
							cardStyle: {
								opacity: current.progress,
							},
						})
					}}
				></NavScreen>
			</Navigator> 
		</NavigationContainer>
	);
}

 