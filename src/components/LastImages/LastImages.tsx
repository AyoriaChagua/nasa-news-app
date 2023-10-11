import { View, StyleSheet, Text, ScrollView } from 'react-native';
import useFetchLastImage from './hooks/useFetchLastImages';
import PostImage from '../PostImage';

function LastImages() {
  const { lastPosts, loading } = useFetchLastImage()
  if (loading) {
    return <Text>... loading </Text>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 days</Text>
      <ScrollView>
        {
          lastPosts?.map(post => (
            <PostImage key={post.title} post={post}/>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8
  },
  title: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 18
  },
  text: {
    color: '#fff'
  }
})

export default LastImages;