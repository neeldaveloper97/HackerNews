import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Entypo';
import {NewsContext} from '../API/Context';

const TopNavigation = ({index, setIndex}) => {
  const {fetchNews, darkTheme, setDarkTheme} = useContext(NewsContext);

  return (
    <View style={{...styles.container, backgroundColor: '#282c35'}}>
      {index === 0 ? (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setDarkTheme(!darkTheme)}>
          <Text
            style={{...styles.text, color: darkTheme ? 'lightgrey' : 'black'}}>
            <Icon name="theme-light-dark" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <Icons name="chevron-left" size={15} color="#007FFF" />
          <Text
            style={{...styles.text, color: darkTheme ? 'lightgrey' : 'black'}}>
            Discover
          </Text>
        </TouchableOpacity>
      )}
      <View style={{maxWidth: '50%'}}>
        <Text
          style={{
            ...styles.center,
            color: darkTheme ? 'white' : 'black',
          }}>
          {index ? 'All-News ' : 'Discover  '}
        </Text>
      </View>
      {index ? (
        <TouchableOpacity
          style={styles.right}
          onPress={() => fetchNews('general')}>
          <Text style={styles.text}>
            <Icon name="reload" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <Text style={{...styles.text, color: darkTheme ? 'white' : 'black'}}>
            {' '}
            All News
          </Text>
          <Icons name="chevron-right" size={15} color="#007FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    // borderBottomColor: 'black',
    // borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  right: {
    width: 80,
    alignItems: 'flex-end',
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: '#007FFF',
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default TopNavigation;
