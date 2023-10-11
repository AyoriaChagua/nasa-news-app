import { View, Text, StyleSheet, Button } from 'react-native'
import { Post, PostImageNavigationProps} from '../../types/core'
import { useNavigation } from '@react-navigation/native'

interface Props {
    post: Post;
}

function PostImage({ post }: Props) {
    const { navigate } = useNavigation<PostImageNavigationProps>();
    const handleViewPress = () => {
        navigate('Detail', post )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {post.title} </Text>
            <Text style={styles.date}> {post.date} </Text>
            <View style={styles.buttonContainer}>
                <Button title='Go to Details' onPress={handleViewPress}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(58, 58, 253, 0.10)',
        marginVertical: 16,
        borderRadius: 12,
        padding: 16,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 12
    },
    date: {
        color: '#fff',
        fontSize: 15,
        marginBottom: 12
    },
    buttonContainer: {
        alignItems: 'flex-end'
    }
})

export default PostImage