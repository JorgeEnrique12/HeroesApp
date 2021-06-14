import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardBackground: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  card: {
    height: 220,
    backgroundColor: 'rgb(9,185,215)',
    borderRadius: 10,
    overflow: 'hidden',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: '100%',
    flex: 4,
  },
  content: {
    padding: 10,
    backgroundColor: '#4361EE',
    flex: 6,
  },
  title: {
    fontSize: 18,
    marginBottom: 2,
    fontWeight: 'bold',
    color: '#F1FAEE',
  },
  name: {
    fontSize: 15,
    fontWeight: '300',
    color: '#F1FAEE',
  },
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
