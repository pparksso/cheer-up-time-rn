import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MessageScreen from "./screens/MessageScreen";
import AlarmListScreen from "./screens/AlarmListScreen";
import AlarmSettingScreen from "./screens/AlarmSettingScreen";
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <stack.Screen name="Home" component={HomeScreen} />
            <stack.Screen name="Message" component={MessageScreen} />
            <stack.Screen name="List" component={AlarmListScreen} />
            <stack.Screen name="Setting" component={AlarmSettingScreen} />
          </stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
