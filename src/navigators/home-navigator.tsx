import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';

import Home from '~/screens/home';
import { useColorScheme } from 'nativewind';
import User from '~/screens/user';

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  name: React.ComponentProps<typeof AntDesign>['name'];
}

const TabBarIcon = ({ name }: TabBarIconProps) => {
  const { colorScheme } = useColorScheme();
  return (
    <AntDesign
      name={name}
      size={24}
      color={colorScheme === 'dark' ? 'white' : 'black'}
    />
  );
};

const HomeNavigator = () => {
  const { colorScheme } = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: () => <TabBarIcon name='home' />,
          tabBarLabelStyle: {
            fontSize: 12,
            color: colorScheme === 'dark' ? 'white' : 'black',
          },
        }}
      />
      <Tab.Screen
        name='User'
        component={User}
        options={{
          tabBarIcon: () => <TabBarIcon name='user' />,
          tabBarLabelStyle: {
            fontSize: 12,
            color: colorScheme === 'dark' ? 'white' : 'black',
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeNavigator;
