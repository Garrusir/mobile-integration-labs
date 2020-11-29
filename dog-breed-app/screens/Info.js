import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';

const Info = ({breed, onPress}) => {
    const [imageUrl, setImageUrl] = React.useState('');
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log('data', data);
                setImageUrl(data.message);
            })
            .catch((error) => {
                console.log('error', error);
            })
    }, []);
    return (
        <View
        style={styles.container}>
            <Text style={styles.breed}>{ breed.toUpperCase() }</Text>
            {
                imageUrl ?
                <View
                style={styles.imageContainer}>
                    <Image
                    style={styles.image}
                    source={{
                        uri: imageUrl,
                    }}/>
                </View> : <Text>Loading...</Text>
            }

            <View
            style={styles.button}>
                <Button
                onPress={() => onPress(null)}
                title={'Back'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        width: '100%',
        height: '100%',
        paddingVertical: 32,
        paddingHorizontal: 64,
    },
    breed: {
      fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    imageContainer: {
        width: '100%',
        flexGrow: 1,
    },
    image: {
        width: 300,
        height: 300,
    },
    button: {
        marginTop: 32,
    }
});

export default Info;
