import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "YOUR_GEMINI_API_KEY";

app.post("/ask", async (req, res) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
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
  } catch {
    res.status(500).json({ answer: "Error getting response" });
  }
});

app.listen(3000, () => console.log("Server running on 3000"));
