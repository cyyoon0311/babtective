import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Banner: React.FC = () => {
    return (
        <ImageBackground
            source={{ uri: 'https://via.placeholder.com/400x150/FFCDD2/888?text=Today_is_Pizza_day!' }}
            style={styles.banner}
            imageStyle={{ borderRadius: 15 }}
        >
            <View>
                <Text style={styles.bannerTitle}>오늘의 든든한 한 끼!</Text>
                <Text style={styles.bannerSubtitle}>영양 만점 메뉴를 만나봐!</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    banner: {
        height: 150,
        justifyContent: 'flex-end',
        padding: 20,
        marginBottom: 20,
    },
    bannerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    bannerSubtitle: {
        color: 'white',
        fontSize: 16,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});

export default Banner;