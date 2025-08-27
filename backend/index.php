<?php
// 1. Mostrar todos los errores (¡muy importante para desarrollo!)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// 2. Definir el tipo de contenido como JSON desde el principio
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Para permitir peticiones desde cualquier origen

// --- Conexión a la base de datos (sin cambios) ---
$servidor = "192.168.192.1";
$usuario = "surfshop_user";
$clave = "isabel";
$basededatos = "e-surfshop";
$conexion = mysqli_connect($servidor, $usuario, $clave, $basededatos);

if (!$conexion) {
    // Si la conexión falla, se envía un error en formato JSON
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Error de conexión: ' . mysqli_connect_error()]);
    exit; // Detener el script si no hay conexión
}

// --- Funciones (sin cambios, están bien) ---
function obtenerProductosPorMarca($conexion, $marcaId) {
    $query = "SELECT * FROM surf_items WHERE marca_id = ?";
    $stmt = mysqli_prepare($conexion, $query);
    mysqli_stmt_bind_param($stmt, "i", $marcaId);
    mysqli_stmt_execute($stmt);
    $resultado = mysqli_stmt_get_result($stmt);
    $productos = [];
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $productos[] = $fila;
    }
    return $productos;
}

function obtenerTodasLasMarcas($conexion) {
    $query = "SELECT * FROM marcas";
    $resultado = mysqli_query($conexion, $query);
    $marcas = [];
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $marcas[] = $fila;
    }
    return $marcas;
}

function obtenerProductoPorId($conexion, $productoId) {
    $query = "SELECT * FROM surf_items WHERE id = ?";
    $stmt = mysqli_prepare($conexion, $query);
    mysqli_stmt_bind_param($stmt, "i", $productoId);
    mysqli_stmt_execute($stmt);
    $resultado = mysqli_stmt_get_result($stmt);
    return mysqli_fetch_assoc($resultado);
}

// --- Lógica para manejar las rutas de la API ---
$response = [];
$endpoint = $_GET['api'] ?? null; // Usar el operador de fusión de null para más limpieza

if ($endpoint === 'marcas') {
    $response = obtenerTodasLasMarcas($conexion);
} elseif ($endpoint === 'productos' && isset($_GET['marca_id'])) {
    $marcaId = intval($_GET['marca_id']);
    $response = obtenerProductosPorMarca($conexion, $marcaId);
} elseif ($endpoint === 'producto' && isset($_GET['id'])) {
    $productoId = intval($_GET['id']);
    $response = obtenerProductoPorId($conexion, $productoId);
} else {
    // Si no se especifica un endpoint válido, se muestra un mensaje de error
    http_response_code(400); // Bad Request
    $response = [
        'error' => 'Endpoint no válido',
        'endpoints_disponibles' => [
            '/?api=marcas',
            '/?api=productos&marca_id=X',
            '/?api=producto&id=X'
        ]
    ];
}

// 3. Imprimir la respuesta como JSON y cerrar la conexión
echo json_encode($response);
mysqli_close($conexion);
?>

