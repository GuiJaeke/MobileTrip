import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function detalhes() {
    return (
        <SafeAreaView>
            <View style={styles.principal}>
                    <Text style={styles.titulo}> Dica 1:</Text>
                    <Text style={styles.subtitulo}>Repertório de Conhecimento</Text>
                </View>
        </SafeAreaView>
    )
}