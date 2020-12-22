const router = require("express").Router;

const axios = require("axios");

const googleRouter = router();

googleRouter.get("/places", async (req, res) => {
  const { type } = req.query;
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?&type=lodging&fields=name,rating,formatted_phone_number`,
      {
        params: { query: type, key: "AIzaSyAgyAAPxiaxnD23FRxnI03LYR7TKavLk1Q" },
      }
    );
    res.json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error fetching from google" });
  }
});

module.exports = googleRouter;
