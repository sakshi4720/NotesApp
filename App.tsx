import React from 'react';

import RootNavigator from './src/services/RootNavigator';
import { NavigationContainer } from '@react-navigation/native'

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}


export default App;