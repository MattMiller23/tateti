import React from 'react';
import { StyleSheet, View } from 'react-native';
import TaTeTi from './components/TaTeTi';

export default function App(): JSX.Element {
    return (
        <View style={styles.body}>
            <TaTeTi />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        margin: 0,
        fontFamily: 'Helvetica, sans-serif',
    }
});
