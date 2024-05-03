import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './src/components/Input'
import Button from './src/components/Boton'
import { useState } from 'react';

export default function App() {

  //state de la app
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  const sumar = () => {
    let suma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(suma)
    //Alert.alert("El resultado de la suma es: " + suma)
  }

  const restar = () => {
    let restar = parseFloat(numero1) - parseFloat(numero2);
    setResultado(restar)
    //Alert.alert("El resultado de la suma es: " + suma)
  }

  const multiplicar = () => {
    let mult = parseFloat(numero1) * parseFloat(numero2);
    setResultado(mult)
    //Alert.alert("El resultado de la suma es: " + suma)
  }

  const division = () => {
    let div = parseFloat(numero1) / parseFloat(numero2);
    setResultado(div)
    //Alert.alert("El resultado de la suma es: " + suma)
  }

  const reset = () => {
    setResultado(0);
    setNumero1(0)
    setNumero2(0)
  }

  return (
    <View style={styles.container}>
      <Text>App para sumar </Text>
      <Input
        title_placeholder={'Ingrese numero 1: '}
        numero={numero1}
        setNumero={setNumero1}
      />
      <Input
        title_placeholder={'Ingrese numero 2: '}
        numero={numero2}
        setNumero={setNumero2}
      />

      <Button
        title_button={'Sumar'}
        action_button={sumar} />

      <Text></Text>

      <Button
        title_button={'Restar'}
        action_button={restar} />

      <Text></Text>

      <Button
        title_button={'Multiplicar'}
        action_button={multiplicar} />

      <Text></Text>

      <Button
        title_button={'Division'}
        action_button={division} />

      <Text></Text>

      <Text>Resuldato de la suma es: {resultado}</Text>

      <Text></Text>

      <Button

        title_button={'Restablecer'}
        action_button={sumar} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input: {
    backgroundColor: 'lightgrey',
    width: 150,
    padding: 15,
    color: 'black',
    margin: 10
  }
});
