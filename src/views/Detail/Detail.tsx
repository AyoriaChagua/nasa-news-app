import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../../types/core'
import Header  from '../../components/Header'

function Detail() {
    const { params: { title, url, date, explanation } } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>()
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Image source={{uri: url}} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.explanationContainer}>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(10, 15, 40)'
    },
    content: {
        backgroundColor: 'rgba(21, 30, 99, 1)',
        marginVertical: 16,
        borderRadius: 12,
        padding: 10,
        flex: 1
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    image: {
        borderWidth: 2,
        width: '100%',
        height: '50%',
        marginBottom: 10,
        borderRadius: 12,
        borderColor: 'rgba(83, 100, 228, 1)'
    },
    date: {
        color: '#fff'
    },
    explanationContainer:{
        marginVertical: 16
    },
    explanation: {
        color: '#fff'
    }
})

export default Detail