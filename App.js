import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store';
import { Provider } from 'react-redux';
import TeacherScreen from './screens/TeacherScreen';
import StyleScreen from './screens/StyleScreen';
import OfferScreen from './screens/OfferScreen';
import ShopScreen from './screens/ShopScreen';
import BasketScreen from './screens/BasketScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const isAndroid = Platform.OS === 'android';
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
            />
            <Stack.Screen
              name='Teacher'
              component={TeacherScreen}
            />
            <Stack.Screen
              name='Style'
              component={StyleScreen}
            />
            <Stack.Screen
              name='Offer'
              component={OfferScreen}
            />
            <Stack.Screen
              name='Shop'
              component={ShopScreen}
            />
            <Stack.Screen
              name='Basket'
              component={BasketScreen}
              options={{
                presentation: isAndroid ? 'modal' : 'push'
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
