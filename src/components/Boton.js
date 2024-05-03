import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Button({title_button, action_button}) {
  return (

      <TouchableOpacity    
      style={styles.btn}
      onPress={action_button}
      >
      <Text 
      style={styles.text}
      >{title_button}</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor:'lightblue',
    padding:15,
    width:150
  }, 
  text:{
    textAlign:'center', 
    fontWeight:'900'
  }
});