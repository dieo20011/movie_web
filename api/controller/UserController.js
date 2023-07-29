const User = require("../model/UserModel");

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "Movie already Added to List" });
    } else await User.create({ email, likedMovies: [data] });
    return res.json({ msg: "Movie Added Sucessfully" });
  } catch (error) {
    return res.json({ msg: "Error" });
  }
};

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      res.json({ msg: "sucess", movies: user.likedMovies });
    } else return res.json({ msg: "User with given mail not found." });
  } catch (error) {
    return res.json({ msg: "Error" });
  }
};
module.exports.removeMoviesFromLists = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const movies = user.likedMovies;
      const movieIndex = movies.findIndex(({ id }) => id === movieId);
      if (!movieIndex) res.status(400).send({ msg: "Movie Not Found" });
      movies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies: movies,
        },
        { new: true }
      );
      return res.json({ msg: "Movie successfully removed.", movies });
    }
     else return res.json({msg: "Movie Delete"});
  } catch (error) {
    return res.json({ msg: "Error" });
  }
};
