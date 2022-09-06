import {View, Text, Dimensions, StyleSheet, FlatList} from 'react-native';
import React, {useContext, useState} from 'react';
import {NewsContext} from '../API/Context';
import SingleNews from '../components/SingleNews';
// import Carousel from "react-native-snap-carousel";
const NewsScreen = () => {
  const {
    news: {articles},
  } = useContext(NewsContext);

  const [activeIndex, setActiveIndex] = useState();
  console.log(JSON.stringify(articles, null, 2));
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.carousel}>
      {articles && (
        // <Carousel
        //   layout={"stack"}
        //   data={articles.slice(0, 10)}
        //   sliderHeight={300}
        //   itemHeight={windowHeight}
        //   vertical={true}
        //   // renderItem= {}
        //   onSnapToItem={(index) => setActiveIndex(index)}
        // />
        <FlatList
          data={articles}
          renderItem={({item, index}) => {
            return <SingleNews item={item} index={index} />;
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: 'black',
    // transform: [{ scaleY: -1 }],
  },
});

export default NewsScreen;
