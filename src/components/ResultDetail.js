import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyText from "./MyText";

const ResultDetail = ({ result }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.spacing}
      onPress={() => navigation.navigate("RestaurantDetail", result.id)}
    >
      <Image source={{ uri: result.image_url }} style={styles.image} />

      <View style={{ width: 200, marginTop: 5 }}>
        <MyText weight="600">{result.name}</MyText>
      </View>

      <Text style={styles.subtitle}>
        {result.rating} Rating {result.review_count} Reviews
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontWeight: "700",
  },
  subtitle: {
    color: "grey",
  },
  spacing: {
    marginLeft: 15,
  },
});

export default ResultDetail;
