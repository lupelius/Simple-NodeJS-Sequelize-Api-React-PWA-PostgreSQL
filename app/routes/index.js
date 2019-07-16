let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/*', (req, res) => {
  return res.sendFile(
    path.resolve(__dirname, '..', '..', 'build', 'index.html')
  );
});

module.exports = router;
