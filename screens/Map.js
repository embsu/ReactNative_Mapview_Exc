import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function Map(props) {

    // const [location, setLocation] = useState(
    //     {
    //         latitude: 65.0800,
    //         longitude: 25.4800,
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //     }
    // )

    // const getUserPosition = async () => {
    //     let { status } = await Location.requestForegroundPermissionsAsync();

    //     try {
    //         if (status !== 'granted') {
    //             console.log('Permission to access location was denied');
    //             return;
    //         }

    //         const position = await Location.getCurrentPositionAsync({accurancy: Location.Accuracy.High});
    //         setLocation({...location, latitude: position.coords.latitude, longitude: position.coords.longitude});

    //     } catch (error) {
    //         console.log(error);
    //     }   
    // }

    // useEffect(() => {
    //     (async () => {
    //         getUserPosition();
    //     })();
    // }, []);

    return (
        <View style={styles.container}>
            <MapView 
            style={styles.map}
            region={props.location}
           />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
