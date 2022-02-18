import express from "express";
const routes = express.Router();

routes.get("/", function (req, res) {
	// res.json("Home");
	// res.render("home"); // DISPLAYS TEMPLATE
	res.render("home", {
		name: "Awesome Bill",
		city: "Dawsonville",
		state: "Georgia",
		languages: {
			primary: "English",
			secondary: "Talkin Smack",
		},
		petsOne: ["Cody", "Skeeter"],
		pets: [
			{ name: "Cody", type: "cat" },
			{ name: "Skeeter", type: "dog" },
		],
		message: "Eat My Shorts",
	});
});

routes.get("/node", function (req, res) {
	res.json("Node");
});

export default routes;
