import express from "express";
import Shop from "../models/Shop";
const shopRoutes = express.Router();

const shops: Shop[] = [
  { id: 111, name: "Pepper's Pizza", rating: 4.5 },
  { id: 222, name: "Clive's Chives", rating: 3.4 },
  { id: 333, name: "Bretty's Brews", rating: 4.3 },
  { id: 444, name: "Sylvester's Shoes", rating: 3.8 },
  { id: 555, name: "Teddy's Tunes", rating: 4.7 },
];
let nextId: number = 666;

// LIST ALL SHOPS
// shopRoutes.get("/", function (req, res) {
//   res.json(shops);
// });

// QUERY http://localhost:3000/api/shops?minRating=4.0
shopRoutes.get("/", function (req, res) {
  let minRatingParam: string = req.query.minRating as string;

  if (minRatingParam) {
    let minRating: number = Number.parseFloat(minRatingParam);

    let filteredShops: Shop[] = shops.filter(
      (shop) => shop.rating >= minRating
    );

    res.json(filteredShops);
  } else {
    res.json(shops);
  }
});

shopRoutes.post("/", function (req, res) {
  let newShop: Shop = req.body;
  newShop.id = nextId;
  nextId += 111;
  shops.push(newShop);
  res.status(201);
  res.json(newShop);
});

shopRoutes.delete("/:id", function (req, res) {
  // use id parameter to delete the corresponding Shop object from array
  let inputId: number = Number.parseInt(req.params.id);
  // find index & delete
  let shopIndex: number = shops.findIndex((shop) => shop.id === inputId);
  shops.splice(shopIndex, 1);
  res.status(204);
  res.json("");
});

shopRoutes.get("/:id", function (req, res) {
  // search shop array
  // find shop by id property
  // return the json response with the shop object
  let idNum: number = parseInt(req.params.id);
  let match = shops.find((shop) => shop.id === idNum);
  if (match) {
    res.json(match);
  } else {
    res.status(404).send({ error: `Shop not found: ${idNum}` });
  }
});

export default shopRoutes;
