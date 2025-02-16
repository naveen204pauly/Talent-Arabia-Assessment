import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type PostProps = {
  title: string;
  description: string;
};

export const Post: FC<PostProps> = ({title, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#ababab',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
