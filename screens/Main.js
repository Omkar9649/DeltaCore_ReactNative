import React, { useState } from 'react'
import { StyleSheet, Text, Alert,View, ImageBackground, Modal } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import RenderData from '../components/RenderData'


const Dummy_Data = [
  {
    prId: 1001,
    name: 'Tools Gears',
    description: 'Gear Tools Production Specification',
    image: 'images\gears.jpeg'
  },
  {
    prId: 2001,
    name: 'Panels',
    description: 'Switch Gear Panels',
    image: 'images\switchgear.jpeg'
  },
  {
    prId: 2008,
    name: 'DocTonar',
    description: 'Document Solar Objects',
    image: 'images\docTonar.jpeg'
  }
]

const Main = ({ navigation }) => {

  

  const homehandler = () => {
    navigation.navigate('home')
  };

  const contactHandler=()=>{
    Alert.alert("Phone:7021899555","Email:owner@gmail.com")
    
  }




  return (
    <View style={styles.con}>
  
      <ImageBackground
        style={styles.con}
        imageStyle={styles.Imgcon}
        source={require('../images/gears.jpg')}
        resizeMode='cover' >

        <View style={styles.TxtCon}>
          <Text style={styles.txt}>Our Products</Text>
        </View>
        <View style={styles.flatCon}>
          <FlatList data={Dummy_Data}
            renderItem={(item) => <RenderData data={item} />}
            keyExtractor={item => item.prId}
          />
        </View>
        <View style={styles.bottonCon}>
          <View style={styles.hcCon}>
            <TouchableOpacity onPress={contactHandler}>
              <Text style={styles.butTxt}>Contact</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.hcCon}>
            <TouchableOpacity onPress={homehandler}>
              <Text style={styles.butTxt}>Home</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>



    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  con: {
    flex: 1
  },
  Imgcon: {
    opacity: 0.30,
    flex: 1,

  },

  //txt
  TxtCon: {
    borderRadius: 10,
    marginTop: 30,
    height: 50, alignItems: 'center',
    backgroundColor: "#b30000",
    justifyContent: 'center',
    width: "50%",
    marginLeft: 100,
    elevation: 10
  },
  txt: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',

  },

  //flatList
  flatCon: {

    marginTop: 60
  },
  //bottombuttons
  bottonCon: {

    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
    marginTop: 15

  },

  hcCon: {

    width: "40%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#b30000",
    borderRadius: 20,
    elevation: 10

  },
  butTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  modal:{
    flex:1
  }




})