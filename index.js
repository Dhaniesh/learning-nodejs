/* ===== http server =====
import { createServer } from 'http';
import fs from 'fs';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.writeFile('mynewfile1.txt', 'Hello content!\n', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
res.end();
});

server.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
*/


/* ===== Event emitter =====
import EventEmitter from "events";
const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.emit('greet', 'alice');
*/

/* ===== Callback and promise =====
function isNumberCallback(number, callback){
    if(typeof number !== 'number') callback(new Error(`${number} is not a number`), )
    else callback(null, 'Valid number')
}

isNumberCallback('5', (err, result)=>{
    if (err) console.log(err.message)
    else console.log(result);
})

function isNumberCallback(number){
    return new Promise((res, rej)=>{
        if(typeof number !== 'number') rej(new Error(`${number} is not a number`))
        else res('Valid number')
    })
}
isNumberCallback('5').then(res=>console.log(res)).catch(err=>console.log(err.message))
*/