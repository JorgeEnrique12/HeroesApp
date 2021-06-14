import React, {useContext} from 'react';
import {View, Image, Text, Animated, TouchableHighlight} from 'react-native';
import styles from './styles';
import {NavigationContext} from '@react-navigation/native';
import {Hero} from '../../models/hero';
import {Powerstats} from '../powerstats';
import PropTypes from 'prop-types';

export const HeroCard = ({
  hero,
  scrollY,
  index,
}: {
  hero: Hero;
  index: any;
  scrollY: any;
}) => {
  const inputRange = [-1, 0, 238 * index, 238 * (index + 1)];
  const scale = scrollY.interpolate({inputRange, outputRange: [1, 1, 1, 0.9]});
  const navigation = useContext(NavigationContext);

  return (
    <Animated.View style={{transform: [{scale}]}}>
      <TouchableHighlight
        style={styles.cardBackground}
        onPress={() => navigation!.navigate('HeroesDetail', hero)}>
        <View>
          <View style={styles.card}>
            <View style={styles.row}>
              <Image
                style={styles.image}
                source={{
                  uri: hero.images.md,
                }}
              />
              <View style={styles.content}>
                <Text style={styles.title}>{hero.name}</Text>
                <Text style={styles.name}>{hero.biography.fullName}</Text>
                <Powerstats
                  stats={hero.powerstats}
                  textColor="white"
                  textSize={13}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
};

HeroCard.propTypes = {
  hero: PropTypes.any.isRequired,
  scrollY: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
};
