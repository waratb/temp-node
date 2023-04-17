// const http = require('http');

// const server = http.createServer((req, res) => {

//     if (req.url === '/') {
//         res.end('Welcome to the homepage')
//         // res.end
//     }
//     if (req.url === '/about'){
//         res.end('Welcome to the about page')
//         // res.end
//     }
//     res.end(`
//     <h1>Oops!! </h1>
//     <p>Soory bro</p>
//     <a href="/" >back home</a>
//     `)
// })

// server.listen(1000)

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the homepage')
    return; // ใส่ return เพื่อออกจากฟังก์ชันทันที
  }
  if (req.url === '/about'){
    res.end('Welcome to the about page')
    return; // ใส่ return เพื่อออกจากฟังก์ชันทันที
  }
  res.end(`
    <h1>Oops!! </h1>
    <p>Soory bro</p>
    <a href="/" >back home</a>
  `)
});

server.listen(1000);



