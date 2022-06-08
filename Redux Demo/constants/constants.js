const screens = {
  // for login screen
  LoginWithMobileNo: 'Mobile',
  LoginWithEmail: 'Email',
  LoginWithUserId: 'User Id',
  // for main screen
  main_layout: 'MainLayout',
  home: 'Home',
  Loan: 'Loan',
  cart: 'Cart',
  Setting: 'Setting',
  Account: 'Account',
  HelpCenter: 'Help Center',
}

const center_tabs = [
  {
    id: 0,
    label: screens.LoginWithMobileNo,
  },
  {
    id: 1,
    label: screens.LoginWithEmail,
  },
  {
    id: 2,
    label: screens.LoginWithUserId,
  },
]

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.Loan,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.Setting,
  },
  {
    id: 4,
    label: screens.HelpCenter,
  },
  {
    id: 5,
    label: screens.Account,
  },
]

export default {
  screens,
  center_tabs,
  bottom_tabs,
}
