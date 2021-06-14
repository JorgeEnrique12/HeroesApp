import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {DARK_BLUE_COLOR} from '../../../../utils/colors';
import styles from './styles';

export const IconDescription = ({icon, text}: {icon: string; text: string}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} color={DARK_BLUE_COLOR} />
      <Text style={styles.description}>{text}</Text>
    </View>
  );
};
