import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieCarousel from '~/components/carousel';

const Home = () => {
  return (
    <SafeAreaView className='flex-1  items-center'>
      <MovieCarousel />
    </SafeAreaView>
  );
};
export default Home;
