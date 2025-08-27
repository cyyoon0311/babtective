import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface RecoCardProps {
    date: string;
    title: string;
    description: string;
    store: string;
}

const RecoCard: React.FC<RecoCardProps> = ({ date, title, description, store }) => (
    <View style={styles.recoCard}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.storeInfo}>{store}</Text>
    </View>
);

const Recommendation: React.FC = () => {
    const recommendations: RecoCardProps[] = [
        { date: '어제 저녁은 편의점이었네!', title: '오늘은 따뜻한 밥 어때?', description: '김치찌개로 비타민과 단백질을 보충해봐!', store: '든든한 밥집' },
        { date: '요즘 채소를 너무 안 먹었어!', title: '신선한 야채가 듬뿍!', description: '맛있는 비빔밥으로 영양을 골고루 챙기자!', store: '우리 동네 분식' }
    ];

    return (
        <View style={styles.recommendation}>
            <View style={styles.sectionTitle}>
                <Text style={styles.sectionTitleText}>💪 영양 균형 추천</Text>
                <TouchableOpacity><Text style={styles.seeMore}>더보기 </Text></TouchableOpacity>
            </View>
            <View>
                {recommendations.map((reco, index) => <RecoCard key={index} {...reco} />)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    recommendation: { marginBottom: 20 },
    sectionTitle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
    sectionTitleText: { fontSize: 20, fontWeight: 'bold' },
    seeMore: { color: '#888' },
    recoCard: { backgroundColor: '#E3F2FD', borderRadius: 10, padding: 15, marginBottom: 15 },
    date: { fontSize: 12, color: '#555', marginBottom: 5 },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
    description: { fontSize: 14, marginBottom: 10 },
    storeInfo: { textAlign: 'right', fontSize: 12, color: '#1E88E5', fontWeight: 'bold' },
});

export default Recommendation;