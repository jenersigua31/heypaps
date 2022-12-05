import { iScreen, Screen } from "../types/screen.types"

const SCREEN: {
    [key in Screen]: iScreen
} = {
    'Landing':{
        name: Screen.Landing
    },
    'Home': {
        name: Screen.Home,
        navigationIcon: 'home'
    },
    'Cart': {
        name: Screen.Cart,
        navigationIcon: 'cart-outline'
    },
    'Account': {
        name: Screen.Account,
        navigationIcon: 'account-box-outline'
    }, 
    'Order': {
        name: Screen.Order,
        navigationIcon: 'clipboard-list-outline'
    },
    'Login':{
        name: Screen.Login
    },
    'Category':{
        name: Screen.Category
    },
    'Search':{
        name: Screen.Search
    },
    'Location':{
        name: Screen.Location
    },
    'Store':{
        name: Screen.Store
    },
    'ViewAll':{
        name: Screen.ViewAll
    },
}


export {
    SCREEN
}