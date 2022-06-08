import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
// import { MainLayout } from '../screens'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'
import MainLayout from './../screens/MainLayout'
import Animated from 'react-native-reanimated'

import { connect } from 'react-redux'
import { setSelectedTab } from './../stores/tab/tabActions'

const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ lable, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: 5,
        marginTop: 5,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{ width: 20, height: 20, tintColor: COLORS.white }}
      />
      <Text style={{ marginLeft: 15, color: COLORS.white, ...FONTS.h3 }}>
        {lable}
      </Text>
    </TouchableOpacity>
  )
}
const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
        {/* Close */}
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginTop: 5,
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{
                height: 30,
                width: 30,
                tintColor: COLORS.white,
                marginLeft: 8,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Profile */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}
          onPress={() => console.log('Profile Clicked')}
          // onPress={() => navigation.navigate("UserProfile")}
        >
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{ width: 65, height: 65, borderRadius: SIZES.padding }}
          />
          <View style={{ marginLeft: SIZES.radius }}>
            <Text style={{ color: COLORS.white, ...FONTS.h2, alignSelf:'flex-start'}}>
              {dummyData.myProfile?.name}
              {/* User Name */}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.h4, width: '50%', alignSelf:'flex-start' }}>
              {dummyData.myProfile?.address}
              {/* User Adddress */}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.h5, alignSelf:'flex-start' }}>
              View Your Profile
            </Text>
          </View>
        </TouchableOpacity>
        {/* Drewer Items */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#fff',
              marginTop: 5,
            }}
          />
          <CustomDrawerItem
            lable={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => {
              setSelectedTab(constants.screens.home)
              navigation.navigate('MainLayout')
            }}
          />
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
          <CustomDrawerItem
            lable={constants.screens.Loan}
            icon={icons.coupon}
            isFocused={selectedTab == constants.screens.Loan}
            onPress={() => {
              setSelectedTab(constants.screens.Loan)
              navigation.navigate('MainLayout')
            }}
          />
          {/* Line Drawer */}
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
          <CustomDrawerItem
            lable={constants.screens.Setting}
            icon={icons.setting}
            isFocused={selectedTab == constants.screens.Setting}
            onPress={() => {
              setSelectedTab(constants.screens.Setting)
              navigation.navigate('MainLayout')
            }}
          />
          {/* Line Drawer */}
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
          <CustomDrawerItem
            lable={constants.screens.HelpCenter}
            icon={icons.help}
            isFocused={selectedTab == constants.screens.HelpCenter}
            onPress={() => {
              setSelectedTab(constants.screens.HelpCenter)
              navigation.navigate('MainLayout')
            }}
          />
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
          <CustomDrawerItem
            lable={constants.screens.Account}
            icon={icons.profile}
            isFocused={selectedTab == constants.screens.Account}
            onPress={() => {
              setSelectedTab(constants.screens.Account)
              navigation.navigate('MainLayout')
            }}
          />
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
        </View>
        <View style={{ marginBottom: 11 }}>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
          <CustomDrawerItem lable="Logout" icon={icons.logout} />
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }} />
        </View>
      </View>
    </DrawerContentScrollView>
  )
}
const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
  const [progress, setProgress] = React.useState(new Animated.Value(0))

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  })

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  })

  const animatedStyle = { borderRadius, transform: [{ scale }] }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.darkBlue }}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: '65%',
          paddingRight: 20,
          backgroundColor: 'transparent',
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress)
          }, 0)
          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          )
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  )
}

// export default CustomDrawer;

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
