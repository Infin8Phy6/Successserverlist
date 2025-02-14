const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend connections
app.use(cors());  // You only need this line to enable CORS

app.use(express.json()); // Middleware for parsing JSON requests

// Define JSON objects for different categories (profed and science)
const profedUrls = {
  "level1": "https://success-wkz4.onrender.com",//english
  "level2": "https://success2.onrender.com",//profed
};



// Endpoint to get all profed levels and their URLs as JSON
app.get('/profed', (req, res) => {
  res.json(profedUrls);  // Send the profed URL JSON structure as response
});


// Endpoint to get a specific level for profed
app.get('/profed/:level', (req, res) => {
  const level = req.params.level;
  
  if (profedUrls[level]) {
    res.json({ url: profedUrls[level] });  // Send the specific URL for the profed level
  } else {
    res.status(404).json({ error: "Profed level not found" });  // Handle non-existent levels
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
