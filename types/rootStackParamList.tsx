import { iStore } from "../model/store.model";
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
	[Screen.Store]: iStore,
	[Screen.ViewAll]: {
		title: string
	},
	'HomeNavigation': {};
};