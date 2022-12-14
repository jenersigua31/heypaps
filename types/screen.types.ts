enum Screen {
    Home = 'Home',
    Cart = 'Cart',
    Account = 'Account',
    Order = 'Order',
    Login = 'Login',
    Landing = 'Landing',
    Category = 'Category',
    Search = 'Search',
    Location = 'Location',
    Store = 'Store',
    ViewAll = 'ViewAll'
}

interface iScreen {
    name: Screen,
    navigationIcon?: string
}

export {
    Screen,
    iScreen
}