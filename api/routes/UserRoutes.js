const {addToLikedMovies, getLikedMovies, removeMoviesFromLists} = require("../controller/UserController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);
router.put("/delete", removeMoviesFromLists)
module.exports = router;