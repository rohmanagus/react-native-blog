import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id'),
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', {id: navigation.getParam('id')})
        }>
        <Icon style={styles.icon} name="pencil" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    color: '#222',
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

export default ShowScreen;
