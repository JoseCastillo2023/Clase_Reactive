import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

    // Estado para almacenar las tareas
    const [tareas, setTareas] = useState([]);
    // Estado para almacenar la tarea actual
    const [tareaActual, setTareaActual] = useState('');

    // Función para manejar cambios en el input de la tarea
    const handleChange = (text) => {
        setTareaActual(text);
    };

    // Función para agregar una nueva tarea
    const agregarTarea = () => {
        if (tareaActual.trim() !== '') {
            setTareas([...tareas, tareaActual]);
            setTareaActual('');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Ejercicio de clases</Text>
            <Text></Text>
            <Text>Listado de tareas</Text>
            <TextInput
                style={styles.input}
                value={tareaActual}
                onChangeText={handleChange}
                placeholder="Escribe una nueva tarea"
            />
            <TouchableOpacity style={styles.button} onPress={agregarTarea}>
                <Text>Agregar tarea</Text>
            </TouchableOpacity>
            <View style={styles.tareasContainer}>
                <FlatList
                    data={tareas}
                    renderItem={({ item }) => (
                        <View style={styles.tareaItem}>
                            {item.split(' ').map((word, index) => (
                                <Text key={index}>{word}</Text>
                            ))}
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <StatusBar style="auto" />
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: '80%',
    },
    button: {
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 5,
    },
    tareasContainer: {
        marginTop: 20,
        width: '80%',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
    },
    tareaItem: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: 'gray',
    },
});
