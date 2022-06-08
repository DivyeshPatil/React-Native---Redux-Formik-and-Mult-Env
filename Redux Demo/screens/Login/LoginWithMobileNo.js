import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from '../../constants'
import { useNavigation } from '@react-navigation/native';

export default function LoginWithMobileNo() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView
        style={{
          backgroundColor: COLORS.white,
        }}
        keyboardShouldPersistTaps="always"
      >
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            paddingVertical: 15,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              fontFamily: 'Montserrat-Regular',
              marginBottom: 10,
              color: COLORS.black,
              textAlign: 'left',
              fontStyle: 'normal',
              letterSpacing: 0.0813333,
            }}
          >
            Mobile Number <Text style={{ color: 'red' }}>*</Text>
          </Text>
          <TextInput
            placeholder="+91 Enter registered Mobile Number"
            placeholderTextColor={{ color: COLORS.black }}
            style={{
              fontSize: 12,
              paddingLeft: 10,
              marginTop: -3,
              marginBottom: -3,
              fontFamily: 'Montserrat-Regular',
              letterSpacing: 0.162667,
              color: 'black',
              // borderWidth: 1,
              borderBottomWidth: 1,
              borderRadius: 4,
              borderColor: COLORS.black,
            }}
            keyboardType="phone-pad"
            numberOfLines={1}
            maxLength={10}
          />
        </View>
      </ScrollView>
      <View style={{ alignItems:'center', justifyContent: 'center',}}>
        <Text style={{ fontSize: 13, color: COLORS.gray, marginBottom: 10 }}>
          The OTP will be sent to your registered mobile number
        </Text>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Text style={{ fontSize: 13, color: COLORS.gray }}>
            By proceding ahead you agrss to
          </Text>
          <Text style={{ fontSize: 13, color: COLORS.blue, borderBottomWidth: 1, borderBottomColor: COLORS.blue }}>
            Terms and Condations
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          flex: 0.60,
          alignItems: 'center',
          paddingBottom: 10,
          backgroundColor: COLORS.darkBlue,
        }}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={{ fontSize: 16, fontWeight:'bold', color: COLORS.white, marginTop: 15 }}>
          Get OTP
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

