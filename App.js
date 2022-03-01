import { StyleSheet, Text, View ,Image} from 'react-native';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './components/About';
import Contact from './components/Contact';
import UserData from './components/UserData';
import Course from './components/Course';
import CourseDetails from './components/CourseDetails';

import { 
useFonts,

  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,

 
} from '@expo-google-fonts/josefin-sans';

import { 

  Nunito_600SemiBold,

  Nunito_700Bold,


} from '@expo-google-fonts/nunito'
import AppLoading from 'expo-app-loading';








export default function App() {


  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if(!fontsLoaded){
    <AppLoading />
  }

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name='home'
        options={{
          headerShown:false,
        }}
        >
          {(props)=><Home {...props} channelName={"Edu Snap"} />}
        </Stack.Screen>

        <Stack.Screen name='course' component={Course} 
options={{
  headerTitleStyle:{
    fontSize:25,
    fontFamily:"JosefinSans_400Regular",
  },

  headerTitle:"Courses",
  headerTitleAlign:"center",
}}

        />
        <Stack.Screen name='About' component={About} 

options={{
  headerTitleStyle:{
    fontSize:25,
    fontFamily:"JosefinSans_400Regular",
  },

  headerTitle:"Courses",
  headerTitleAlign:"center",
}}
        />
        <Stack.Screen name='Contact' component={Contact} 

options={{
  headerTitleStyle:{
    fontSize:25,
    fontFamily:"JosefinSans_400Regular",
  },

  headerTitle:"Courses",
  headerTitleAlign:"center",
}}
        />
        <Stack.Screen name='Student' component={UserData} 

options={{
  headerTitleStyle:{
    fontSize:25,
    fontFamily:"JosefinSans_400Regular",
  },

  headerTitle:"Courses",
  headerTitleAlign:"center",
}}
        />

<Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );  
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  
});
