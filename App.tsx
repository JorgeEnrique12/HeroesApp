import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppNavigator} from './src/navigation';

Icon.loadFont();

function App() {
  return <AppNavigator />;
}

export default App;
