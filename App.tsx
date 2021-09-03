import React from 'react';

import RootNavigator from './src/services/RootNavigator';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { Store } from './src/redux/Store/configStore';
import FlashMessage from 'react-native-flash-message';

const App: React.FC = () => {

  return (
    <Provider store={Store}>
      <NavigationContainer>
      <RootNavigator />
      <FlashMessage
              position="bottom"
              autoHide
              floating
              type={'none'}
              duration={5000}
            />
    </NavigationContainer>
    </Provider>
  )
}


export default App;