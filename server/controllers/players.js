import mongoose from "mongoose";
import playerModel from "../models/playerModel.js"

export const getPlayers = async (req, res) => {
    try {
        const playerModels = await playerModel.find();
        res.status(200).json(playerModels)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPlayers = async (req, res) => {
    const player = req.body;
    const newPlayer = new playerModel(player)
    try {
        await newPlayer.save();
        res.status(201).json(newPlayer)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updatePlayers = async (req, res) => {
    const { id } = req.params;
    const player = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedPlayer = await playerModel.findByIdAndUpdate(id, { ...player, id }, { new: true });
    res.json(updatedPlayer);
}