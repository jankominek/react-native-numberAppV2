import { StyleSheet, View } from 'react-native';
import { LoginView } from './Views/LoginView/LoginView';
import { StartView } from './Views/StartView/StartView';
import { getActionFromState, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuView from './Views/MenuView/MenuView';
import GameView from './Views/GameView/GameView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RegisterView } from './Views/RegisterView/RegisterView';
import ScoreView from './Views/ScoreView/ScoreView';
import { getAll, getAllDataToDisplay, getData } from './AsyncStorageDB/AsyncStorageDB';


export default function App() {


  const Stack = createNativeStackNavigator();
  
  getAllDataToDisplay();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='previewAnimation' >
        <Stack.Screen name="previewAnimation" component={StartView} options={{header: () => null}}/>
        <Stack.Screen name="menu" component={MenuView} options={{header: () => null}}/>
        <Stack.Screen name="login" component={LoginView}/>
        <Stack.Screen name="register" component={RegisterView} />
        <Stack.Screen name="game" component={GameView}/>
        <Stack.Screen name="score" component={ScoreView} />
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
