const router = require("express").Router;

const axios = require("axios");

const googleRouter = router();

googleRouter.get("/places", async (req, res) => {
  const { type } = req.query;
  console.log(req.query);
  try {
    const hotelRes = await axios.get(
      // https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery
      `https://maps.googleapis.com/maps/api/place/textsearch/json`,
      {
        params: {
          key: "AIzaSyAgyAAPxiaxnD23FRxnI03LYR7TKavLk1Q",
          type: "lodging",
          fields: "name,rating,formatted_address",
          query: `hotels in ${type}`,
        },
      }
    );
    const foodRes = await axios.get(
      // https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery
      `https://maps.googleapis.com/maps/api/place/textsearch/json`,
      {
        params: {
          key: "AIzaSyAgyAAPxiaxnD23FRxnI03LYR7TKavLk1Q",
          type: "restaurants",
          fields: "name,rating,formatted_address",
          query: `restaurants in ${type}`,
        },
      }
    );
    const interestRes = await axios.get(
      // https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery
      `https://maps.googleapis.com/maps/api/place/textsearch/json`,
      {
        params: {
          key: "AIzaSyAgyAAPxiaxnD23FRxnI03LYR7TKavLk1Q",
          type: "point_of_interest",
          fields: "name,rating,formatted_address",
          query: `things to do in ${type}`,
        },
      }
    );

    res.json({
      hotels: hotelRes.data,
      food: foodRes.data,
      interest: interestRes.data,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error fetching from google" });
  }
});

module.exports = googleRouter;
