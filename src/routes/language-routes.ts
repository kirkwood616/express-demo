import express from "express";
const languageRoutes = express.Router();

let languages: string[] = ["English", "French", "Italian", "Spanish"];

languageRoutes.get("/", function (req, res) {
  res.json(languages);
});

// THIS IS TO SHOW A LANGUAGE BY ID /languages/:id
languageRoutes.get("/:id/", function (req, res) {
  // use req.param.id => a specific language
  let searchIndex: number = Number.parseInt(req.params.id) - 1;
  let languageObject = languages[searchIndex];
  res.json(languageObject);
});

languageRoutes.get("/random", function (req, res) {
  res.json("Random languages");
});

export default languageRoutes;
