import { StyleSheet, Text, View, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const RenderData = (props) => {


    // console.log(props.data.item);
    const data = props.data.item;
    const desp = data.description;
    const url = data.image
    // console.log(url);
    // console.log(data);


    return (

        <View style={styles.con}>
            <View style={styles.txtCon}>

                <Text style={styles.mainTxt}>{data.name}</Text>
            </View>
            <View style={styles.despCon}>
                <Text style={styles.txt}>Description:</Text>
                <Text style={styles.txt}>{data.description}</Text>
            </View>
            <View style={styles.prCon}>
                <Text style={styles.txt}> ProductId:{data.prId}</Text>
            </View>

        </View>
    )
}

export default RenderData

const styles = StyleSheet.create({
    con: {
        marginVertical: 20,
        backgroundColor:'#FFE4C4',
        borderRadius:20,
        width:"90%",
        marginLeft:20,
        height: 120,
        alignItems: 'center',
        justifyContent:'center',
        elevation:10
    },

    //mainTxt
    txtCon:{
        marginTop:5,
        borderBottomWidth:2,
        borderColor:'black',
        
    },
    mainTxt:{
        fontSize:25,
        fontWeight:'bold',
        color:'black'
    },

    //description
    despCon:{
        flexDirection:'row',
        marginVertical:10
    },
    txt:{
        fontWeight:'bold',
        color:'black'
    }
})