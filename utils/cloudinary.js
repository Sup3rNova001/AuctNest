const cloudinary = require("cloudinary").v2;
const fs = require("fs");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadToCloudinary(file) {
  const tempFilePath = `./uploads/${file.originalname}`;
  fs.writeFileSync(tempFilePath, file.buffer);

  // Upload the temporary file to Cloudinary
  const result = await cloudinary.uploader.upload(tempFilePath);
  // console.log(result);
  // Clean up: Delete the temporary file
  fs.unlinkSync(tempFilePath);

  return result.secure_url;
}

async function getImageUrl(filename) {
  try {
    const image = await cloudinary.search
      .expression(`filename:${filename}`)
      .execute();

    if (image && image.resources && image.resources.length > 0) {
      return image.resources[0].url;
    } else {
      throw new Error("Image not found on Cloudinary");
    }
  } catch (error) {
    throw new Error("Failed to fetch image from Cloudinary");
  }
}

module.exports = {
  uploadToCloudinary,
  getImageUrl,
};
