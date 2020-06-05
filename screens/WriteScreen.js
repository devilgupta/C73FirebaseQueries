import React, {Component} from 'react';
import {Text,View,TextInput} from 'react-native';

export default class WriteScreen extends React.Component{
      render(){
        return(
            <View style={{justifyContent:'center', alignContent:'center'}}>
                <Text style={{marginTop:20, marginLeft:100}}>Write Your story here!!</Text>
                <TextInput 
                style={{margin:10,borderWidth:3}}
                multiline
                numberOfLines={20}
                >

                </TextInput>
            </View>
        )
    }
}