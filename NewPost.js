import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import api from '../api';

const NewPost = ({ navigation }) => {
  const [text, setText] = useState('');

  const handleSave = async () => {
    try {
      await api.savePost(text);
      navigation.goBack();
    } catch (error) {
      alert('Failed to save post');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Text"
        value={text}
        onChangeText={setText}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default NewPost;