const dotenv = require("dotenv"); // For .env file
const { Router } = require("express"); // Import Router

const router = Router(); // Create an instance of Router

// Root route
router.get("/", async (req, res) => {
	await res.send("Hello World!");
});

module.exports = router; // Export router
