const multer = require("multer");

module.exports = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname, "../uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    const extencaoIMG = ["image/jpg", "image/png", "image/jpeg"].find(
      (formatoAceito) => formatoAceito === file.mimetype
    );
    if (extencaoIMG) return cb(null, true);
    return cb(null, false);
  },
});
