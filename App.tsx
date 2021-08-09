import React from 'react';

import RootNavigator from './src/services/RootNavigator';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { Store } from './src/redux/Store/configStore';

const App: React.FC = () => {

  return (
    <Provider store={Store}>
      <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </Provider>
  )
}


export default App;