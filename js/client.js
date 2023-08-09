const net = require('net');

// Datos del servidor (PC Debian)
const HOST = '192.168.10.121'; //Dirección IP del servidor debian
const PORT = 3000; // El mismo puerto que usamos en el servidor

// Crear el cliente
const client = net.createConnection({ host: HOST, port: PORT }, () => {
  console.log('Conectado al servidor');
  
  // Enviar datos al servidor
  const datosEnviar = 'Estos son los datos a enviar desde la PC de Windows';
  client.write(datosEnviar);
});

// Manejo de recepción de datos desde el servidor (no necesario en este ejemplo)
client.on('data', (data) => {
  console.log('Respuesta del servidor:', data.toString());
});

// Manejo de desconexión del servidor
client.on('end', () => {
  console.log('Desconectado del servidor');
});

// Manejo de errores
client.on('error', (error) => {
  console.error('Error en la conexión:', error.message);
});