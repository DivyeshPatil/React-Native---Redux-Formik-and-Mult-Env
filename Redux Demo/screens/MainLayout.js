import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native'
import Animated  from 'react-native-reanimated'
import { connect } from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabActions'
import { Home, Loan, Setting, Account, HelpCenter } from '../screens'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'
import { Header } from '../components'

// for bottom tabs
const TabButton = ({
  label,
  icons,
  isFocused,
  onPress,
  outerContainerStyle,
  innerContainerStyle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          { flex: 1, alignItems: 'center', justifyContent: 'center' },
          outerContainerStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: 'column',
              width: 100,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}
        >
          <Image
            source={icons}
            style={{
              width: 26,
              height: 26,
              tintColor: isFocused ? COLORS.white : COLORS.darkGray,
            }}
          />
            <Text
              numberOfLines={1}
              style={{
                alignSelf:'center',
                color: isFocused ? COLORS.white : COLORS.darkGray,
                ...FONTS.h5,
              }}
            >
              {label}
            </Text>
  
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

// main layout
const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  // FlatList MainLayout
  const flatListRef = React.useRef()

  React.useEffect(() => {
    setSelectedTab(constants.screens.home)
  }, [])

  React.useEffect(() => {
    if (selectedTab == constants.screens.home) {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false,
      })
    } 

    if (selectedTab == constants.screens.Loan) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      })
    }

    if (selectedTab == constants.screens.Setting) {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false,
      })
    }

    if (selectedTab == constants.screens.HelpCenter) {
      flatListRef?.current?.scrollToIndex({
        index: 4,
        animated: false,
      })
    } 

    if (selectedTab == constants.screens.Account) {
      flatListRef?.current?.scrollToIndex({
        index: 5,
        animated: false,
      })
    }
  }, [selectedTab])

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...drawerAnimationStyle,
      }}
    >
      {/* Header */}
      <Header
        containerStyle={{
          height: 30,
          paddingHorizontal: SIZES.padding,
          marginTop: 10,
          alignItems: 'center',
        }}
        title={selectedTab}
        // OR
        // title={selectedTab.toUpperCase()}
        // OR Add App Name
        // title="Tata Capital"
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: -20
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Image
              style={{ tintColor: COLORS.black, height: 20, width: 20 }}
              source={icons.menu}
            />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: -10
            }}
            onPress={() => console.log('Logout Clicked')}
          >
            <Image
              source={dummyData?.myProfile?.logout}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        }
      />
      {/* Content */}
      <View style={{ flex: 1 }}>
        {/* <Text>MainLayout</Text> */}
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: SIZES.height,
                  width: SIZES.width,
                }}
              >
                {item.label == constants.screens.home && <Home />}
                {item.label == constants.screens.Loan && <Loan />}
                {item.label == constants.screens.Setting && <Setting />}
                {item.label == constants.screens.HelpCenter && <HelpCenter />}
                {item.label == constants.screens.Account && (
                  <Account />
                )}
              </View>
            )
          }}
        />
      </View>
      {/* Footer */}
      <View style={{ height: 80, justifyContent: 'flex-end'}}>
        {/* Tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingBottom: 10,
            paddingTop: 20,
            backgroundColor: COLORS.darkBlue,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            borderWidth: 5,
            borderColor: COLORS.white
          }}
        >
          <TabButton
            label={constants.screens.home}
            icons={icons.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => setSelectedTab(constants.screens.home)}
          />
          <TabButton
            label={constants.screens.Loan}
            icons={icons.coupon}
            isFocused={selectedTab == constants.screens.Loan}
            onPress={() => setSelectedTab(constants.screens.Loan)}
          />
          <TabButton
            label={constants.screens.Setting}
            icons={icons.setting}
            isFocused={selectedTab == constants.screens.Setting}
            onPress={() => setSelectedTab(constants.screens.Setting)}
          />
          <TabButton
            label={constants.screens.HelpCenter}
            icons={icons.help}
            isFocused={selectedTab == constants.screens.HelpCenter}
            onPress={() => setSelectedTab(constants.screens.HelpCenter)}
          />
          <TabButton
            label={constants.screens.Account}
            icons={icons.profile}
            isFocused={selectedTab == constants.screens.Account}
            onPress={() => setSelectedTab(constants.screens.Account)}
          />
        </View>
      </View>
    </Animated.View>
  )
}

// export default MainLayout;

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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
