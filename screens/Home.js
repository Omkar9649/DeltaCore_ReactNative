import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'

const Home = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('main')
        },3000)
    })
    const pressHandler=()=>{
        navigation.navigate('main')
    }
    return (
        <View style={styles.con}>
            <StatusBar hidden={true} />
            <ImageBackground
                style={styles.con}
                imageStyle={styles.Imgcon}
                source={require('../images/gears.jpg')}
                resizeMode='cover' >

                <View style={styles.txtCon}>
                    <Text style={styles.txt}>Welcome To DeltaCore</Text>
                </View>
                <View style={styles.butCon}>
                    <TouchableOpacity onPress={pressHandler}>
                        <Text style={styles.butTxt}>Start</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>


    )
}

export default Home

const styles = StyleSheet.create({
    //main container
    con: {
        flex: 1
    },

    //imageCon
    Imgcon: {
        opacity: 0.50,
        flex: 1,

    },

    //text
    txtCon: {
        borderRadius: 10,
        marginTop: "40%",
        alignItems: 'center',
        height: "10%",
        justifyContent: 'center',
        width: "80%",
        marginLeft: 40,
        backgroundColor: "#b30000",
        elevation: 10
    },
    txt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },

    ///button
    butCon:{
        
        marginTop:100,
        alignItems:'center',
        width:"30%",
        marginLeft:140,
        height:40,
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:"#b30000",
        borderRadius:15
    },

    butTxt:{
       fontSize:20,
       fontWeight:'bold',
       color:"white"
    }


})