import React from 'react'
import { StyleSheet,ImageBackground } from 'react-native';
const MenHome = () => {
  return (
    <ImageBackground  style={{flex: 1}}
    source={require("../../assets/man.jpg")}> 
    
    </ImageBackground>
  )
}

const styles=StyleSheet.create({
    container: {
      flex: 1,
    },
  
  
  });

export default MenHome;