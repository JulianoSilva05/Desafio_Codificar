import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{post.name}</Text>
      <Text style={styles.text}>{post.text}</Text>
      <Text style={styles.date}>{post.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  text: {
    marginTop: 5,
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Post;