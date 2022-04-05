import { StyleSheet, View } from 'react-native';
import { LoginView } from './Views/LoginView/LoginView';
import { StartView } from './Views/StartView/StartView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuView from './Views/MenuView/MenuView';
import GameView from './Views/ScoreView/GameView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' >
        <Stack.Screen name="previewAnimation" component={StartView} options={{header: () => null}}/>
        <Stack.Screen name="login" component={GameView} options={{header: () => null}}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
