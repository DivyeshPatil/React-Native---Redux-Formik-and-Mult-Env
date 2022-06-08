import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from '../../constants'

export default function LoginWithUserId() {
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
            User ID <Text style={{ color: 'red' }}>*</Text>
          </Text>
          <TextInput
            placeholder="Enter User ID"
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
            numberOfLines={1}
          />
          <Text
            style={{
              alignSelf: 'flex-end',
              fontSize: 12,
              fontWeight: 'bold',
              fontFamily: 'Montserrat-Regular',
              color: COLORS.blue,
              textAlign: 'left',
              fontStyle: 'normal',
              letterSpacing: 0.0813333,
              marginTop: 10,
            }}
          >
            Forgot User ID?
          </Text>
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
              marginTop: 30,
            }}
          >
            Password <Text style={{ color: 'red' }}>*</Text>
          </Text>
          <TextInput
            placeholder="Enter Password"
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
            numberOfLines={1}
          />
          <Text
            style={{
              alignSelf: 'flex-end',
              fontSize: 12,
              fontWeight: 'bold',
              fontFamily: 'Montserrat-Regular',
              marginBottom: 10,
              color: COLORS.blue,
              textAlign: 'left',
              fontStyle: 'normal',
              letterSpacing: 0.0813333,
              marginTop: 10,
            }}
          >
            Forgot Password?
          </Text>
        </View>
      </ScrollView>
      <View style={{ alignItems:'center', justifyContent: 'center',}}>
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
          flex: 0.99,
          alignItems: 'center',
          paddingBottom: 10,
          backgroundColor: COLORS.darkBlue,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight:'bold', color: COLORS.white, marginTop: 15 }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})
