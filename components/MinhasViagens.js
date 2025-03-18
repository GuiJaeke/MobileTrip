import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const viagens = [
  { id: '1', destino: 'Rio de Janeiro', data: '12/04/2024' },
  { id: '2', destino: 'São Paulo', data: '18/05/2024' },
  { id: '3', destino: 'Salvador', data: '22/06/2024' },
];

const MinhasViagens = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Viagens</Text>
      <FlatList
        data={viagens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.viagemItem}>
            <Text style={styles.destino}>{item.destino}</Text>
            <Text style={styles.data}>Data: {item.data}</Text>
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
  },
  destino: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  data: {
    fontSize: 16,
    color: '#555',
  },
});

export default MinhasViagens
