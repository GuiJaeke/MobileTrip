import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const viagensFake = [
  { id: '1', destino: 'Rio de Janeiro', data: '12/04/2024', valor: '800,00' ,imagem: require('../../assets/rio.jpg') },
  { id: '2', destino: 'Londres', data: '18/05/2024', valor: '2200,00' ,imagem: require('../../assets/londres.jpg') },
  { id: '3', destino: 'Roma', data: '22/06/2024',valor: '1500,00' , imagem: require('../../assets/roma.jpg') },
];

const Viagens = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viagens Disponíveis</Text>
      <FlatList
        data={viagensFake}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.viagemItem}>
            <Image source={item.imagem} style={styles.imagem} />
            <Text style={styles.destino}>{item.destino}</Text>
            <Text style={styles.data}>Data: {item.data}</Text>
            <Text style={styles.valor}>Valor: R${item.valor}</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Comprar</Text></TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  viagemItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  destino: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  data: {
    fontSize: 16,
    color: '#555',
  },
  valor: {
    fontSize: 16,
    color: 'green',
  },
  button: {
    fontSize: 16,
    backgroundColor: 'lightblue',
    padding:10,
    borderRadius:5,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 18
  }
});

export default Viagens;
