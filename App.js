import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
