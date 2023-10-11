import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../views/Home'
import Detail from '../views/Detail'

const Stack = createNativeStackNavigator()

const routeScreenDefaultOptions = {
    headerStyle: {
        backgroundColor: 'rgb(10, 15, 40)',

    },
    headerTitleStyle: {
        color: '#fff'
    }
}
function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={routeScreenDefaultOptions} />
                <Stack.Screen name='Detail' component={Detail} options={routeScreenDefaultOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes