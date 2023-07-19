import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { listAllTags } from "../services/issueServices";

const data = [
  { _id: 1, name: "tag1" },
  { _id: 2, name: "tag2" },
];

const SelectDropDown = ({ selected, setSelected }) => {
  const [tags, setTags] = useState([]);
  console.log("tags", tags);

  useEffect(() => {
    listAllTags()
      .then((res) => {
        setTags(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <View style={styles.container}>
      <MultiSelect
       
        maxSelect={1}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        data={tags}
        labelField="name"
        valueField="name"
        placeholder="Choose Related Tags"
        searchPlaceholder="Search..."
        value={selected}
        onChange={(item) => {
          setSelected(item);
        }}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};

export default SelectDropDown;

const styles = StyleSheet.create({
  container: { marginTop: 20, marginBottom: 10 },
  dropdown: {},
  placeholderStyle: {},
  selectedTextStyle: {},
  inputSearchStyle: {},
  selectedStyle: {},
});
