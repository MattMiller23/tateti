import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { PropsBoard } from '../types/interfaces';
import Square from './Square';

export const Board = ({squares, onPress, turn, winningSquares}: PropsBoard): JSX.Element => {

    const createSquares = (values: number[]): ReactNode => {
        return values.map((value) => {
            return (
                <Square
                    winner={winningSquares.includes(value)}
                    turn={turn}
                    onPress={() => onPress(value)}
                    key =  { `square_${value}` } 
                    value = { squares[value] }
                />
            );
        });
    };

    return (
        <View style={styles.board}>
            <View style={styles.row}>
                {createSquares([0, 1, 2])}
            </View>
            <View style={styles.row}>
                {createSquares([3, 4, 5])}
            </View>
            <View style={styles.row}>
                {createSquares([6, 7, 8])}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    board: {
        display: 'flex',
        flexDirection: 'row',
    },
    row: {
        display: 'flex',
    }
});

