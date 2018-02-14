const fs = require("fs");
const path = require("path");
const uuidv1 = require("uuid/v1");
const csv = require("csvtojson");

const convertToJson = (filePath) =>{
    var Converter = csv.Converter;
    var csvConverter = new Converter({ constructResult:false });

    const folderName = uuidv1();
    fs.mkdirSync(folderName);

    var readStream = fs.createReadStream(filePath);
    var writeStream = fs.createWriteStream(path.join(__dirname, folderName, "result.json"));

    readStream.pipe(csvConverter).pipe(writeStream);
};

convertToJson(process.argv[2]);

// const http = require("http");

// const downloadPage = (url = "http://nodeprogram.com") => {
//     const fetchPage = (urlF, callback) => {
//         http.get(urlF, (response) => {
//             let buff = "";

//             response.on("data", (chunk) => {
//                 buff += chunk
//             });

//             response.on("end", () => {
//                 callback(null, buff)
//             });
//         }).on("error", (error) => {
//             console.error(`Got error: ${error.message}`)
//             callback(error)
//         });
//     };

//     const folderName = uuidv1();

//     fs.mkdirSync(folderName);

//     fetchPage(url, (error, data) => {
//         if (error) {
//             return console.log(error);
//         }

//         fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url);
//         fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data);
        
//         console.log('downloading is done in folder ', folderName)
//     });
// }

// downloadPage(process.argv[2]);