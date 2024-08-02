import express from "express";
import MongoConnect from "./config/mongoose.mjs";
import cors from "cors";
import 'dotenv/config';
import audit from "express-requests-logger"
import usersRouter from "./routes/Users.mjs";

const app = express();
const port = process.env.PORT;
app.use(express.json({ limit: '500kb' }));
app.use(cors({
    origin: ['http://localhost:3003','http://localhost:3000'], // Replace with your client's origin
    methods: 'GET,POST,PUT,OPTIONS,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(usersRouter);
app.use(audit);


app.get('/', (req, res) => {
    res.send('this is homepage')
})

app.listen(port, () => {
    MongoConnect();
    console.log(`server user is running at port number ${port}`)
});