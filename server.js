var pm2 = require('pm2');

const express = require("express")
const server = express()
const child = require('child_process')

server.all("/", (req, res) => {
  res.send("Bot is running!")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is ready.")
    //setInterval(intervalFunc, 1000 * 5);
  })
}

function intervalFunc() {
  
  process.on("exit", function () {
        require("child_process").spawn(process.argv.shift(), process.argv, {
            cwd: process.cwd(),
            detached : true,
            stdio: "inherit"
        });
    });
  //pm2.restart(pm2_app_name, function() {});
  process.exit();
}

//setInterval(intervalFunc, 1000 * 60 * 60 * 12);


module.exports = keepAlive