import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React from 'react';

import HomeNavigator from '~/navigators/home-navigator';
import { useThemeConfig } from '~/theme/navigation';

const App = () => {
  const theme = useThemeConfig();
  const { colorScheme } = useColorScheme();

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default App;
