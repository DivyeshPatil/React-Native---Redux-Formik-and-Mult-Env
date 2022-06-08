import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from 'react-native'
import Animated from 'react-native-reanimated'
import { connect } from 'react-redux'
import { setSelectedTab } from '../../stores/tab/tabActions'
import {
  LoginWithMobileNo,
  LoginWithEmail,
  LoginWithUserId,
} from '../../screens'
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
  images,
} from '../../constants'
import { Header } from '../../components'

const CenterTabButton = ({
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
              width: '100%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              // borderRadius: 10,
              borderWidth: 1,
              borderColor: COLORS.lightGray1,
              backgroundColor: isFocused
                ? COLORS.darkBlue
                : COLORS.transparentBlack1,
            },
            innerContainerStyle,
          ]}
        >
          <Text
            numberOfLines={1}
            style={{
              alignSelf: 'center',
              color: isFocused ? COLORS.white : COLORS.gray,
              fontWeight: 'bold',
              ...FONTS.body4,
            }}
          >
            {label}
          </Text>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const Login = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab
}) => {
  // FlatList Login
  const flatListRef = React.useRef()

  React.useEffect(() => {
    setSelectedTab(constants.screens.LoginWithMobileNo)
  }, [])

  React.useEffect(() => {
    if (selectedTab == constants.screens.LoginWithMobileNo) {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false,
      })
    }

    if (selectedTab == constants.screens.LoginWithEmail) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      })
    }

    if (selectedTab == constants.screens.LoginWithUserId) {
      flatListRef?.current?.scrollToIndex({
        index: 2,
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
          // backgroundColor: COLORS.darkBlue,
        }}
        title="Login Screen"
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: -20,
            }}
            onPress={() => console.log('Back Pressed')}
          >
            <Image
              style={{ tintColor: COLORS.black, height: 20, width: 10 }}
              source={icons.back}
            />
          </TouchableOpacity>
        }
      />
      {/* Middle */}
      <View
        style={{
          height: 100,
          justifyContent: 'flex-end',
          left: 0,
          top: 5,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: COLORS.black,
              textAlign: 'left',
              fontStyle: 'normal',
              letterSpacing: 0.0813333,
              alignSelf: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            To view account details, Login using
          </Text>
        </View>
        {/* Tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <CenterTabButton
            label={constants.screens.LoginWithMobileNo}
            // icons={icons.coupon}
            isFocused={selectedTab == constants.screens.LoginWithMobileNo}
            onPress={() => setSelectedTab(constants.screens.LoginWithMobileNo)}
          />
          <CenterTabButton
            label={constants.screens.LoginWithEmail}
            // icons={icons.coupon}
            isFocused={selectedTab == constants.screens.LoginWithEmail}
            onPress={() => setSelectedTab(constants.screens.LoginWithEmail)}
          />
          <CenterTabButton
            label={constants.screens.LoginWithUserId}
            // icons={icons.coupon}
            isFocused={selectedTab == constants.screens.LoginWithUserId}
            onPress={() => setSelectedTab(constants.screens.LoginWithUserId)}
          />
        </View>
      </View>
      {/* Content */}
      <View style={{ flex: 1, top: 20 }}>
        {/* <Text>Login</Text> */}
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.center_tabs}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: SIZES.height,
                  width: SIZES.width,
                }}
              >
                {item.label == constants.screens.LoginWithMobileNo && (
                  <LoginWithMobileNo />
                )}
                {item.label == constants.screens.LoginWithEmail && (
                  <LoginWithEmail />
                )}
                {item.label == constants.screens.LoginWithUserId && (
                  <LoginWithUserId />
                )}
              </View>
            )
          }}
        />
      </View>
    </Animated.View>
  )
}

// export default Login;

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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
