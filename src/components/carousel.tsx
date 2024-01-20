import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import Carousel from 'pinar';
import { useTopRatedQuery } from '~/hooks/useReactQuery';
import { IMAGE_URL } from '~/config/api';

const MovieCarousel = () => {
  const { data: topRated } = useTopRatedQuery();
  // console.log(topRated.length);
  return (
    <Carousel height={200} loop>
      {topRated.map((item: any) => {
        return (
          <ImageBackground
            source={{ uri: `${IMAGE_URL}${item.backdrop_path}` }}
            style={styles.slide1}
            imageStyle={{ borderRadius: 20 }}
            resizeMode='stretch'
          />
        );
      })}
    </Carousel>
  );
};

const styles = StyleSheet.create({
  slide1: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
export default MovieCarousel;
