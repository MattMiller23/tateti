import React, { useState } from 'react';
import { Modal, StyleSheet, View, Text, Button } from 'react-native';
import { Score } from '../types/interfaces';
import { Board } from './Board';
import { ScoreBoard } from './ScoreBoard';


const winningPositions: Array<number>[] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const TaTeTi = (): JSX.Element => {

    const [isVisible, setIsVisible] = useState(false)
    const [turn, setTurn] = useState<string | null>('PLAYER_ONE');
    const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
    const [score, setScore] = useState<Score>({ PLAYER_ONE: 0, PLAYER_TWO: 0 });
    const [winningSquares, setwinningSquares] = useState<number[]>([]);


    const reset = () => {
        setTurn('PLAYER_ONE');
        setSquares(Array(9).fill(null));
        setwinningSquares([]);
    };

    const checkForWinner = (newSquares: Array<string | null>) => {
        for(let i = 0; i < winningPositions.length; i++) {
            const [a, b, c] = winningPositions[i];
            // si a es distinto de nullo y a es igual a b y si a es igual a c entonces hay ganador
            if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
                endGame(newSquares[a], winningPositions[i]);
                setIsVisible(true);
                return;
            }
        }
        if (!newSquares.includes(null)) {
            // empate
            endGame(null, Array.from(Array(10).keys()));
            return;
        }
        setTurn(turn === 'PLAYER_ONE' ? 'PLAYER_TWO' : 'PLAYER_ONE');
    };

    const handleClick = (square: number) => {
        const newSquares = [...squares];
        newSquares.splice(square, 1, turn);
        setSquares(newSquares);
        checkForWinner(newSquares);
    };

    const endGame = (result: string|null, winningPositions: number[]) => {
        setTurn(null);
        if(result !== null) {
            setScore({
                ...score,
                [result]: score[result] + 1,
            });
        }
        setwinningSquares(winningPositions);
        setTimeout(reset, 2000);
    };
    return (
        <>
        <View style={styles.container}>
            <Board winningSquares={winningSquares} turn={turn!} squares={squares} onPress={handleClick} />
            <ScoreBoard PLAYER_ONE={score.PLAYER_ONE} PLAYER_TWO={score.PLAYER_TWO} />
        </View>

        <Modal 
            animationType='fade'
            visible={ isVisible }
            transparent={ true }
        >
            <View style={styles.backgroundModal}>
                <View style={styles.containerModal}>
                    <Text>3 es en raya wuachin</Text>
                </View>
                <Button title="Cerrar Modal" onPress={ () => setIsVisible(false) }/>
            </View>

        </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#21094E'
    },
    backgroundModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerModal: {
        backgroundColor: '#ffffff',
        width: '200',
        height: '200',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        elevation: 10,
        borderRadius: 10
    },
    textModal: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    }
});


export default TaTeTi;
