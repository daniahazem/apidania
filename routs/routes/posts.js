const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('we are in post');
});
router.get('/specific', (req, res) => {
    res.send('we are in specific');
});
module.exports = router;
