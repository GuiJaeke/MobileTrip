import {React, useState} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const login = ({ navigation }) => {

     return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.title}>Realize seu Login</Text>
               
            </View>
        </ScrollView>    
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
      },
    title: {
        display: 'flex',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
      },
})

export default login