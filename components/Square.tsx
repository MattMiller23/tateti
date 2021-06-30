import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { PropsSquare } from '../types/interfaces';

const Square = ({value, onPress, turn, winner}: PropsSquare): JSX.Element => {
    
    const handleClick = () => {
        turn !== null && value === null && onPress();
    };

    const validateValue = () => {
        if(value) {
            return value === 'PLAYER_ONE' ? styles.squarePlayerOne : styles.squarePlayerTwo;
        }
    };

    return (
        <TouchableOpacity onPress={handleClick}>
            <View style={[styles.square, validateValue()]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    square: {
        width: '100px',
        height: '100px',
        backgroundColor: '#511281',
        margin: '5px',
        transition: 'all .2s',
        borderRadius: 0,
    },
    squarePlayerOne: {
        backgroundColor: '#4CA1A3',
        borderRadius: 50
    },
    squarePlayerTwo: {
        backgroundColor: '#A5E1AD',
        borderRadius: 50,
    }
});

export default Square;
