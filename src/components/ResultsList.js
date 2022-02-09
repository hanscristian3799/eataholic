import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MyText from "./MyText";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results }) => {
  const styles = StyleSheet.create({
    titleSpacing: {
      marginBottom: 10,
      marginLeft: 15,
    },
    view: {
      marginBottom: 15,
    },
  });

  if (!results.length) return null;

  return (
    <View style={styles.view}>
      <View style={styles.titleSpacing}>
        <MyText fontSize={16} weight="600">
          {title} - {results.length} place(s) found
        </MyText>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(res) => res.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
};

export default ResultsList;
