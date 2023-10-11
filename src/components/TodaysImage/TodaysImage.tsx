import { View, StyleSheet, Text, Image, Button } from 'react-native'
import useFetchTodayImage from './hooks/useFetchTodayImage'
import { useNavigation } from '@react-navigation/native'
import { PostImageNavigationProps } from '../../types/core'
function TodaysImage() {
    
    const { navigate } = useNavigation<PostImageNavigationProps>();
    const { loading, todayImage } = useFetchTodayImage()
    if (loading) {
        return <Text>... loading </Text>
    }

    const handleViewPress = () => {
        navigate('Detail', todayImage)
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: todayImage?.url }} style={styles.image} />
            <Text style={styles.title}>{todayImage?.title}</Text>
            <Text style={styles.date}>{todayImage?.date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Go to Details" onPress={handleViewPress} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(21, 30, 99, 1)',
        marginVertical: 16,
        borderRadius: 12,
        padding: 10,
    },
    image: {
        borderWidth: 2,
        width: '100%',
        height: 180,
        borderRadius: 12,
        borderColor: 'rgba(83, 100, 228, 1)'
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 16,
    },
    date: {
        color: '#fff',
        fontSize: 15,
        marginBottom: 16,
    },
    buttonContainer: {
        alignItems: 'flex-end',
    }
})

export default TodaysImage