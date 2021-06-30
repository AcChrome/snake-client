const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });
  conn.setEncoding("utf8");

  conn.on("connect", (client) => {
    console.log("Snake is online");
    conn.write("Name: Pog");
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
