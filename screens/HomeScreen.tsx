import { View, Text, Pressable, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>CheerUp Time</Text>
      <View>
        <Pressable onPress={() => navigation.navigate("Setting")}>
          <Text>응원 설정</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("List")}>
          <Text>응원 목록</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  title: {},
  button: {},
  buttonText: {},
});
