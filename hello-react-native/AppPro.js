import { View, Text, StyleSheet, useColorScheme, Alert } from "react-native";

function AppPro(params) {

  const isDarkMode = useColorScheme() === 'dark';

  const alertMe =()=>{
    Alert.alert('React native','you clicked the text!')
  }
  return (
    <View style={styles.container}>
      <Text onPress={alertMe} style={isDarkMode ? styles.whiteText : styles.darkText}>Hello Reat Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    alignItems: 'center',
    justifyContent:'center',

  },
  whiteText:{
    color:'white',
    fontSize:25,
  },
  darkText:{
    color:'green',
    alignItems: 'center',
    justifyContent:'center',
  }
});

export default AppPro;
