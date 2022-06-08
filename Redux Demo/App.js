import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

// import { MainLayout } from './screens'
import CustomDrawer from './navigation/CustomDrawer'
import Login from './screens/Login/Login'

// Formik & Yup
import LoginFormik from './screens/Login/LoginFormik'
import RegisterFormik from './screens/Login/RegisterFormik'

// use redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './stores/rootReducer'

const Stack = createStackNavigator()

// set store by using createStore
const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#111A2C"
        />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'LoginFormik'}
        >
          {/* Redux Example Login Screen */}
          <Stack.Screen name="Login" component={Login} />
           {/* Formik Example Login Screen */}
          <Stack.Screen name="LoginFormik" component={LoginFormik} />
          <Stack.Screen name="RegisterFormik" component={RegisterFormik} />
          <Stack.Screen
            name="Home"
            // component={MainLayout}
            component={CustomDrawer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
