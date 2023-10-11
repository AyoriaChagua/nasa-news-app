import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import TodaysImage from '../../components/TodaysImage';
import LastImages from '../../components/LastImages';
function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage />
            <LastImages />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(10, 15, 40)',
    }
})

export default Home;