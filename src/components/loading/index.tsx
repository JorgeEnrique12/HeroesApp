import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import styles from './styles';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loader}>
        <ActivityIndicator style={styles.loaderIcon} />
        <Text style={styles.caption}>Loading</Text>
      </View>
    </View>
  );
};
