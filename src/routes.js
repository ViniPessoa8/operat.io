const express = require('express');
const path    = require('path');
const router  = express.Router();

// const src_path = path.join(__dirname, 'src');
console.log(__dirname);

path_file = path.join(__dirname, '/homepage.html');

router.get('/homepage', (req, res) => {
    res.sendFile(path_file);
});

module.exports = router;