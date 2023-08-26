const express = require("express");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const router = express.Router();
const multer = require("multer");
const isAuth = require("../middlewares/isAuth");
// const { uploadFile, getFileStream } = require("../utils/s3");
const { uploadToCloudinary, getImageUrl } = require("../utils/cloudinary");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Destination folder
//   },
//   filename: function (req, file, cb) {
//     // Generate a unique filename (you can customize this)
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

// const upload = multer({ storage: storage });
const storage1 = multer.memoryStorage();
const upload = multer({ storage: storage1 });

// @route   POST /upload/image
// @desc    Upload product images
// @access  protected
router.post("/image", isAuth, upload.single("image"), async (req, res) => {
  try {
    // console.log("req.file:", req.file);
    const uploadedImageUrl = await uploadToCloudinary(req.file);
    console.log(uploadedImageUrl);
    res.status(200).json({ imagePath: uploadedImageUrl });
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
    const imageUrl = await getImageUrl(req.params.filename); // Get image URL from Cloudinary
    res.setHeader("Content-Type", "image/jpeg");
    res.status(200).send(imageUrl);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: { msg: "Server error" } });
  }
});

module.exports = router;
