import React from 'react';
import {Pressable, VirtualizedList, StyleSheet, Text, StatusBar} from 'react-native';

const Title = ({ title, onPress }) => (
    <Pressable
    onPress={() => onPress(title)}
    style={styles.item}>
        <Text style={styles.title}>{title.charAt(0).toUpperCase() + title.slice(1)}</Text>
    </Pressable>
);

const Main = ({ breedList, onPress }) => {
    return (
        <VirtualizedList
            data={breedList}
            initialNumToRender={10}
            renderItem={({ item }) => (
                <Title title={item} onPress={onPress}/>
            )}
            keyExtractor={item => item}
            getItemCount={(data) => data.length}
            getItem={(data, index) => data[index]}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        width: '100%',
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#d1d9ff',
        padding: 20,
        borderBottomColor: '#6f79a8',
        borderBottomWidth: 2,
    },
    title: {
        fontSize: 24,
    },
});

export default Main;
