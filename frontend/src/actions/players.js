import * as api from "../api"

export const getPlayers = () => async (dispatch) => {
    try {
        const { data } = await api.getPlayers();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createPlayers = (player) => async (dispatch) => {
    try {
        const { data } = await api.createPlayers(player);
        dispatch({ type: "CREATE", payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updatePlayers = (id, player) => async (dispatch) => {
    console.log(id)
    console.log(player)
    try {
        console.log("try")
        const { data } = await api.updatePlayers(id, player);
        console.log(data)
        dispatch({ type: "UPDATE", payload: data })
    } catch (error) {
        console.log(error)
    }
}
