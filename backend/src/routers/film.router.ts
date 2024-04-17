import { Router } from "express";
import { sample_film, sample_tags } from "../data";

const router= Router();

router.get("/", (req,res) =>{
    res.send(sample_film);
})

router.get("/search/:searchTerm", (req,res)=>{
    const searchTerm =req.params.searchTerm;
    const films = sample_film
    .filter(film => film.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))
    res.send(films)
      }
)
router.get("/tags" , (req,res) => {
    res.send(sample_tags);
})
router.get("/tag/:tagName", (req, res)=>{
    const tagName = req.params.tagName;
    const films = sample_film.filter(film => film.tags?.includes(tagName));
    res.send(films);
})
router.get("/:filmId" ,(req, res) =>{
    const filmId= req.params.filmId;
    const film = sample_film.find(film => film.id ==filmId);
    res.send(film);
})

export default router;