import { Button, DrawerLayoutAndroid, SafeAreaView, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import COLORS from "../assets/colors";

const DATA = [
  {
    title: "Home",
    data: ["Account", "Setting", "Log out"]
  },

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <TouchableOpacity >
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const NavigationContainer = () => {
    // const drawer = useRef(null);
    return(
        <SafeAreaView style={styles.container}>
            <SectionList
            sections={DATA}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
            />
        </SafeAreaView>
  )};

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primary
  },
  item: {
    padding: 20,
    // marginVertical: 8
  },
  header: {
    fontSize: 32,
    paddingHorizontal: 10,
    color: COLORS.white
    // backgroundColor: "#fff"
  },
  title: {
    fontSize: 23,
    color: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  }
  })

export default NavigationContainer