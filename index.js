
const program = require("commander");

// trabajar con archivos en el servidor
const fs = require("fs");

// 
const textractScan = require("./textractUtils");

// program.version("0.0.1").description("Textract Lab");

// program
//     .command("scan <filePath>")
//     .alias("s")
//     .description("scans a file")
//     .action(async filePath => {
//         console.log("----------------------filePath-------------------");
//         console.log(filePath);
//         console.log("----------------------filePath-------------------");
//         var data = fs.readFileSync(filePath);
//         const results = await textractScan(data);
//         console.log(results);
//     });

// program.parse(process.argv);
// console.log(process.argv);

const data = String('C:\\Users\\Aprendiz\\Desktop\\proyec\\amazon\\amazonTextrac\\form-example.PNG')

let imobocar = async(data)=>{
    const results = await textractScan(data);
}

imobocar(data);

