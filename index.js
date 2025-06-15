import { createServer } from 'http';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(JSON.stringify({"data":"too many requests"}));
  res.end();
});
server.listen(8000);