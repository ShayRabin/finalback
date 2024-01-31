const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Card = require("../modal/Card");

router.post("/cards", (req, res) => {
  const cardData = req.body;
  const newCard = new Card(cardData);

  newCard
    .save()
    .then((savedCard) => {
      res.json(savedCard);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error creating card" });
    });
});

// Get all cards
router.get("/cards", (req, res) => {
  Card.find()
    .then((cards) => {
      res.json(cards);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error fetching cards" });
    });
});

// Get a specific card by ID
router.get("/cards/:id", (req, res) => {
  const cardId = req.params.id;

  Card.findById(cardId)
    .then((card) => {
      if (!card) {
        return res.status(404).json({ error: "Card not found" });
      }
      res.json(card);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error fetching card" });
    });
});

// Update a specific card by ID
router.put("/cards/:id", (req, res) => {
  const cardId = req.params.id;
  const cardData = req.body;

  Card.findByIdAndUpdate(cardId, cardData, { new: true })
    .then((updatedCard) => {
      if (!updatedCard) {
        return res.status(404).json({ error: "Card not found" });
      }
      res.json(updatedCard);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error updating card" });
    });
});

// Delete a specific card by ID
router.delete("/cards/:id", (req, res) => {
  const cardId = req.params.id;

  Card.findByIdAndDelete(cardId)
    .then((deletedCard) => {
      if (!deletedCard) {
        return res.status(404).json({ error: "Card not found" });
      }
      res.json(deletedCard);
    })
    .catch((err) => {
      console.error("Error deleting card:", err);
      res.status(500).json({ error: "Error deleting card" });
    });
});

module.exports = router;
