import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.background}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Heroes</Text>
        <Text style={styles.appText}>App</Text>
      </View>
      <View style={styles.startAppButton}>
        <Button
          title="Start"
          buttonStyle={styles.button}
          titleStyle={styles.titleButtonStyle}
          onPress={() => navigation.navigate('Heroes')}
        />
      </View>
    </View>
  );
};
