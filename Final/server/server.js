const path = require('path');
const express = require('express');
const server = express();

server.get('./home', (req, res) =>{
    res.sendFile(path.resolve(__dirmane, './home.html'));
});
// the process.env.PORT its a parameter that only public the website

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});