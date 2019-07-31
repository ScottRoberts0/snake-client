const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8'); 

   conn.on('connect', () => {
     console.log("Successfully connected to game server");
     conn.write("Name: SDR");
   });

  // Test Moves
  //  conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 1000);
    
  //   setTimeout(() => {
  //     conn.write("Move: right");
  //   }, 1500);
  // });



  conn.on('data', (data) => {
    console.log('Message from server: ', data)
  });
  // interpret incoming data as text
 


  return conn;
}



module.exports = connect;