const dotenv = require("dotenv"); // For .env file
const { Router } = require("express"); // Import Router

const router = Router(); // Create an instance of Router

// 8ball route
router.get("/", async (req, res) => {
	await res.send({ Message: randomMessage() });
});

module.exports = router; // Export router
