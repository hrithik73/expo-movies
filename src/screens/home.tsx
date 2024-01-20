import { Text, View } from 'react-native';
import Button from '~/components/ui/button';
import { useSelectedTheme } from '~/hooks/useSelectedTheme';

const Home = () => {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  return (
    <View className='flex-1 justify-center items-center'>
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
export default Home;
