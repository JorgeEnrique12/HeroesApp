import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BACKGROUND_COLOR,
  },
  loader: {
    width: 130,
    height: 130,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderIcon: {
    padding: 10,
    transform: [{scale: 1.3}],
  },
  caption: {
    fontSize: 15,
    color: 'white',
  },
});
