import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export const ProgressBar = ({
  fillerColor,
  porcentage,
}: {
  fillerColor: string;
  porcentage: number;
}) => {
  return (
    <View style={styles({}).containerStyles}>
      <View style={styles({size: porcentage, fillerColor}).fillerStyles} />
    </View>
  );
};
