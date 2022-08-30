import express from "express";
import { getPlayers,createPlayers,updatePlayers } from "../controllers/players.js";

const router=express.Router();

router.get('/',getPlayers);
router.post('/',createPlayers);
router.patch('/:id',updatePlayers);
export default router;