import mongoose from "mongoose"

const playerSchema = mongoose.Schema({
    team:String,
    name:String,
    description:String,
    average:Number,
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    }    
})

const playerModel = mongoose.model('playerModel',playerSchema);

export default playerModel;