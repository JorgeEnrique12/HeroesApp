import React from 'react';
import {View, Text} from 'react-native';
import {ProgressBar} from '../../../../components/progress_bar';
import styles, {textStyle} from './styles';
import PropTypes from 'prop-types';
import {
  INTELLIGENCE_BAR_COLOR,
  STRENGTH_BAR_COLOR,
  SPEED_BAR_COLOR,
  DURABILITY_BAR_COLOR,
  COMBAT_BAR_COLOR,
  POWER_BAR_COLOR,
} from '../../../../utils/colors';

export const Powerstats = ({
  textColor,
  textSize,
  stats,
}: {
  textColor: string;
  textSize: number;
  stats: any;
}) => {
  return (
    <View style={styles.statsContent}>
      <View style={styles.statData}>
        <Text style={textStyle({textColor, textSize}).text}>Intelligence</Text>
        <ProgressBar
          fillerColor={INTELLIGENCE_BAR_COLOR}
          porcentage={stats.intelligence}
        />
      </View>
      <View style={styles.statData}>
        <Text style={textStyle({textColor, textSize}).text}>Strength</Text>
        <ProgressBar
          fillerColor={STRENGTH_BAR_COLOR}
          porcentage={stats.strength}
        />
      </View>
      <View style={styles.statData}>
        <Text style={textStyle({textColor, textSize}).text}>Speed</Text>
        <ProgressBar fillerColor={SPEED_BAR_COLOR} porcentage={stats.speed} />
      </View>
      <View style={styles.statData}>
        <Text style={textStyle({textColor, textSize}).text}>Durability</Text>
        <ProgressBar
          fillerColor={DURABILITY_BAR_COLOR}
          porcentage={stats.durability}
        />
      </View>
      <View style={styles.statData}>
        <Text style={textStyle({textColor, textSize}).text}>Power</Text>
        <ProgressBar fillerColor={POWER_BAR_COLOR} porcentage={stats.power} />
      </View>
      <View style={styles.statData}>
        <Text style={textStyle({textColor, textSize}).text}>Combat</Text>
        <ProgressBar fillerColor={COMBAT_BAR_COLOR} porcentage={stats.combat} />
      </View>
    </View>
  );
};

Powerstats.propTypes = {
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  stats: PropTypes.any,
};
