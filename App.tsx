import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from '@/navigator';
import { persistor, store } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator, StatusBar } from 'react-native';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor='transparent' barStyle='default' />

      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator size='large' />}
          persistor={persistor}
        >
          <Navigator />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
