import {StyleSheet} from 'react-native';

const styles = (props: any) =>
  StyleSheet.create({
    containerStyles: {
      height: 5,
      flex: 7.5,
      backgroundColor: '#e0e0de',
      borderRadius: 10,
      marginLeft: 5,
      overflow: 'hidden',
    },

    fillerStyles: {
      height: '100%',
      width: `${props.size}%`,
      backgroundColor: props.fillerColor,
      textAlign: 'right',
    },

    labelStyles: {
      color: 'black',
      fontSize: 10,
      fontWeight: 'normal',
    },
  });

export default styles;
