import React, { useEffect } from 'react';

import AppNavigator from './src/navigation/AppNavigation';
import RNBootSplash from 'react-native-bootsplash';


class App extends React.Component {
  componentDidMount() {
    RNBootSplash.hide({ duration: 250 })
  }
  render() {  
 
    return <AppNavigator />;
  }
}

export default App;
