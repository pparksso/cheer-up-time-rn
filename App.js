import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MessageScreen from "./screens/MessageScreen";
import AlarmListScreen from "./screens/AlarmListScreen";
import AlarmSettingScreen from "./screens/AlarmSettingScreen";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Message" component={MessageScreen} />
        <stack.Screen name="List" component={AlarmListScreen} />
        <stack.Screen name="Setting" component={AlarmSettingScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
