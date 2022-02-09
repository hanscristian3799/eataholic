import React, { useEffect, useRef } from "react";
import { View, TextInput, StyleSheet, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, onSearchTerm, onSubmitTerm }) => {
  const inputRef = useRef("");

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyboardDidHide = () => {
    inputRef.current.blur();
  };

  const styles = StyleSheet.create({
    backgroundStyle: {
      backgroundColor: "#E5E4E2",
      height: 50,
      borderRadius: 5,
      flexDirection: "row",
      margin: 15,
    },
    inputStyle: {
      flex: 1,
      fontSize: 18,
      marginLeft: 5,
      marginRight: 10,
    },
    iconStyle: {
      alignSelf: "center",
      marginLeft: 10,
      marginRight: 5,
    },
  });

  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name="search1" size={30} style={styles.iconStyle} />
      <TextInput
        ref={inputRef}
        value={term}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        onChangeText={onSearchTerm}
        onSubmitEditing={onSubmitTerm}
        autoFocus={false}
      />
    </View>
  );
};

export default SearchBar;
