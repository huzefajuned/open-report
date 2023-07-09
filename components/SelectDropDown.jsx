import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const data = [
  { label: "tag1", value: "1" },
  { label: "tag2", value: "2" },
  { label: "tag3", value: "3" },
  { label: "tag4", value: "4" },
  { label: "tag5", value: "5" },
  { label: "tag6", value: "6" },
  { label: "tag7", value: "7" },
  { label: "tag8", value: "8" },
];

const SelectDropDown = () => {
  const [selected, setSelected] = useState([]);

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Choose Related Tags"
        searchPlaceholder="Search..."
        value={selected}
        onChange={(item) => {
          setSelected(item);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color="black"
        //     name="Safety"
        //     size={20}
        //   />
        // )}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};
export default SelectDropDown;

const styles = StyleSheet.create({
  container: {},
  dropdown: {},
  placeholderStyle: {},
  selectedTextStyle: {},
  inputSearchStyle: {},
  selectedStyle: {},
});
