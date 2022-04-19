const dotenv = require("dotenv"); // For .env file
const { Router } = require("express"); // Import Router

const router = Router(); // Create an instance of Router

// About page route
router.get("/", async (req, res) => {
	await res.send({ Message: "About page", Date: new Date() });
});

module.exports = router; // Export router
