const express = require("express");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const router = express.Router();
const multer = require("multer");
const isAuth = require("../middlewares/isAuth");
const { uploadFile, getFileStream } = require("../utils/s3");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder
  },
  filename: function (req, file, cb) {
    // Generate a unique filename (you can customize this)
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// @route   POST /upload/image
// @desc    Upload product images
// @access  protected
router.post("/image", isAuth, upload.single("image"), async (req, res) => {
  const file = req.file;
  try {
    // const result = await uploadFile(file);
    const uploadedFilePath = `${file.filename}`;
    // await unlinkFile(file.path);
    // res.status(200).json({ imagePath: `/upload/image/${result.Key}` });
    res.status(200).json({ imagePath: "/upload/image/" + uploadedFilePath });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: { msg: "Server error" } });
  }
});

// @route   GET /upload/image/:key
// @desc    Get image with key
// @access  protected
router.get("/image/:filename", async (req, res) => {
  try {
    // const fileBuffer = await getFileStream(req.params.key);

    // res.status(200).send(fileBuffer);
    // // readStream.pipe(res);
    res.setHeader("Content-Type", "image/jpeg");
    // console.log(req.params.filename);
    const fileBuffer = fs.readFileSync(`uploads/${req.params.filename}`);
    res.status(200).send(fileBuffer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: { msg: "Server error" } });
  }
});

module.exports = router;
