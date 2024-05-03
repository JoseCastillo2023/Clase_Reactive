import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

export default function Input({title_placeholder, tipo_keyboard, numero, setNumero}) {
  return (
 <>
       <TextInput
      style={styles.Input}
      placeholder={title_placeholder}
      keyboardType='number-pad' 
      value={numero}
      onChangeText={setNumero}/>
 </>

 
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Input:{
      backgroundColor: 'lightgrey', 
      width:150, 
      padding:15,
      color:'black', 
      margin:10
    }
  });