import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {Hero} from '../../models/hero';
import styles, {cardStyles, backButtonStyles} from './styles';
import {IconDescription} from '../icons-description';
import {Powerstats} from '../powerstats';
import PropTypes from 'prop-types';

export const HeroDetailsScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const cardHeight = Dimensions.get('window').height * 0.25;
  const cardWidth = cardHeight * 0.75;
  const cardTopMargin = 100;
  const cardLeftMargin = (Dimensions.get('window').width - cardWidth) / 2;
  const hero: Hero = route.params;

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.backgroundImage}
            blurRadius={8}
            resizeMode="cover"
            source={{
              uri: hero.images.md,
            }}
          />
          <Image
            source={{
              uri: hero.images.md,
            }}
            resizeMode="cover"
            style={
              cardStyles({
                height: cardHeight,
                width: cardWidth,
                topMargin: cardTopMargin,
                leftMargin: cardLeftMargin,
              }).heroCard
            }
          />
          <Button
            icon={{
              name: 'arrow-back',
              size: 30,
              color: 'white',
            }}
            onPress={() => navigation.goBack()}
            containerStyle={
              backButtonStyles({
                topPadding: StatusBar.currentHeight || 42,
              }).button
            }
          />
          <View style={styles.informationContainer}>
            <Text style={styles.heroName}>{hero.name}</Text>
            {hero.biography.fullName ? (
              <Text style={styles.heroFullName}>{hero.biography.fullName}</Text>
            ) : (
              <View />
            )}
            <Text style={styles.publisher}>{hero.biography.publisher}</Text>

            <View style={styles.cardContainer}>
              <Text style={styles.title}>About</Text>
              <View style={styles.dataContainer}>
                <IconDescription text={hero.appearance.race} icon="person" />
                <IconDescription
                  text={hero.biography.placeOfBirth}
                  icon="place"
                />

                <IconDescription
                  text={hero.appearance.weight[1]}
                  icon="fitness-center"
                />
                <IconDescription
                  text={hero.appearance.height[1]}
                  icon="straighten"
                />
                <IconDescription text={hero.work.occupation} icon="work" />
              </View>
            </View>

            <View style={styles.cardContainer}>
              <Text style={styles.title}>Powerstats</Text>
              <View style={styles.dataContainer}>
                <Powerstats
                  textColor="black"
                  textSize={16}
                  stats={hero.powerstats}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

HeroDetailsScreen.propTypes = {
  route: PropTypes.any,
  navigation: PropTypes.any,
};
