import {StyleSheet} from 'react-native';

export const textStyle = (props: any) =>
  StyleSheet.create({
    text: {
      color: props.textColor,
      flex: 4,
      fontSize: props.textSize,
      fontWeight: '300',
    },
  });

export default StyleSheet.create({
  statData: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  statText: {
    color: '#F1FAEE',
    flex: 3,
    fontSize: 10,
    fontWeight: '300',
  },

  statsContent: {
    paddingTop: 5,
  },
});
