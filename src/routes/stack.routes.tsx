import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LogIn } from '../screens/LogIn';
import { SignUp } from '../screens/SignUp';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return (
        <Navigator>
            <Screen
                name='LogIn'
                component={LogIn}
                options={{
                    headerShown: false
                }} />
            <Screen
                name='SignUp'
                component={SignUp}
                options={{
                    headerShown: false
                }} />
        </Navigator>
    )
}