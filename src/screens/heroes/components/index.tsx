import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import styles from './styles';
import {HeroList} from './heroe_list';
export const HeroesScreen = ({}) => {
  return (
    <View>
      <View style={[StyleSheet.absoluteFillObject, styles.container]} />
      <SafeAreaView>
        <Text style={styles.title}>Heroes</Text>
        <HeroList />
      </SafeAreaView>
    </View>
  );
};
