const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'strix-digital', 
  api_key: '576127676785571', 
  api_secret: 'aLySilv69kgAZPTDzboyAraiKGQ'
});
module.exports = cloudinary;
