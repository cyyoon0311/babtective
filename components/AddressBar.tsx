import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AddressBar: React.FC = () => {
    return (
        <View style={styles.addressBar}>
            <Text>📍 지금 내 위치는?</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>주소 설정하기</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    addressBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFF3E0',
        borderRadius: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF7043',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default AddressBar;