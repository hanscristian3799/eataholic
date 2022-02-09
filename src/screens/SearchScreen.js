import React, { useState } from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import MyText from "../components/MyText";
import { StyleGlobal } from "../utils/StyleGlobal";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [getResults, results, errorMessage, isLoading] = useResults();

  const filterListByPrice = (price) => {
    return results.filter((res) => {
      return res.price === price;
    });
  };

  if (isLoading) {
    return (
      <View style={StyleGlobal.centerScreen}>
        <ActivityIndicator size={50} color="#000000" />
      </View>
    );
  }

  if (errorMessage) {
    return (
      <View style={StyleGlobal.centerScreen}>
        <MyText color="red" weight="600" fontSize={24}>
          Sorry
        </MyText>
        <MyText color="red" weight="400" fontSize={18}>
          {errorMessage}
        </MyText>
      </View>
    );
  }

  return (
    <>
      <SearchBar
        term={term}
        onSearchTerm={(newTerm) => setTerm(newTerm)}
        onSubmitTerm={() => getResults(term)}
      />

      <ScrollView>
        <ResultsList results={filterListByPrice("$")} title="Cost Friendly" />
        <ResultsList results={filterListByPrice("$$")} title="Bit Expensive" />
        <ResultsList results={filterListByPrice("$$$")} title="Expensive" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
