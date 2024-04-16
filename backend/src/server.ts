import express from "express";
import cors from "cors"
import { sample_film, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken"
const app =express();
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/films", (req,res) =>{
    res.send(sample_film);
})

app.get("/api/films/search/:searchTerm", (req,res)=>{
    const searchTerm =req.params.searchTerm;
    const films = sample_film
    .filter(film => film.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))
    res.send(films)
      }
)
app.get("/api/films/tags" , (req,res) => {
    res.send(sample_tags);
})
app.get("/api/films/tag/:tagName", (req, res)=>{
    const tagName = req.params.tagName;
    const films = sample_film.filter(film => film.tags?.includes(tagName));
    res.send(films);
})
app.get("/api/films/:filmId" ,(req, res) =>{
    const filmId= req.params.filmId;
    const film = sample_film.find(film => film.id ==filmId);
    res.send(film);
})

app.post("/api/users/login", (req , res)=>{
    const body = req.body;
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === body.email && 
        user.password === body.password);
        if(user){
            res.send(generateTokenResponse(user))
        }
        else{
            res.status(400).send("Username or Password invalid")
        }
})

const generateTokenResponse = (user:any)=>{
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    },"Here The Text",{
        expiresIn:"30d"
    });
    user.token = token;
    return user;
}
const port = 5000;
app.listen(port, ()=>{
    console.log("Website served on http://localhost:" + port)
})