import axios from "axios"

const url = "http://localhost:5000/players"

export const getPlayers = () =>  axios.get(url)
export const createPlayers=(newPlayer)=>axios.post(url,newPlayer);
export const updatePlayers=(id,updatedPlayer)=>{
    // console.log(updatedPlayer)
    return axios.patch(`${url}/${id}`,updatedPlayer)}