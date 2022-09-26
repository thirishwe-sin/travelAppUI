import React, { useRef, useState } from 'react';
import {View, StyleSheet, Text, SafeAreaView, StatusBar, ScrollView, TextInput, FlatList, Dimensions, Button, DrawerLayoutAndroid} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../assets/colors';
import places from '../assets/places';
import Card from '../components/Card';
import ListCategories from '../components/ListCategories';
import NavigationContainer from '../components/NavigationContainer';
import RecommendedCard from '../components/RecommendedCard';

const {width} = Dimensions.get('screen')
const HomeScreen = () => {
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');

    const navigationView = () => (
    <NavigationContainer />
  );
    return (
        <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
        drawerBackgroundColor="transparent"
        >
        <SafeAreaView
        style={{flex: 1, backgroundColor: COLORS.white}}
        >
            <StatusBar translucent={false} backgroundColor={COLORS.primary}/>
            <View style={styles.header}>
                <Icon name='sort' size={28} color={COLORS.white} onPress={() => drawer.current.openDrawer()}/>
                <Icon name='notifications-none' size={28} color={COLORS.white}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{backgroundColor: COLORS.primary, height: 120, paddingHorizontal: 20}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.headerTitle}>Explore the</Text>
                        <Text style={styles.headerTitle}>beautiful places</Text>
                        <View style={styles.searchContainer}>
                            <Icon name='search' size={28} color={COLORS.dark}></Icon>
                            <TextInput placeholder='Search Places'/>
                        </View>
                    </View>
                </View>
                <ListCategories />
                <Text style={styles.sectionTitle}>Places</Text>
                <View>
                    <FlatList 
                    contentContainerStyle={{paddingLeft: 20}}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={(({item}) => <Card place={item} />)}
                    data={places} />
                    <Text style={styles.sectionTitle}>Recommended</Text>
                    <FlatList 
                    snapToInterval={width - 20}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
                    data={places} renderItem={({item}) => <RecommendedCard place={item}/>} />
                </View>
            </ScrollView>
        </SafeAreaView>
        </DrawerLayoutAndroid>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary
    },
    headerTitle: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 23
    },
    searchContainer: {
        height: 60,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        position: 'absolute',
        top: 90,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        elevation: 12
    },
    sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.dark
    },
    
})

export default HomeScreen;
