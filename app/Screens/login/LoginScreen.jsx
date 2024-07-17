import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Constants/Color.js';
import { useWarmUpBrowser } from '../../../hooks/warmUpBrowser.tsx'

// clerk
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" })

    const onPress = async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive  } = await startOAuthFlow();

            if(createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // do something
            }
        } catch(err) {
            console.log("OAuth Error", err);
        }
    }

    // const onPress = React.useCallback(async () => {
    //     try {
    //         const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();
    //         if (createdSessionId) {
    //             setActive({ session: createdSessionId });
    //         } else {
    //             // do something
    //         }
    //     } catch (err) {
    //         console.log("OAuth Error", err);
    //     }
    // }, [])

    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50
        }}>
            <Image
                style={styles.logoImage}
                source={require('../../../assets/images/logo.png')}
            />
            <Image
                style={styles.bgImage}
                source={require('../../../assets/images/ev-charging.png')}
            />
            <View style={{ padding: 20 }}>
                <Text style={styles.heading}>Your Ultimate EV Charing Station Finder</Text>
                <Text style={styles.desc}>Find Ev Charging Station near you, plan trip and so much more in just on click</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={{ color: Colors.WHITE, textAlign: 'center', fontFamily: 'Outfit', fontSize: 17 }}>
                        Login with Google
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logoImage: {
        // width: 200,
        height: 100,
        objectFit: "contain",
    },
    bgImage: {
        width: 500,
        height: 240,
        marginTop: 20,
        objectFit: "cover",
    },
    heading: {
        fontSize: 25,
        fontFamily: 'Outfit-Bold',
        textAlign: 'center',
        marginTop: 20
    },
    desc: {
        fontSize: 17,
        fontFamily: 'Outfit',
        marginTop: 15,
        textAlign: "center",
        color: Colors.GRAY
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        display: 'flex',
        borderRadius: 99,
        marginTop: 70
    }
});