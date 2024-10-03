import { View, Text, Pressable, StyleSheet, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>CheerUp Time</Text>
      </View>
      <View style={styles.buttonWrap}>
        <Pressable
          onPress={() => navigation.navigate("Setting")}
          style={[styles.button, { marginBottom: 30 }]}
        >
          <Text style={styles.buttonText}>응원 설정</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("List")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>응원 목록</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titleWrap: {
    height: "70%",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontFamily: "parisienne",
  },
  buttonWrap: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "rgb(254, 198, 96)",
    width: "70%",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 2,
  },
});
