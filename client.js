const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Snake is online");
    conn.write("Name: Pog");
    setInterval(() => {
      conn.write("Move: up");
    }, 50);
    setInterval(() => {
      conn.write("Move: left");
    }, 75);
    setInterval(() => {
      conn.write("Move: down");
    }, 65);



    // conn.write("Move: up");
    // conn.write("Move: up");
    // conn.write("Move: right");
    // conn.write("Move: right");
    // conn.write("Move: down");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: left");


  });

 conn.on("data", (data) => {
    console.log('server says', data);
  });




  return conn;
};


console.log("Connecting...");
connect();

module.exports = {
  connect,

};
