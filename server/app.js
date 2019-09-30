const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg') //Appending .jpg
    }
});

var upload = multer({ storage: storage });

const app = express();
const PORT = 8000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/upload', upload.single('photo'), (req, res) => {
  console.log(req.file);
  if (req.file) {
    res.json(req.file);
  }
  else throw 'error';
});

app.listen(PORT, () => {
  console.log('Listening at ' + PORT );
});