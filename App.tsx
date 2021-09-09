import React from 'react';

import RootNavigator from './src/services/RootNavigator';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';
import { Persistor, Store, } from './src/redux/Store/configStore';
import FlashMessage from 'react-native-flash-message';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {

  return (
    <Provider store={Store}>
         <PersistGate persistor={Persistor}>
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
    </PersistGate>
    </Provider>
  )
}


export default App;