import express, { Router } from "express";
import cors from "cors"

import filmRouter from './routers/film.router'
import userRouter from './routers/user.router'
const app =express();
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/films", filmRouter);
app.use("/api/users", userRouter)


const port = 5000;
app.listen(port, ()=>{
    console.log("Website served on http://localhost:" + port)
})