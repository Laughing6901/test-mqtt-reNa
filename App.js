import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  BackHandler,
  Alert,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
    render() {
      return (
        <View
          style = {styles.container}>
          <View
            style ={styles.boxContainer}>
            <View
              style ={styles.boxInner}>
              <Text
                style = {styles.text}>3023</Text>
            </View>
          </View>
          <View
            style = {styles.boxButton}>
            <TouchableOpacity
              style = {styles.btn}
              
            />
            <TouchableOpacity
              style={styles.btn}

            />

          </View>
        </View>
      )
    }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'gray',
  },
  boxContainer: {
    flex: 6,
    alignItems:'center',
    justifyContent:'center'
  },
  boxButton :{
    flex: 3,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'

  },
  boxInner: {
    borderWidth: 3,
    width: width*3/4,
    height: height*1/3,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    color: 'black',
    fontSize:100,
    fontWeight: 'bold'
  },
  btn: {
    borderWidth: 1,
    borderRadius: 30,
    width: width*1/3,
    height:60,
    backgroundColor: 'blue'
  }

  
})