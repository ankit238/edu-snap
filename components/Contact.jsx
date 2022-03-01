import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { 
  useFonts,
  
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
  
   
  } from '@expo-google-fonts/josefin-sans';

const Contact = () => {
  return (
    <View style={styles.mainContainer}>
    <Text style={styles.mainHeader}> Let's Talk</Text>
    <Text style={styles.description}>
      you can reach us anytime via kumarankitthakur42@gmail.com
    </Text>

<View style={styles.inputContainer}>
<Text style={styles.labels}>Enter Your name</Text>
 <TextInput
 style={styles.inputStyle}
 autoCapitalize="none"
autoCorrect={false}
   />

</View>

<View style={styles.inputContainer}>
<Text style={styles.labels}>Enter Your Email</Text>
 <TextInput
 style={styles.inputStyle}
 autoCapitalize="none"
autoCorrect={false}
   />

</View>

<View style={styles.inputContainer}>
<Text style={styles.labels}>Send your queries</Text>
 <TextInput
  multiline
 numberOfLines={4}
 style={styles.inputStyle}
 autoCapitalize="none"
autoCorrect={false}
   />

</View>

<TouchableOpacity
        style={styles.button}
    
      >
        <Text>Press Here</Text>
      </TouchableOpacity>

   </View>



  )
}

export default Contact

const styles = StyleSheet.create({
mainContainer:{
  height:"100%",
  paddingHorizontal:30,
  paddingTop:30,
  backgroundColor:"#fff",

},
mainHeader:{
  fontSize:25,
  color:"#344055",
  fontWeight:"500",
  paddingTop:20,
  paddingBottom:15,
  textTransform:"capitalize",
  fontFamily:"bold",
},

description:{
  fontSize:20,
  color:"#7d7d7d",
  paddingBottom:20,
  lineHeight:25,
  fontFamily:"regular"

},
inputContainer:{
  marginTop:5,
},

labels:{
  fontSize:18,
  color:"#7d7d7d",
  marginTop:10,
  marginBottom:5,
  lineHeight:25,
  fontFamily:"regular",
},

inputStyle:{
  borderWidth:1,
  borderColor:"rgba(0,0,0,0.3)",
  paddingHorizontal:15,
  paddingVertical:7,
  borderRadius:10,
  fontFamily:"regular",
  fontSize:18,
},
button: {
  alignItems: "center",
  backgroundColor: "#1e90ff",
  padding: 10,
  borderRadius:10,
  marginTop:10,
},
})