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

  conn.on('data', (data) => {
    console.log('Message from server: ', data)
  });
  // interpret incoming data as text
 

  return conn;
}



console.log('Connecting ...');
connect();