import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ProfileStat() {
  return (
    <View>
      <View style={{ flexDirection: "row", gap: 50 }}>
        <View>
          <Text style={styles.title}>80K</Text>
          <Text style={styles.p}>Followers</Text>
        </View>
        <View>
          <Text style={styles.title}>803K</Text>
          <Text style={styles.p}>Likes</Text>
        </View>

        <View>
          <Text style={styles.title}>1.4K</Text>
          <Text style={styles.p}>Photos</Text>
        </View>
      </View>
    </View>
  );
}

export default ProfileStat;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  p: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "300",
  },
});
