import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>나만의 영양 지킴이 🌱</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF7043',
    },
});

export default Header;