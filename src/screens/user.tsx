import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '~/components/ui/button';
import { useSelectedTheme } from '~/hooks/useSelectedTheme';

const User = () => {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ top }} className='p-5'>
      <Text>User</Text>
      <Text className='dark:text-white'>{selectedTheme}</Text>
      <Button
        onPress={() => {
          setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light');
        }}
      >
        Toggle theme
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default User;
