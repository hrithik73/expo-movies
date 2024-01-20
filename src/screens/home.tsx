import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import MovieCarousel from '~/components/carousel';
import { IMAGE_URL } from '~/config/api';
import { useTopRatedQuery } from '~/hooks/useReactQuery';

const Home = () => {
  const { data: topRated, isLoading } = useTopRatedQuery();
  const { top } = useSafeAreaInsets();

  return (
    <View className='flex-1 items-center px-2' style={{ top }}>
      <View className='w-full flex-row items-center justify-between bg-neutral-300 dark:bg-slate-700 rounded p-2'>
        <Text className='dark:text-white font-bold text-lg'>Expo Movies</Text>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          className='h-12 w-12 rounded-full'
        />
      </View>
      <View>
        <MovieCarousel />
      </View>
      <ScrollView className='h-24 flex-1'>
        <Text className='text-lg font-bold dark:text-white'>Trending</Text>
        <FlatList
          horizontal
          className='pt-2'
          data={topRated}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View className='justify-center w-36'>
                <Image
                  source={{ uri: `${IMAGE_URL}${item.backdrop_path}` }}
                  className='h-28 w-28 rounded'
                />
                <Text
                  className='truncate dark:text-white pt-3 text-center'
                  numberOfLines={1}
                >
                  {item?.title}
                </Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};
export default Home;
