const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "YOUR_GEMINI_API_KEY";

app.post("/ask", async (req, res) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${AIzaSyAgSiUpLprnW2-xvLgH9CmtUU_vUmqCfpI}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: req.body.question }] }]
        })
      }
    );

    const data = await response.json();
    res.json({ answer: data.candidates[0].content.parts[0].text });
  } catch (err) {
    res.status(500).json({ answer: "AI error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
