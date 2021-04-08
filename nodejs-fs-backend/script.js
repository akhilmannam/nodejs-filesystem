const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

const fs = require('fs');
const path = require('path');

const directory = 'D:\\GUVI';

const time = new Date().toLocaleTimeString();
const date = new Date().toLocaleDateString();

fs.writeFile('currentdate-time.txt',`${date} and ${time}`, 'utf8', (err) => {
    if(err) throw err;
})

app.get(`/`, (req,res) => {
    fs.readdir(directory, {withFileTypes : true} ,(error, files) => {
        if(error) console.log(error);
        let filesInDirectory = [];
        files.forEach(file => {
            if(file.isDirectory()){
                filesInDirectory.push({
                    name : file.name,
                    isDirectory : file.isDirectory(),
                    extension : path.extname(file.name)
                })
            }
            else{
                filesInDirectory.push({
                    name : file.name,
                    isDirectory : file.isDirectory(),
                    extension : path.extname(file.name)
                })
            }
        })
        res.json(filesInDirectory);
    })
})

app.listen(port);