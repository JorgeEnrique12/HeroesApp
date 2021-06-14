import React, {useRef} from 'react';
import {View, Animated} from 'react-native';
import {HeroCard} from '../heroe_card';
import {Loading} from '../../../../components/loading';
import styles from './styles';
import {useFetchHeroes} from '../../hooks/useFetchHeroes';

export const HeroList = () => {
  const {data, loading} = useFetchHeroes(
    'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json',
  );

  const scrollY = useRef(new Animated.Value(0)).current;
  return loading ? (
    <Loading />
  ) : (
    <View style={styles.list}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
        showsVerticalScrollIndicator={false}
        data={data}
        removeClippedSubviews={false}
        initialNumToRender={2}
        maxToRenderPerBatch={15}
        updateCellsBatchingPeriod={100}
        windowSize={7}
        ItemSeparatorComponent={({_}) => <View style={styles.separator} />}
        renderItem={({item, index}) => (
          <HeroCard hero={item} scrollY={scrollY} index={index} />
        )}
      />
    </View>
  );
};
