import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import playerRoute from "./routes/palyers.js"

const app = express();

app.use(bodyParser.json({ "limit": "30mb", "extended": "true" }));
app.use(bodyParser.urlencoded({ "limit": "30mb", "extended": "true" }));
app.use(cors());

app.use('/players', playerRoute);

const CONNECTION_URL = 'mongodb+srv://gopikrishna:abcd1234@cluster0.38oq2.mongodb.net/?retryWrites=true&w=majority'
const port = process.env.port || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server Running on : ${port}`)))
    .catch((error) => console.log(error))
mongoose.set('useFindAndModify', false);