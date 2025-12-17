const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/ask", async (req, res) => {
  try {
    const question = req.body.question;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: question }] }]
        })
      }
    );

    const data = await response.json();

    res.json({
      answer:
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from AI"
    });

  } catch (err) {
    console.error("AI ERROR:", err);
    res.status(500).json({ error: "AI error" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
