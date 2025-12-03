import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DRONIX</Text>
      <Text style={styles.subtitle}>Centro de Control</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#0af",
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    marginTop: 10,
  },
});
