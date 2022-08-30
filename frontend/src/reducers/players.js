const result =  (players = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...players, action.payload];
        case 'UPDATE':
            // console.log(action.payload)
            return players.map((player) => player._id === action.payload._id ? action.payload : players)
        default:
            return players
    }
};

export default result;