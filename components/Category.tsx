import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface CategoryItemProps {
    imgSrc: string;
    title: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ imgSrc, title }) => (
    <TouchableOpacity style={styles.categoryItem}>
        <Image source={{ uri: imgSrc }} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{title}</Text>
    </TouchableOpacity>
);

const Category: React.FC = () => {
    return (
        <View style={styles.category}>
            <CategoryItem imgSrc="https://via.placeholder.com/60/FFECB3/000?text=밥" title="든든한 밥" />
            <CategoryItem imgSrc="https://via.placeholder.com/60/C8E6C9/000?text=분식" title="간단한 분식" />
            <CategoryItem imgSrc="https://via.placeholder.com/60/B3E5FC/000?text=면" title="맛있는 면" />
            <CategoryItem imgSrc="https://via.placeholder.com/60/F8BBD0/000?text=빵" title="달콤한 빵" />
        </View>
    );
};

const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    categoryItem: {
        alignItems: 'center',
        width: 80,
    },
    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#eee',
        marginBottom: 8,
    },
    categoryText: {
        fontSize: 13,
    },
});

export default Category;