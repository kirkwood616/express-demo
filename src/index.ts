import express from "express";
import routes from "./routes/app-routes";
import languageRoutes from "./routes/language-routes";
import userRoutes from "./routes/user-routes";
import searchRoutes from "./routes/search-routes";
import shopRoutes from "./routes/shop-routes";

const app = express();

const port = 3000; // localhost:3000 IN BROWSER

app.use(express.json()); // FOCUS ON JSON BASED REQUESTS
app.use("/", routes);
app.use("/languages", languageRoutes); // LANGUAGE ROUTES
app.use("/users", userRoutes); // ENABLE "/users"
app.use("/", searchRoutes); //ALTERNATIVE TO LANGUAGES & USERS

//ENABLE /api/shops
app.use("/api/shops", shopRoutes);

// DIRECTLY SET ROUTES
app.get("/students", function (req, res) {
  res.json("Getting all students...");
});

app.post("/students", function (req, res) {
  res.json("Adding a student");
});

app.put("/students", function (req, res) {
  res.json("Adding a student");
});

app.delete("/students", function (req, res) {
  res.json("Deleting a student");
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
