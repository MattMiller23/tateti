import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Score } from '../types/interfaces';

export const ScoreBoard = ({PLAYER_ONE, PLAYER_TWO}: Score) => {
    return (
        <View style={styles.scoreBoard}>
            <View style={styles.playerTwo}>{PLAYER_TWO}</View>
            <View style={styles.playerOne}>{PLAYER_ONE}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    scoreBoard: {
        width: 320,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
    },
    playerOne: {
        color: '#511281',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold',
        backgroundColor: '#4CA1A3',
        width: '50%'
    },
    playerTwo: {
        color: '#511281',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold',
        backgroundColor: '#A5E1AD',
        width: '50%'
    },
});
