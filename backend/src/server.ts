import express from "express";
import cors from "cors"
import { sample_film, sample_tags } from "./data";

const app =express();
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

const port = 5000;
app.listen(port, ()=>{
    console.log("Website served on http://localhost:" + port)
})