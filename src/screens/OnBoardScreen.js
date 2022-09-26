import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors'

const OnBoardScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
        <ImageBackground 
        style={{flex: 1}}
        source={require('../assets/images/location5.jpeg')}
        >
            <View style={styles.details}>
                <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
                    Discover
                </Text>
                <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
                    world with us
                </Text>
                <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 15}}>
                    Ipsum ea kasd ut vero sit diam lorem sadipscing. Duo dolor no vero duo clita kasd, at kasd ipsum lorem sed dolor duo sadipscing. 
                </Text>
                <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('HomeScreen')}>
                    <View style={styles.btn}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  )
}

export default OnBoardScreen

const styles = StyleSheet.create({
    details: {
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40
    },
    btn: {
        height: 50,
        width: 120,
        backgroundColor: COLORS.white,
        marginTop: 20,
        borderRadius: 7,
        justifyContent: 'center'
    }
})