import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Formik } from 'formik'
import * as yup from 'yup'

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height

// yup schema: login vaidation schema
const loginVaidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter vaild email id')
    .required('Email ID is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Password must contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
})

const LoginFormik = ({ navigation }) => {
  // for password
  const [showPassword, setshowPassword] = useState(false)
  return (
    //   Now add formik out side of our rapper (rap in our View or ScrollView)
    <Formik
      // here in initialValues - email & password spelling must be same as we are write in loginVaidationSchema
      initialValues={{ email: '', password: '' }}
      validateOnMount={true}
      // onSubmit={(values) => console.log((JSON.stringify(values)))}
      // onSubmit={(values) => alert(JSON.stringify(values))}
      onSubmit={(values) => navigation.navigate('Login')}
      validationSchema={loginVaidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Top Part */}
          <ImageBackground
            source={require('../../assets/images/backgroundImage.jpg')}
            style={{ height: DEVICE_HEIGHT / 2.5 }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View
                style={{
                  borderWidth: 5,
                  height: 80,
                  width: 80,
                  borderRadius: 100,
                  borderColor: '#fff',
                  marginTop: -20,
                }}
              >
                <FontAwesome
                  name="user-o"
                  color={'#ffffff'}
                  size={40}
                  style={{ alignSelf: 'center', marginTop: 12 }}
                />
              </View>
              <Text
                disabled={!isValid}
                style={{
                  color: !isValid ? '#666666' : '#ffffff',
                  fontSize: 21,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  marginTop: 20,
                }}
              >
                {!isValid ? 'Login' : 'Login Successful'}
              </Text>
            </View>
          </ImageBackground>
          {/* Middle Part */}
          <View
            style={{
              flex: 1.5,
              backgroundColor: '#ffffff',
              bottom: 50,
              borderTopStartRadius: 30,
              borderTopEndRadius: 30,
            }}
          >
            <View style={{ padding: 30 }}>
              {/* Welcome Part */}
              <Text
                style={{ color: '#000080', fontSize: 32, fontWeight: 'bold' }}
              >
                Welcome
              </Text>
              {/* Login Part */}
              <View style={{ marginTop: 10 }}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 8,
                  }}
                >
                  Email ID
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    borderWidth: 1,
                    padding: 15,
                    borderRadius: 10,
                    borderColor: '#000',
                    borderWidth: 1.5,
                  }}
                >
                  <MaterialCommunityIcons
                    name={!errors.email ? 'email-check' : 'email-remove'}
                    color="grey"
                    size={20}
                    style={{ color: !errors.email ? '#000080' : '#666666' }}
                  />
                  <TextInput
                    placeholder="Enter Your Email ID"
                    placeholderTextColor="#666666"
                    style={{
                      marginTop: Platform.OS === 'ios' ? 0 : -12,
                      marginLeft: 10,
                      color: '#000',
                      marginBottom: -10,
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    // formik content validation
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {errors.email && touched.email && (
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'red',
                      marginTop: 5,
                      marginLeft: 10,
                    }}
                  >
                    {errors.email}
                  </Text>
                )}
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 8,
                    marginTop: 15,
                  }}
                >
                  Password
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    borderWidth: 1,
                    padding: 15,
                    borderRadius: 10,
                    borderColor: '#000',
                    borderWidth: 1.5,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setshowPassword(!showPassword)}
                  >
                    <Feather
                      name={!showPassword ? 'eye-off' : 'eye'}
                      color="grey"
                      size={20}
                      style={{ color: !showPassword ? '#666666' : '#000080' }}
                    />
                  </TouchableOpacity>
                  <TextInput
                    placeholder="Enter Your Password"
                    placeholderTextColor="#666666"
                    style={{
                      marginTop: Platform.OS === 'ios' ? 0 : -12,
                      marginLeft: 10,
                      color: '#000',
                      marginBottom: -10,
                    }}
                    autoCapitalize="none"
                    // formik content for validation
                    secureTextEntry={!showPassword}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </View>
                {errors.password && touched.password && (
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'red',
                      marginTop: 5,
                      marginLeft: 10,
                    }}
                  >
                    {errors.password}
                  </Text>
                )}
              </View>
              {/* Forgot Part */}
              <View style={{ marginTop: 10, alignItems: 'flex-end' }}>
                <TouchableOpacity>
                  <Text style={{ color: '#000080' }}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              {/* Login Button */}
              <View
                style={{
                  height: 120,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TouchableOpacity
                  disabled={!isValid}
                  style={{
                    // width: DEVICE_WIDTH /1.2 ,
                    width: '100%',
                    height: 50,
                    backgroundColor: isValid ? '#000080' : '#cacfca',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}
                  //   onPress={() => navigation.navigate('Home')}
                  onPress={handleSubmit}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 21,
                      fontWeight: 'bold',
                    }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: -5,
                }}
              >
                <Text style={{ color: '#000', fontSize: 16 }}>
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterFormik')} >
                  <Text
                    style={{
                      color: 'red',
                      borderBottomWidth: 1,
                      borderBottomColor: 'red',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}
                  >
                    {' '}
                    Register Now{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  )
}

export default LoginFormik

const styles = StyleSheet.create({})
