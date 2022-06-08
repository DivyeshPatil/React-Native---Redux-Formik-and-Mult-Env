// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function RegisterFormik() {
//   return (
//     <View>
//       <Text>RegisterFormik</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Formik } from 'formik'
import * as yup from 'yup'
import { icons, COLORS } from '../../constants'

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height

// yup schema: registration vaidation schema
const registrationVaidationSchema = yup.object().shape({
  userName: yup
    .string()
    .trim()
    .min(3, 'Invalid user name')
    .required('User name is required'),
  mobileNumber: yup
    .string()
    .max(10, ({ max }) => `Mobile number must be ${max} digit`)
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Invalid phone number',
    )
    .required('Mobile number is required'),
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
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .equals([yup.ref('password')], 'Password does not match'),
})

const RegisterFormik = ({ navigation }) => {
  // for password and confirmPassword
  const [showPassword, setshowPassword] = useState(false)
  const [showConfirmPassword, setshowConfirmPassword] = useState(false)
  return (
    //   Now add formik out side of our rapper (rap in our View or ScrollView)
    <Formik
      // here in initialValues - userName, email, password & confirmPassword spelling must be same as we are write in registrationVaidationSchema
      initialValues={{
        userName: '',
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validateOnMount={true}
      // onSubmit={(values) => console.log((JSON.stringify(values)))}
      onSubmit={(values) => alert(JSON.stringify(values))}
      validationSchema={registrationVaidationSchema}
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
            <View style={{ top: 20, left: 10, position: 'absolute' }}>
              <TouchableOpacity onPress={() => navigation.navigate('LoginFormik')}>
              <Image
                source={icons.back}
                style={{
                  height: 21,
                  width: 21,
                  tintColor: COLORS.white,
                }}
              />
              </TouchableOpacity>
            </View>
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
                  name="user-plus"
                  color={'#ffffff'}
                  size={35}
                  style={{ alignSelf: 'center', marginTop: 15, marginLeft: 5 }}
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
                {!isValid ? 'Registration' : 'Registration Successful'}
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
                {/* User Name */}
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 8,
                  }}
                >
                  User Name
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
                  <FontAwesome5
                    name={!errors.userName ? 'user-check' : 'user-times'}
                    color="grey"
                    size={20}
                    style={{ color: !errors.userName ? '#000080' : '#666666' }}
                  />
                  <TextInput
                    placeholder="Enter Your User Name"
                    placeholderTextColor="#666666"
                    style={{
                      marginTop: Platform.OS === 'ios' ? 0 : -12,
                      marginLeft: 10,
                      color: '#000',
                      marginBottom: -10,
                    }}
                    autoCapitalize="none"
                    // formik content validation
                    onChangeText={handleChange('userName')}
                    onBlur={handleBlur('userName')}
                    value={values.userName}
                  />
                </View>
                {errors.userName && touched.userName && (
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'red',
                      marginTop: 5,
                      marginBottom: 15,
                      marginLeft: 10,
                    }}
                  >
                    {errors.userName}
                  </Text>
                )}

                {/* Mobile Number */}
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 8,
                    marginTop: 15,
                  }}
                >
                  Mobile Number
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
                  <MaterialIcons
                    name={
                      !errors.mobileNumber ? 'mobile-friendly' : 'mobile-off'
                    }
                    color="grey"
                    size={20}
                    style={{
                      color: !errors.mobileNumber ? '#000080' : '#666666',
                    }}
                  />
                  <TextInput
                    placeholder="Enter Mobile Number"
                    placeholderTextColor="#666666"
                    style={{
                      marginTop: Platform.OS === 'ios' ? 0 : -12,
                      marginLeft: 10,
                      color: '#000',
                      marginBottom: -10,
                    }}
                    autoCapitalize="none"
                    keyboardType="number-pad"
                    // formik content validation
                    onChangeText={handleChange('mobileNumber')}
                    onBlur={handleBlur('mobileNumber')}
                    value={values.mobileNumber}
                  />
                </View>
                {errors.mobileNumber && touched.mobileNumber && (
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'red',
                      marginTop: 5,
                      //   marginBottom: 15,
                      marginLeft: 10,
                    }}
                  >
                    {errors.mobileNumber}
                  </Text>
                )}

                {/* Email ID */}
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 8,
                    marginTop: 15,
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

                {/* Password */}
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

                {/* Confirm Password */}
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 8,
                    marginTop: 15,
                  }}
                >
                  Confirm Password
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
                    onPress={() => setshowConfirmPassword(!showConfirmPassword)}
                  >
                    <Feather
                      name={!showConfirmPassword ? 'eye-off' : 'eye'}
                      color="grey"
                      size={20}
                      style={{
                        color: !showConfirmPassword ? '#666666' : '#000080',
                      }}
                    />
                  </TouchableOpacity>
                  <TextInput
                    placeholder="Enter Your Confirm Password"
                    placeholderTextColor="#666666"
                    style={{
                      marginTop: Platform.OS === 'ios' ? 0 : -12,
                      marginLeft: 10,
                      color: '#000',
                      marginBottom: -10,
                    }}
                    autoCapitalize="none"
                    // formik content for validation
                    secureTextEntry={!showConfirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                </View>
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'red',
                      marginTop: 5,
                      marginLeft: 10,
                    }}
                  >
                    {errors.confirmPassword}
                  </Text>
                )}
              </View>

              {/* Registration Button */}
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
                    Registration
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
                  Already have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('LoginFormik')}
                >
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
                    Login{' '}
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

export default RegisterFormik

const styles = StyleSheet.create({})
