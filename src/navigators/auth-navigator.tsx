import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '~/screens/login';
import SignUp from '~/screens/signup';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={Login} />
      <AuthStack.Screen name='SignUp' component={SignUp} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
