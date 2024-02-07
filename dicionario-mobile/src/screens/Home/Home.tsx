import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Container, TitleText } from './home.styles';
import { useInitialWords } from '../../service/hooks/useInitialWords';
import Card from '../../components/word-card.component';
import Header from '../../components/header.component';

const Home = () => {
  const [words, setWords] = useState<string[]>([]);
  
  useEffect(() => {
    console.log('Home screen mounted');
    const inititalWords = useInitialWords();
    setWords(inititalWords)
  },[]);

  return (
    <SafeAreaView style={{ flex: 1 }} testID="safeAreaView">
      <Container testID="containerView">
        <Header />  
        <TitleText testID="titleText">Word List</TitleText>
        <FlatList
          data={words}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <Card word={item}/>
            );
          }}
          showsVerticalScrollIndicator={false}
          testID="flatList"
        />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
