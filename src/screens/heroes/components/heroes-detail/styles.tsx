import {StyleSheet} from 'react-native';

export const backButtonStyles = (props: any) =>
  StyleSheet.create({
    button: {
      position: 'absolute',
      marginTop: props.topPadding + 5,
      marginLeft: 0,
      textAlignVertical: 'auto',
      borderRadius: 30,
    },
  });

export const cardStyles = (props: any) =>
  StyleSheet.create({
    heroCard: {
      position: 'absolute',
      backgroundColor: 'white',
      marginTop: props.topMargin,
      height: props.height,
      width: props.width,
      marginLeft: props.leftMargin,
      borderRadius: 10,
      overflow: 'hidden',
    },
  });

export default StyleSheet.create({
  backgrounImageContainer: {
    flex: 1,
  },
  container: {
    marginBottom: 40,
  },
  backgroundImage: {
    height: 280,
  },
  heroCard: {
    position: 'absolute',
    backgroundColor: 'blue',
    marginTop: 10,
    flex: 10,
  },
  informationContainer: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    flex: 2,
  },
  heroName: {
    fontSize: 30,
    fontWeight: '700',
  },
  heroFullName: {
    marginTop: 0,
    fontSize: 20,
    fontWeight: '300',
  },
  title: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '600',
  },
  publisher: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '300',
  },

  description: {
    marginLeft: 5,
    flexShrink: 1,
    fontSize: 16,
    fontWeight: '300',
    flexWrap: 'wrap',
  },
  dataContainer: {
    marginTop: 10,
    padding: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
  },
  cardContainer: {
    marginTop: 15,
  },
  iconDescriptionContainer: {flexDirection: 'row', alignItems: 'center'},
});
