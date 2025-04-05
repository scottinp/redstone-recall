const express = require('express');
const router = express.Router();
const QuizSet = require('../models/QuizSet');

router.get('/', async (req, res) => {
  try {
    const sets = await QuizSet.find({}, '_id'); 
    res.json(sets.map(set => set._id)); 
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const set = await QuizSet.findById(req.params.id);
    if (!set) return res.status(404).json({ error: 'Quiz set not found' });
    res.json(set);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});



router.get('/', async (req, res) => {
  try {
    const sets = await QuizSet.find({}, '_id');
    console.log('📦 Quiz sets from DB:', sets); // ✅ LOG IT
    res.json(sets.map(set => set._id));
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;