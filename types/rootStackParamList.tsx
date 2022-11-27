import { Screen } from "./screen.types";

export type RootStackParamList = {
	[Screen.Landing]: {},
	[Screen.Account]: {},
	[Screen.Order]: {},
	[Screen.Category]: {
		label: string
	},
	[Screen.Login]: {},
	[Screen.Landing]: {},
	[Screen.Cart]: {},
	[Screen.Search]: {},
	[Screen.Location]: {},
	[Screen.Store]: {
		id: string
	},
	'HomeNavigation': {};
};