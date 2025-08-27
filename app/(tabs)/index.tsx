import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

// 1. 우리가 만든 모든 UI 컴포넌트들을 불러옵니다.
//    경로는 현재 파일 위치(app/tabs) 기준입니다.
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import AddressBar from '../../components/AddressBar';
import Category from '../../components/Category';
import Recommendation from '../../components/Recommendation';

export default function HomeScreen() {
  // 2. 불러온 컴포넌트들을 순서대로 배치하여 화면을 구성합니다.
  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 헤더 */}
      <Header />

      {/* 헤더를 제외한 나머지 부분은 스크롤이 가능하도록 ScrollView로 감싸줍니다. */}
      <ScrollView>
        <View style={styles.content}>
          <Banner />
          <AddressBar />
          <Category />
          <Recommendation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// 3. 화면의 전체적인 레이아웃과 배경색을 설정합니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1', // 시안의 크림색 배경 적용
  },
  content: {
    paddingHorizontal: 15, // 좌우 여백
  },
});