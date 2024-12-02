import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileInfo = () => {
  return (
    <View style={{ alignSelf: "center" }}>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        }}
        width={150}
        height={150}
        borderRadius={60}
      />
      <Text style={styles.Name}>Hamad Alhajeri</Text>
      <Text style={styles.City}>Kuwait</Text>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  Name: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  City: {
    textAlign: "center",
    fontWeight: "300",
  },
});
