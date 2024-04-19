import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Post from '../components/Post';
import api from '../api';

const Home = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.listPosts();
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  const handleNewPost = () => {
    navigation.navigate('NewPost');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={
          <Button title="Novo Post" onPress={handleNewPost} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;