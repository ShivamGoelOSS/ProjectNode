// const { faP } = require('@fortawesome/free-solid-svg-icons');
// const fs=require('fs');
// const filePath='file.txt';

/*
const p="C:\Users\Work\Desktop\Project Node\file.txt";
const path=require("path");
const dirname=path.dirname(p);
const extension = path.extname(p);
console.log(dirname);
console.log(extension);
*/

// Renaming a File
/*
    fs.renameSync(filePath,"file3.txt");
*/

// Copying a File
/*
    const dirPath="dir/file2.txt";
    fs.copyFileSync(filePath,dirPath);
*/

// CREATING A DIRECTORY
/*
    fs.mkdir("dir",(err)=>{
        if(err){
            return console.log(err);
        }
        console.log("Directory Formed");
    })
*/

// REMOVING A DIRECTORY
/*
    fs.rmdir("dir",(err)=>{
        if(err){
            return console.log(err);
        }
        console.log("Directory Removed");
    })
*/

/*
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            return console.log(err);
        }
        console.log(data);
        fs.appendFileSync(filePath," !");
        setTimeout(()=>fs.readFile(filePath, 'utf-8', (err,data)=>{
            if(err){
                return console.log(err);
            }
            console.log(data);
        }),1000);
    })
*/

// const fs=require('fs');
// const { read }=require('fs');
// const http=require('http');
// const server = http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/html');
//     if(req.url==='/login'){
//         res.write('<html> <head> <title>node js class </title> </head><body>');
//         res.write('<h1>Hello, Login!</h1>');
//         res.write('</body><html>');
//     }
//     else{
//         fs.readFile('index.html', function (err, html) {
//             if (err) {
//                 // Handle the error gracefully
//                 console.error('Error reading file:', err);
//                 res.write('500 Internal Server Error');
//                 res.end();
//             } else {
//                 fs.readFile('index.html', (err, html) => {
//                     if (err) {
//                         res.writeHead(404, { 'Content-Type': 'text/html' });
//                         res.write('404 Not Found');
//                         res.end();
//                         return;
//                     }
        
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.write(html);
//                     res.end();
//                 });
//             }
//         });
        
//     }
//     res.end();
// })

// const port = 3000;
// const host = "localhost";
// server.listen(port,host,()=>{
//     console.log(`Server is listening on http://${host}:${port}`);
// })


const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/login') {
        res.write('<html> <head> <title>Node.js Class </title> </head><body>');
        res.write('<h1>Hello, Login!</h1>');
        res.write('</body></html>');
        res.end();
    } else {
        fs.readFile('index.html', (err, html) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Not Found');
                res.end();
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
        });
    }
});

const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
