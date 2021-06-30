export interface Score {
    PLAYER_ONE: number;
    PLAYER_TWO: number
}

export interface PropsBoard {
    squares: Array<string | null>
    onPress: (value: number) => void;
    turn: string;
    winningSquares: Array<number>;
}

export interface PropsSquare{
    value: string | null;
    onPress: () => void;
    turn: string;
    winner: boolean;
}