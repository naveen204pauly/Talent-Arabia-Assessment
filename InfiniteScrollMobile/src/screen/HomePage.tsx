/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, FlatList, ActivityIndicator} from 'react-native';

import {useFetchPosts} from '../shared/useFetchPosts';
import {Post} from '../components/Post';

function HomePage(): React.JSX.Element {
  const {posts, loadMore, loading, hasMore} = useFetchPosts();

  const onEndReached = () => {
    if (hasMore) {
      loadMore();
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Post title={item.title} description={item.body} key={item.id} />
        )}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" /> : null
        }
      />
    </SafeAreaView>
  );
}

export default HomePage;
