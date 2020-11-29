import React, { useEffect } from 'react';
import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import Main from "./screens/Main";
import Info from "./screens/Info";

export default function App() {
  const [breedList, setBreedList] = React.useState([]);
  const [breed, setBreed] = React.useState(null);
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => {
          return response.json();
        })
        .then(({ message }) => {
          setBreedList(Object.keys(message));
        })
        .catch((error) => {
          console.log('error', error);
        })
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
       <View style={styles.head}>
         <Text style={styles.header}>Breeds</Text>
       </View>
        {
          breed ? <Info breed={breed} onPress={setBreed}/> : <Main breedList={breedList} onPress={setBreed}/>
        }
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#6f79a8',
    width: '100%',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingVertical: 8,
  },
  header: {
    fontSize: 28,
  },
  content: {
    flex: 1,
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#9fa8da',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
