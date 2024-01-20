import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from '~/components/ui/button';
import { useSelectedTheme } from '~/hooks/useSelectedTheme';

const User = () => {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();

  return (
    <View style={styles.container}>
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
