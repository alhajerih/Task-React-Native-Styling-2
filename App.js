import { StyleSheet, Text, View } from "react-native";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ProfileInfo from "./src/components/ProfileInfo";
import ProfileStat from "./src/components/ProfileStat";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.profile}>
          <ProfileInfo />
          <View style={styles.horizontalLine} />
          <ProfileStat />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff2",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
    width: 230,
  },
});
