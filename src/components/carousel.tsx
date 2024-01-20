import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Carousel from 'pinar';
import { useTopRatedQuery } from '~/hooks/useReactQuery';
import { IMAGE_URL } from '~/config/api';

const MovieCarousel = () => {
  const { data: topRated, isLoading } = useTopRatedQuery();

  if (isLoading) return <ActivityIndicator size={'large'} color={'black'} />;

  return (
    <Carousel height={300} loop showsControls={false}>
      {topRated.slice(0, 10).map((item: any) => {
        return (
          <ImageBackground
            source={{ uri: `${IMAGE_URL}${item.backdrop_path}` }}
            style={styles.slide1}
            imageStyle={{ borderRadius: 10, opacity: 0.9 }}
            resizeMode='contain'
          >
            <Text className='text-xl font-bold dark:text-white absolute bottom-0'>
              {item?.title}
            </Text>
          </ImageBackground>
        );
      })}
    </Carousel>
  );
};

const styles = StyleSheet.create({
  slide1: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MovieCarousel;
