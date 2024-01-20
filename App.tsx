import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React, { useEffect } from 'react';
import { useSelectedTheme } from '~/hooks/useSelectedTheme';

import HomeNavigator from '~/navigators/home-navigator';
import { useThemeConfig } from '~/theme/navigation';

const App = () => {
  const theme = useThemeConfig();
  const { colorScheme, setColorScheme } = useColorScheme();
  const { selectedTheme } = useSelectedTheme();

  useEffect(() => {
    if (selectedTheme !== colorScheme) {
      setColorScheme(selectedTheme);
    }
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default App;
