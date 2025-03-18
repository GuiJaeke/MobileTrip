import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/trip.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Bem-vindo ao App de Viagens!</Text>
        <Button title="Minhas Viagens" onPress={() => navigation.navigate('MinhasViagens')} />
        <Button title="Ver Viagens" onPress={() => navigation.navigate('Viagens')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Home;
