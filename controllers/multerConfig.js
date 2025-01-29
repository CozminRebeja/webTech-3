const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    // Get userId from headers instead of req.body (since req.body isn't available in Multer)
    const userId = req.headers['userid'] || 'unknown';

    // Save file as userID-photo.ext or userID-cover.ext
    cb(null, `${file.fieldname}${userId}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
