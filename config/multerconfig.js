const multer = require('multer');
const crypto = require("crypto");
const path = require("path");

//disk storage setup
//in disk storage we will upload file on server while in memory storage we upload on database.


const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, './public/images/uploads')
    },
    filename: function(req,file,cb)
{        crypto.randomBytes(12,function (err,name){
            const fn = name.toString("hex") + path.extname(file.originalname)
            //** file contains all the details about the uploaded file and name is in buffer, so first change it to String using hex.
            // path.extname add the extension of the file uploaded
                             
            cb(null, fn);
        })
    }
})

//export upload variable
const upload = multer({storage: storage})
module.exports = upload;