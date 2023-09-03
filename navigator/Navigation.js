import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home';
import Main from '../screens/Main';


const stack=createStackNavigator();


const Navigation = () => {
  return (
   <NavigationContainer>
    <stack.Navigator>
        <stack.Screen name='home' component={Home}  options={{headerShown:false}}/>
        <stack.Screen name='main' component={Main} options={{headerShown:false}} />
    </stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})