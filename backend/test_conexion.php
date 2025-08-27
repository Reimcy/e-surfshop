<?php

/*$servername = "192.168.192.1"; // Ejemplo: "172.28.128.1"
$username = "surfshop_user";      // Tu usuario de MySQL
$password = "isabel"; // Tu contraseña
$dbname = "e-surfshop";          // El nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
  die("🔴 Conexión fallida: " . $conn->connect_error . "\n");
}

echo "✅ ¡Conexión exitosa a la base de datos en Windows desde WSL!\n";

$conn->close();

?>
