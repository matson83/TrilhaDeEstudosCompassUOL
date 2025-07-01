const fs = require('fs'); // File System

fs.readFile(__dirname + '/Arquivo.txt','utf-8',(err,data) =>{
    if(err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    console.log("Conteúdo do arquivo:", data);
});